import React from 'react';
import Lottie from 'react-lottie';
import Skull from '../../../assets/lotties/Navidad.json';
import ModalReutilizable from '../../reutilizables/ModalReutilizable';
import Spinner2 from '../../reutilizables/Spinner2';

// Actions de Redux
import { editarAvisoAction } from '../../../redux/actions/avisoActions';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import Alert from '@mui/material/Alert';

const AvisosSA = () => {

    // State para el contenido de los avisos
    const [avisos, setAvisos] = React.useState({
        titulo: 'Titulo con lorem',
        contenido: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam mattis ante sit amet arcu aliquet, et mollis massa ornare. 
        Proin eu mi ut est tincidunt hendrerit. Sed commodo efficitur posuere. 
        Nullam eleifend, orci nec mollis tristique, nibh enim condimentum diam, 
        in vulputate velit orci a turpis. Etiam mollis, libero et volutpat 
        condimentum, eros mi commodo ante, dictum aliquet neque libero eget felis. 
        Donec a lectus volutpat, placerat purus ut, vestibulum quam. 
        Cras a nisi at dui tristique porta in vel ligula. Nam volutpat vitae mi non 
        posuere. Proin facilisis eros in mattis sodales.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam mattis ante sit amet arcu aliquet, et mollis massa ornare. 
        Proin eu mi ut est tincidunt hendrerit. Sed commodo efficitur posuere. 
        Nullam eleifend, orci nec mollis tristique, nibh enim condimentum diam, 
        in vulputate velit orci a turpis. Etiam mollis, libero et volutpat 
        condimentum, eros mi commodo ante, dictum aliquet neque libero eget felis. 
        Donec a lectus volutpat, placerat purus ut, vestibulum quam. 
        Cras a nisi at dui tristique porta in vel ligula. Nam volutpat vitae mi non 
        posuere. Proin facilisis eros in mattis sodales.`
    });

    const { enqueueSnackbar } = useSnackbar();

    // Utilizar use dispatch y crea una función
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector( (state) => state.avisos);
    const error = useSelector(state => state.avisos.error);

    // Extraer  titulo y contenido del state de avisos
    const { titulo, contenido } = avisos;

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
            <Box sx={{ }}>
                    <ModalReutilizable Boton={
                        <Box sx={{ }}>
                            <Fab color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </Box>
                        }
                        Contenido={
                            <>
                                { error ? <Alert sx={{mb: 2}} variant="filled" severity="error">
                                    Error, algo ha salido mal!
                                </Alert> : null}
                                { cargando.loading ? <Spinner2 /> :
                                    <form
                                        onSubmit={onSubmitAvisos}
                                    >
                                        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                                            Editar avisos
                                        </Typography>
                                        <TextField  sx={{mb: 4, width:'700px'}}
                                            multiline
                                            id="titulo"
                                            label="Titulo"
                                            name="titulo"
                                            autoComplete="titulo"
                                            autoFocus
                                            value={titulo}
                                            onChange={handleChange}
                                        />
                                        <TextField  sx={{mb: 5, width:'700px'}}
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
                                            sx={{mt: 5, height: 50 }}
                                        >Actualizar
                                        </Button>
                                    </form>
                                }
                            </>
                        }
                    />
            </Box>

            <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                {titulo}
            </Typography>
            <Typography variant="h5" sx={{textAlign: 'justify', mb: 5}}>
                {contenido}
            </Typography>
            
            <Lottie options={defaultOptions} height={400} width={400} />
        </>
     );
}
 
export default AvisosSA;