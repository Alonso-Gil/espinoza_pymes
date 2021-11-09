import { combineReducers } from 'redux';
import avisosReducer from './avisosReducer';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
    avisos: avisosReducer,
    usuarios: usuariosReducer
});