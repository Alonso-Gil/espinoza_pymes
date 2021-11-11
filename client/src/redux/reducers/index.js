import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import avisosReducer from './avisosReducer';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
    avisos: avisosReducer,
    usuarios: usuariosReducer,
    auth: authReducer,
});