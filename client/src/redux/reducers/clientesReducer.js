import {
    AGREGAR_CLIENTE,
    AGREGAR_CLIENTE_EXITO,
    AGREGAR_CLIENTE_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    clientes: [],
    error: null,
    loading: false
}

// eslint-disable-next-line
export default function(state = initialState, action){
    switch(action.type) {
        case AGREGAR_CLIENTE:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_CLIENTE_EXITO:
            return {
                loading: false,
                clientes: [...state.clientes, action.payload]
            }
        case AGREGAR_CLIENTE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    default:
        return state;
    }
}