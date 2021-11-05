import { 
    EDITAR_AVISO,
    EDITAR_AVISO_EXITO,
    EDITAR_AVISO_ERROR
} from "../types";

// Editar el aviso
export function editarAvisoAction(aviso) {
    return (dispatch) => {
        dispatch( editarAviso(aviso) );

        try {
            // Insertar en la API

            // Si todo sale bien, actualizar el state
            dispatch( editarAvisoExito(aviso));
            console.log(aviso);
        } catch (error) {
            console.log(error);
            // Si hay un error, cambiar el state
            dispatch( editarAvisoError(true));
        }
    }
}

const editarAviso = (aviso) => ({
    type: EDITAR_AVISO,
    payload: aviso
})

// Si el producto se guarda en la base de datos
const editarAvisoExito = (aviso) => ({
    type: EDITAR_AVISO_EXITO
})

// Si hubo un error
const editarAvisoError = (estado) => ({
    type: EDITAR_AVISO_ERROR,
    payload: estado
})