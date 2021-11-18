import {
    AGREGAR_CLIENTE,
    AGREGAR_CLIENTE_EXITO,
    AGREGAR_CLIENTE_ERROR,
    DESCARGA_CLIENTES,
    DESCARGA_CLIENTES_EXITO,
    DESCARGA_CLIENTES_ERROR,
    ELIMINAR_CLIENTE,
    ELIMINAR_CLIENTE_EXITO,
    ELIMINAR_CLIENTE_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    clientes: [],
    error: null,
    clienteeliminar:null,
    loading: false,
}

// eslint-disable-next-line
export default function(state = initialState, action){
    switch(action.type) {
        case AGREGAR_CLIENTE:
        case DESCARGA_CLIENTES:
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
        case DESCARGA_CLIENTES_ERROR:
        case ELIMINAR_CLIENTE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_CLIENTES_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                clientes: action.payload
            }
            case ELIMINAR_CLIENTE:
                return {
                    ...state, 
                    clienteeliminar: action.payload
                }
            case ELIMINAR_CLIENTE_EXITO:
                return {
                    ...state,
                    clientes: state.clientes.filter( cliente => cliente.idCliente !== state.clienteeliminar ),
                    clienteeliminar: null
                }
    default:
        return state;
    }
}