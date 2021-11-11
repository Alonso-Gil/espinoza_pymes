import { types } from "../types/index";

const initialState = {
    isLoading: true,
    usuario: null,
    error: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.startLoading:
            return {
                ...state,
                isLoading: true
            }

        case types.login:
            return{
                usuario:action.payload
            }

        case types.logout:
            return{
                usuario:null
            }

        case types.errorFound:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}