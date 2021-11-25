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

import clienteAxios from '../../config/axios';

export function crearUsuarioSolicitud(solicitud) {
    const token = localStorage.getItem('token') || ''; //Obtenemos el token para ver si está autenticado para las peticiones
    return async(dispatch) => {
        dispatch( agregarUsuarioSolicitud() );
        try {
            console.log(solicitud);
            await clienteAxios.post(`solicitudes/agregarUsuario/${solicitud.idSolicitud}`, solicitud, { headers: { 'x-token': token }});
            dispatch( agregarUsuarioSolicitudExito(solicitud) );
        } catch (error) {
            console.log(error);
            dispatch( agregarUsuarioSolicitudError(true));
        }
    }
}

const agregarUsuarioSolicitud = () => ({
    type:AGREGAR_USUARIO_DE_SOLICITUD,
    payload:true
});

//Si se guarda correctamente en la db
const agregarUsuarioSolicitudExito = solicitud => ({
    type:AGREGAR_USUARIO_DE_SOLICITUD_EXITO,
    payload:solicitud
});

const agregarUsuarioSolicitudError = estado => ({
    type:AGREGAR_USUARIO_DE_SOLICITUD_ERROR,
    payload:estado
});



export function crearSolicitudAction(solicitud) {
    return async (dispatch) => {
        dispatch( agregarSolicitud() );
        try{

            console.log(solicitud);
            //Insertar en la API
            await clienteAxios.post('/solicitudes/agregar', solicitud);
            //Si no hay errores, actualiza el state
            dispatch( agregarSolicitudExito(solicitud) );
        } catch (error) {
            console.log(error);
            //Si hay error cambiamos el state
            dispatch( agregarSolicitudError(true) );
        }
    }
}

const agregarSolicitud = () => ({
    type:AGREGAR_SOLICITUD,
    payload: true
});

//Si se guarda correctamente en la db
const agregarSolicitudExito = solicitud => ({
    type:AGREGAR_SOLICITUD_EXITO,
    payload:solicitud
});

const agregarSolicitudError = estado => ({
    type:AGREGAR_SOLICITUD_ERROR,
    payload:estado
});


//Función para descargar las solicitudes de la db
export function obtenerSolicitudesAction() {
    const token = localStorage.getItem('token') || '';
    return async(dispatch) => {

        dispatch( descargaSolicitudes() );
        try {
            
            const respuesta = await clienteAxios.get('solicitudes/listar', { headers: { 'x-token': token }});
            dispatch( descargaSolicitudesExito(respuesta));
        } catch (error) {
            console.log(error);
            dispatch(descargaSolicitudesError() );
        }
    }
}

const descargaSolicitudes = () => ({
    type: DESCARGA_SOLICITUDES,
    payload:true
});

const descargaSolicitudesExito = solicitudes => ({
    type:DESCARGA_SOLICITUDES_EXITO,
    payload:solicitudes
});

const descargaSolicitudesError = () => ({
    type:DESCARGA_SOLICITUDES_ERROR,
    payload:true
});

//Función para seleccionar y borrar la solicitud
export function borrarSolicitudAction(id) {
    const token = localStorage.getItem('token') || '';
    return async(dispatch) => {
        dispatch( obtenerSolicitudEliminar(id) );
        try {
            
            await clienteAxios.delete(`solicitudes/eliminar/${id}`, { headers: { 'x-token': token }});
            dispatch( eliminarSolicitudExito() );
        } catch (error) {
            console.log(error);
            dispatch( eliminarSolicitudError() );
        }
    }
}

const obtenerSolicitudEliminar = id => ({
    type: ELIMINAR_SOLICITUD,
    payload: id
});

const eliminarSolicitudExito = () => ({
    type: ELIMINAR_SOLICITUD_EXITO,
});

const eliminarSolicitudError = () => ({
    type: ELIMINAR_SOLICITUD_ERROR,
    payload: true
});