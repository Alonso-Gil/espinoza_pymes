import React from 'react';
import Lottie from 'react-lottie';
import Skull from '../../../assets/lotties/81807-meditation-skull.json';
import ModalReutilizable from '../../reutilizables/ModalReutilizable';

// Actions de Redux
import { editarAvisoAction } from '../../../redux/actions/avisoActions';
import { useDispatch } from 'react-redux';

// Material UI
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

const AvisosSA = () => {

    // State para el contenido de los avisos
    const [avisos, setAvisos] = React.useState({
        titulo: 'El titulo del contenido',
        contenido: 'Contenido que es editable'
    });

    // Extraer  titulo y contenido del state de avisos
    const { titulo, contenido } = avisos;

    const { enqueueSnackbar } = useSnackbar();

    // Utilizar use dispatch y crea una función
    const dispatch = useDispatch();

    // Mandar llamar el action de avisoAction
    const editarAviso = (aviso) => dispatch( editarAvisoAction(aviso) );

    // Lee el contenido de los inputs
    const handleChange = e => {
        setAvisos({
            ...avisos,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario actualiza los avisos
    const onSubmitAvisos = e => {
        e.preventDefault();

        // Validar el aviso
        if(titulo.trim() === '' || contenido.trim() === ''){
            enqueueSnackbar('No se ha actualizado el contenido, todos los campos son obligatorios!', { 
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
            });
            return;
        }

        // Editar el aviso
        editarAviso({
            titulo,
            contenido
        });

        enqueueSnackbar('Se ha actualizado el contenido correctamente!', { 
            variant: 'success',
        });
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Skull,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
      
    return ( 
        <>
            <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                {titulo}
            </Typography>
            <Typography variant="h5" sx={{textAlign: 'justify', mb: 5}}>
                {contenido}
            </Typography>
            
            <Lottie options={defaultOptions} height={400} width={400} />

            <Box sx={{ mt: 5, textAlign: 'right'}}>
                    <ModalReutilizable Boton={
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>}
                        Contenido={
                            <>
                                <form
                                    onSubmit={onSubmitAvisos}
                                >
                                    <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                                        Editar avisos
                                    </Typography>
                                    <TextField fullWidth sx={{mb: 4}}
                                        multiline
                                        id="titulo"
                                        label="Titulo"
                                        name="titulo"
                                        autoComplete="titulo"
                                        autoFocus
                                        value={titulo}
                                        onChange={handleChange}
                                    />
                                    <TextField fullWidth sx={{mb: 5}}
                                        multiline
                                        rows={8}
                                        id="contenido"
                                        label="Contenido"
                                        name="contenido"
                                        autoComplete="contenido"
                                        autoFocus
                                        value={contenido}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                    <Lottie options={defaultOptions} height={200} width={200}/>
                                    <Button 
                                        type="submit"
                                        variant="contained" 
                                        color='secondary' 
                                        fullWidth 
                                        sx={{mt: 5, height: 50}}
                                    >Actualizar
                                    </Button>
                                </form>
                            </>
                        }
                    />
            </Box>
        </>
     );
}
 
export default AvisosSA;