import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR,
    DESCARGA_AVISO,
    DESCARGA_AVISO_EXITO,
    DESCARGA_AVISO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    aviso: {},
    error: null,
    loading: false,
    avisoeditar: null
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    switch(action.type) {
        case EDITAR_AVISO:
            return {
                ...state,
                productoeditar: action.payload,
                loading: action.payload
            }
        case EDITAR_AVISO_EXITO:
            return {
                ...state,
                loading: false,
                aviso: [...state.aviso, action.payload]
            }
        case EDITAR_AVISO_ERROR:
        case DESCARGA_AVISO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_AVISO:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGA_AVISO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                aviso: action.payload
            }
        default:
            return state;
    }
}