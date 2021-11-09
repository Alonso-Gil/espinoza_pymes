import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    usuarios: [],
    error: null,
    loading: false
}

// eslint-disable-next-line
export default function(state = initialState, action){
    switch(action.type) {
        case AGREGAR_USUARIO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                usuarios: [...state.usuarios, action.payload]
            }
        case AGREGAR_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}