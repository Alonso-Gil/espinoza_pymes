import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types';

import clienteAxios from '../../config/axios';

// Crear nuevos productos
export function crearNuevoUsuarioAction(usuario) {
    return async (dispatch) => {
        dispatch( agregarUsuario(usuario) );

        try {
            // Insertar en la API
            await clienteAxios.post('/superAdmin/NuevoUsuario', usuario);

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