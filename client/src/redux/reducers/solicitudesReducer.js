import {
    AGREGAR_SOLICITUD,
    AGREGAR_SOLICITUD_ERROR,
    AGREGAR_SOLICITUD_EXITO,
    AGREGAR_USUARIO_DE_SOLICITUD,
    AGREGAR_USUARIO_DE_SOLICITUD_ERROR,
    AGREGAR_USUARIO_DE_SOLICITUD_EXITO,
    DESCARGA_SOLICITUDES,
    DESCARGA_SOLICITUDES_ERROR,
    DESCARGA_SOLICITUDES_EXITO,
    ELIMINAR_SOLICITUD,
    ELIMINAR_SOLICITUD_ERROR,
    ELIMINAR_SOLICITUD_EXITO,
} from '../types'

const initialState = {
    solicitudes: [],
    error:null,
    loading:false,
    solicitudeliminar:null,
    solicitudusuario:null,
}

// eslint-disable-next-line
export default function(state = initialState, action){
    switch (action.type) {
        case AGREGAR_USUARIO_DE_SOLICITUD:
            return {
                ...state,
                solicitudusuario:action.payload
            }
        case AGREGAR_SOLICITUD:
        case DESCARGA_SOLICITUDES:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_SOLICITUD_ERROR:
        case AGREGAR_USUARIO_DE_SOLICITUD_ERROR:
        case ELIMINAR_SOLICITUD_ERROR:
        case DESCARGA_SOLICITUDES_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case ELIMINAR_SOLICITUD:
            return{
                ...state,
                solicitudeliminar:action.payload
            }
        case ELIMINAR_SOLICITUD_EXITO:
            return {
                ...state,
                solicitudes: state.solicitudes.data.filter( solicitud => solicitud.idSolicitud !== state.solicitudeliminar),
                solicitudeliminar:null
            }
        case DESCARGA_SOLICITUDES_EXITO:
            return {
                ...state,
                loading:false,
                error:null,
                solicitudes: action.payload
            }
        case AGREGAR_SOLICITUD_EXITO:
            return {
                ...state,
                loading:false,
                solicitudes:[...state.solicitudes, action.payload]
            }
        case AGREGAR_USUARIO_DE_SOLICITUD_EXITO:
            return {
                ...state,
                loading:false,
                solicitudes: state.solicitudes.solicitudes.data.solicitudes.filter( solicitud => solicitud.idSolicitud !== state.solicitudusuario),
                solicitudusuario:null
            }
    
        default:
            return state;
    }
}