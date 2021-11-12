import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import avisosReducer from './avisosReducer';
import clientesReducer from './clientesReducer';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
    avisos: avisosReducer,
    usuarios: usuariosReducer,
    clientes: clientesReducer,
    auth: authReducer,
}); 