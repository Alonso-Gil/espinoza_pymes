import { types } from '../types/index';
import axios from '../../config/axios';
import Swal from 'sweetalert2';


export const startLogin = (user={email:'', contra:''}) => {

    const usuario = {
        email:user.email, 
        contra:user.contra
    }
    console.log(usuario);

    return async (dispatch) => {
        try {

            const response = await axios.post('/auth/login', usuario);
            console.log(response.data);

            // Guardar el token en el localStorage
            localStorage.setItem('token', response.data.token);

            // Guardar el usuario en el estado global (Redux)
            dispatch(login(response.data.usuario));
        } catch (error) {

            console.log(error.response.data);
            dispatch(errorFound(error.response.data));
            localStorage.removeItem('token') //Borramos el token ante un error
            
            Swal.fire('Error', `Usuario no encontrado o contraseña incorrecta
                                Porfavor vuelve a intentarlo`, 'error');
            
        }
            
    }
}

const startLoading = () => ({ type: types.startLoading });

const errorFound = (errors) => ({
    type: types.errorFound,
    payload: errors
})

export const login = (usuario) =>( {
        type: types.login,
        payload: usuario  
});

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: types.logout
    }
}

export const renovarToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token') || '';
        try {

            dispatch(startLoading());
            const response = await axios.get('/auth/renovarToken', { headers: { 'x-token': token } })
            const usuario = response.data.usuario;
            localStorage.setItem('token', response.data.token);
            dispatch(login(usuario));
        } catch (error) {
            // Token no valido, no ha iniciado sesión
            console.log(error.response.data);
            dispatch(errorFound(error.response.data));
        }
    }
}