import {
    AGREGAR_CLIENTE,
    AGREGAR_CLIENTE_EXITO,
    AGREGAR_CLIENTE_ERROR,
    DESCARGA_CLIENTES,
    DESCARGA_CLIENTES_EXITO,
    DESCARGA_CLIENTES_ERROR
} from '../types';

import clienteAxios from '../../config/axios';

// Crear nuevos clientes
export function crearNuevoClienteAction(cliente) {
    return async (dispatch) => {
        dispatch( agregarCliente() );

        try {
            // Insertar en la API
            await clienteAxios.post('/clientes/agregar', cliente)

            dispatch( agregarClienteExito(cliente) );
        } catch (error) {
            console.log(error);
            dispatch( agregarClienteError(true) );
        }
    }
}

// Si el usuario se guarda en la BD
const agregarCliente = () => ({
    type: AGREGAR_CLIENTE,
    payload: true
});

const agregarClienteExito = cliente => ({
    type: AGREGAR_CLIENTE_EXITO,
    payload: cliente
});

// Si hay un error al registrarlo
const agregarClienteError = estado => ({
    type: AGREGAR_CLIENTE_ERROR,
    payload: estado
});

// Función que descarga los productos de la base de datos
export function obtenerClientesAction() {
    return async (dispatch) => {
        dispatch( descargarClientes ());

        try {
            const respuesta = await clienteAxios.get('superAdmin/clientes');
            dispatch( descargaClientesExitosa(respuesta.data) );
        } catch (error) {
            console.log(error);
            dispatch( descargaClientesError() );
        }
    }
}

const descargarClientes = () => ({
    type: DESCARGA_CLIENTES,
    payload: true
});

const descargaClientesExitosa = clientes => ({
    type: DESCARGA_CLIENTES_EXITO,
    payload: clientes
});

const descargaClientesError = () => ({
    type: DESCARGA_CLIENTES_ERROR,
    payload: true
});