import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    titulo: '',
    contenido: '',
    error: null,
    loading: false
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    switch(action.type) {
        case EDITAR_AVISO:
            return{
                ...state,
                loading: true
            }
        case EDITAR_AVISO_EXITO:
            return{
                ...state,
                loading: true
            }
        case EDITAR_AVISO_ERROR:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}