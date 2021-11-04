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
            // Insertar en la API

            // Si todo sale bien, actualizar el state
            dispatch( editarAvisoExito(aviso));
        } catch (error) {
            console.log(error);
            // Si hay un error, cambiar el state
            dispatch( editarAvisoError(true));
        }
    }
}

const editarAviso = () => ({
    type: EDITAR_AVISO,
    payload: true
})

// Si el producto se guarda en la base de datos
const editarAvisoExito = (aviso) => ({
    type: EDITAR_AVISO_EXITO
})

// SI hubo un error
const editarAvisoError = (estado) => ({
    type: EDITAR_AVISO_ERROR,
    payload: estado
})