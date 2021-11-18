import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    DESCARGA_USUARIOS,
    DESCARGA_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR,
    ELIMINAR_USUARIO,
    ELIMINAR_USUARIO_EXITO,
    ELIMINAR_USUARIO_ERROR,
    EDITAR_USUARIO,
    EDITAR_USUARIO_EXITO,
    EDITAR_USUARIO_ERROR
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    usuarios: [],
    error: null,
    loading: false,
    usuarioeliminar: null,
    usuarioeditar: null
}

// eslint-disable-next-line
export default function(state = initialState, action){
    switch(action.type) {
        case AGREGAR_USUARIO:
        case DESCARGA_USUARIOS:
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
        case DESCARGA_USUARIOS_ERROR:
        case ELIMINAR_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_USUARIOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                usuarios: action.payload
            }
        case ELIMINAR_USUARIO:
            return {
                ...state, 
                usuarioeliminar: action.payload
            }
        case ELIMINAR_USUARIO_EXITO:
            return {
                ...state,
                usuarios: state.usuarios.filter( usuario => usuario.idUsuario !== state.usuarioeliminar ),
                usuarioeliminar: null
            }
        case EDITAR_USUARIO:
            return {
                ...state,
                usuarioeditar: action.payload
            }

        default:
            return state;
    }
}