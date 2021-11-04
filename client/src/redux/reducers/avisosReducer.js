import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    titulo: 'El titulo del contenido',
    contenido: 'Contenido que es editable',
    error: null,
    loading: false
}

// eslint-disable-next-line
export default function(state = initialState, action) {
    switch(action.type) {
        case EDITAR_AVISO:
            return{
                ...state,
                loading: action.payload
            }
        case EDITAR_AVISO_EXITO:
            return{
                ...state,
                loading: false,
                titulo: [...state.titulo, action.payload]
            }
        case EDITAR_AVISO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}