import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    DESCARGA_USUARIOS,
    DESCARGA_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR,
    ELIMINAR_USUARIO,
    ELIMINAR_USUARIO_EXITO,
    ELIMINAR_USUARIO_ERROR
} from '../types';

import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';

// Crear nuevos productos
export function crearNuevoUsuarioAction(usuario) {
    return async (dispatch) => {
        dispatch( agregarUsuario() );

        try {
            console.log(usuario);
            // Insertar en la API
            await clienteAxios.post('/superAdmin/nuevoUsuario', usuario);
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
    return async (dispatch) => {
        dispatch( descargaUsuarios() );
        try {
            const respuesta = await clienteAxios.get('/superAdmin/usuarios')
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
    return async (dispatch) => {
        dispatch( obtenerUsuarioEliminar(id) );
        
        try {
            await clienteAxios.delete(`/superAdmin/eliminarUsuario/${id}`);
            dispatch( eliminarUsuarioExito() );

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El usuario ha sido eliminado.',
                'success'
              )
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