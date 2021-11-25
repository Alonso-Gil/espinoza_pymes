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
    return async (dispatch) => {
        dispatch( editarAviso() );

        try {
            // Insertar en la API
            await clienteAxios.put('/avisos/editar', aviso);
            // Si todo sale bien, actualizar el state
            dispatch( editarAvisoExito(aviso));
        } catch (error) {
            console.log(error);
            // Si hay un error, cambiar el state
            dispatch( editarAvisoError(true));
        }
    }
}

const editarAviso = () => ({
    type: EDITAR_AVISO,
    payload: true
});

// Si el producto se guarda en la base de datos
const editarAvisoExito = aviso => ({
    type: EDITAR_AVISO_EXITO,
    payload: aviso
});

// Si hubo un error
const editarAvisoError = (estado) => ({
    type: EDITAR_AVISO_ERROR,
    payload: estado
});

export function obtenerAvisoAction() {
    return async (dispatch) => {
        dispatch( descargarAviso() );

        try {
            const respuesta = await clienteAxios.get('/avisos/');
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