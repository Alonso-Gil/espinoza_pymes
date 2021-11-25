import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR,
    DESCARGA_AVISO,
    DESCARGA_AVISO_EXITO,
    DESCARGA_AVISO_ERROR
} from "../types";

import clienteAxios from '../../config/axios';

// Editar el aviso
export function editarAvisoAction(aviso) {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( editarAviso(aviso) );

        try {
            // Insertar en la API
            await clienteAxios.put('/avisos/editar', aviso, { headers: { 'x-token': token }});
            // Si todo sale bien, actualizar el state
            dispatch( editarAvisoExito(aviso));
        } catch (error) {
            console.log(error);
            // Si hay un error, cambiar el state
            dispatch( editarAvisoError(true));
        }
    }
}

const editarAviso = (aviso) => ({
    type: EDITAR_AVISO,
    payload: aviso
});

// Si el producto se guarda en la base de datos
const editarAvisoExito = () => ({
    type: EDITAR_AVISO_EXITO
});

// Si hubo un error
const editarAvisoError = (estado) => ({
    type: EDITAR_AVISO_ERROR,
    payload: estado
});

export function obtenerAvisoAction() {
    const token = localStorage.getItem('token') || ''; //Obtenemos el token para verificar que este autenticado para las peticiones
    return async (dispatch) => {
        dispatch( descargarAviso() );

        try {
            const respuesta = await clienteAxios.get('/avisos/', { headers: { 'x-token': token }});
            dispatch( descargaAvisoExito(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( descargaAvisoError() );
        }
    }
}

const descargarAviso = () => ({
    type: DESCARGA_AVISO,
    payload: true
});

const descargaAvisoExito = aviso => ({
    type: DESCARGA_AVISO_EXITO,
    payload: aviso
});

const descargaAvisoError = () => ({
    type: DESCARGA_AVISO_ERROR,
    payload: true
});