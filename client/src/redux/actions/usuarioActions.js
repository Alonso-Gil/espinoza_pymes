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
    EDITAR_USUARIO_ERROR,
    COMENZAR_EDICION_USUARIO
} from '../types';

import clienteAxios from '../../config/axios';

// Crear nuevos productos
export function crearNuevoUsuarioAction(usuario) {
    const token = localStorage.getItem('token') || ''; //Obtenemos el token para ver si está autenticado para las peticiones
    return async (dispatch) => {
        dispatch( agregarUsuario() );

        try {
            console.log(usuario);
            // Insertar en la API
            await clienteAxios.post('/superAdmin/nuevoUsuario', usuario, { headers: { 'x-token': token }});
            // Si no hay errores, actualiza el state
            
            dispatch( agregarUsuarioExito(usuario) );
            
        } catch (error) {
            console.log(error);
            // Si hay un error, cambiar el state
            dispatch( agregarUsuarioError(true) );
        }
    }
}

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO,
    payload: true
});

// Si el usuario se guarda en la base de datos
const agregarUsuarioExito = usuario => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: usuario
});

// Si hay un error al registrarlo
const agregarUsuarioError = estado => ({
    type: AGREGAR_USUARIO_ERROR,
    payload: estado
});

///////////////////////////////////////////////////////////////////

// Función que descarga los usuarios de la BD
export function obtenerUsuariosAction() {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( descargaUsuarios() );
        try {
            const respuesta = await clienteAxios.get('/superAdmin/usuarios', { headers: { 'x-token': token }});
            dispatch( descargaUsuariosExitosa(respuesta.data.users) );
        } catch (error) {
            console.log(error);
            dispatch( descargaUsuariosError() );
        }
    }
}

const descargaUsuarios = () => ({
    type: DESCARGA_USUARIOS,
    payload: true
});

const descargaUsuariosExitosa = usuarios => ({
    type: DESCARGA_USUARIOS_EXITO,
    payload: usuarios
});

const descargaUsuariosError = () => ({
    type: DESCARGA_USUARIOS_ERROR,
    payload: true
});

// Selecciona y elimina el usuario
export function borrarUsuarioAction(id) {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( obtenerUsuarioEliminar(id) );
        
        try {
            await clienteAxios.delete(`/superAdmin/eliminarUsuario/${id}`, { headers: { 'x-token': token }});
            dispatch( eliminarUsuarioExito() );
        } catch (error) {
            console.log(error);
            dispatch( eliminarUsuarioError() );
        }
    }
}

const obtenerUsuarioEliminar = id => ({
    type: ELIMINAR_USUARIO,
    payload: id
});

const eliminarUsuarioExito = () => ({
    type: ELIMINAR_USUARIO_EXITO
});

const eliminarUsuarioError = () => ({
    type: ELIMINAR_USUARIO_ERROR,
    payload: true
});

// Colocar producto en edición
export function obtenerUsuarioEditar(usuario) {
    return (dispatch) => {
        dispatch( obtenerUsuarioEditarAction(usuario) );
    }
}

const obtenerUsuarioEditarAction = usuario => ({
    type: EDITAR_USUARIO,
    payload: usuario
});

// Edita un registro den la API y state
export function editarUsuarioAction(usuario) {
    const token = localStorage.getItem('token') || '';
    return async (dispatch) => {
        dispatch( editarUsuario() );

        try {
            clienteAxios.put(`/superAdmin/editarUsuario/${usuario.idUsuario}`, usuario, { headers: { 'x-token': token }});
            dispatch( editarUsuarioExito(usuario) );

        } catch (error) {
            console.log(error);
            dispatch (editarUsuarioError() );
        }
    }
}

const editarUsuario = () => ({
    type: COMENZAR_EDICION_USUARIO,
});

const editarUsuarioExito = usuario => ({
    type: EDITAR_USUARIO_EXITO,
    payload: usuario
});

const editarUsuarioError = () => ({
    type: EDITAR_USUARIO_ERROR,
    payload: true
});