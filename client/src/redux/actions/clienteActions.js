import {
    AGREGAR_CLIENTE,
    AGREGAR_CLIENTE_EXITO,
    AGREGAR_CLIENTE_ERROR
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