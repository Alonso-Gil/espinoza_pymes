import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import avisosReducer from './avisosReducer';
import clientesReducer from './clientesReducer';
import usuariosReducer from './usuariosReducer';
import solicitudesReducer from './solicitudesReducer';

export default combineReducers({
    avisos: avisosReducer,
    usuarios: usuariosReducer,
    clientes: clientesReducer,
    auth: authReducer,
    solicitudes: solicitudesReducer
}); 