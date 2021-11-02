import { EDITAR_AVISO } from '../types';

// Cada reducer tiene su propio state
const initialState = {
    titulo: '',
    contenido: '',
    error: null,
    loading: false
}

// eslint-disbale-next-line
export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}