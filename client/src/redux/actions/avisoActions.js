import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR
} from "../types";

// Editar el aviso
export function editarAvisoAction(aviso) {
    return (dispatch) => {
        dispatch( editarAviso() );

        try {
            dispatch( editarAvisoExito(aviso))
        } catch (error) {
            dispatch( editarAvisoError(aviso))
        }
    }
}

const editarAviso = () => ({
    type: EDITAR_AVISO
})

const editarAvisoExito = () => ({
    type: EDITAR_AVISO_EXITO
})

const editarAvisoError = () => ({
    type: EDITAR_AVISO_ERROR
})