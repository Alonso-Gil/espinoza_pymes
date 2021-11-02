import { combineReducers } from 'redux';
import avisosReducer from './avisosReducer';

export default combineReducers({
    avisos: avisosReducer
});