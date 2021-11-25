import {
    AGREGAR_CLIENTE,
    AGREGAR_CLIENTE_EXITO,
    AGREGAR_CLIENTE_ERROR,
    DESCARGA_CLIENTES,
    DESCARGA_CLIENTES_EXITO,
    DESCARGA_CLIENTES_ERROR,
    ELIMINAR_CLIENTE,
    ELIMINAR_CLIENTE_EXITO,
    ELIMINAR_CLIENTE_ERROR,
    EDITAR_CLIENTE,
    EDITAR_CLIENTE_EXITO,
    EDITAR_CLIENTE_ERROR,
    COMENZAR_EDICION_CLIENTE
} from '../types';

import clienteAxios from '../../config/axios';

// Crear nuevos clientes
export function crearNuevoClienteAction(cliente) {
    const token = localStorage.getItem('token') || ''; //Obtenemos el token para ver si está autenticado para las peticiones
    return async (dispatch) => {
        dispatch( agregarCliente() );

        try {
            // Insertar en la API
            await clienteAxios.post('/clientes/agregar', cliente, { headers: { 'x-token': token }})

            dispatch( agregarClienteExito(cliente) );
        } catch (error) {
            console.log(error);
            dispatch( agregarClienteError(true) );
        }
    }
}

// Selecciona y elimina el usuario
export function borrarClienteAction(idCliente) {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( obtenerClienteEliminar(idCliente) );
        
        try {
            await clienteAxios.delete(`/superAdmin/eliminarCliente/${idCliente}`, { headers: { 'x-token': token }});
            dispatch( eliminarClienteExito() );
        } catch (error) {
            console.log(error);
            dispatch( eliminarClienteError() );
        }
    }
}

const obtenerClienteEliminar = id => ({
    type: ELIMINAR_CLIENTE,
    payload: id
});

const eliminarClienteExito = () => ({
    type: ELIMINAR_CLIENTE_EXITO
});

const eliminarClienteError = () => ({
    type: ELIMINAR_CLIENTE_ERROR,
    payload: true
});

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
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( descargarClientes ());

        try {
            const respuesta = await clienteAxios.get('superAdmin/clientes', { headers: { 'x-token': token }});
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

// Colocar producto en edición
export function obtenerClienteEditar(cliente) {
    return (dispatch) => {
        dispatch( obtenerClienteEditarAction(cliente) );
    }
}

const obtenerClienteEditarAction = cliente => ({
    type: EDITAR_CLIENTE,
    payload: cliente
});

// Edita un registro den la API y state
export function editarClienteAction(cliente) {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( editarCliente() );

        try {
            clienteAxios.put(`/clientes/editar/${cliente.idCliente}`, cliente, { headers: { 'x-token': token }});
            dispatch( editarClienteExito(cliente) );

        } catch (error) {
            console.log(error);
            dispatch (editarUsuarioError() );
        }
    }
}

const editarCliente = () => ({
    type: COMENZAR_EDICION_CLIENTE,
});

const editarClienteExito = usuario => ({
    type: EDITAR_CLIENTE_EXITO,
    payload: usuario
});

const editarUsuarioError = () => ({
    type: EDITAR_CLIENTE_ERROR,
    payload: true
});