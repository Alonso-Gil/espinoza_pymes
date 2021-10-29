import React from 'react';
import Lottie from 'react-lottie';
import Skull from '../../../assets/lotties/81807-meditation-skull.json';
import ModalReutilizable from '../../reutilizables/ModalReutilizable';

// Material UI
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const AvisosSA = () => {

    const [avisos, setAvisos] = React.useState({
        titulo: 'El titulo del contenido',
        contenido: 'Contenido que es editable'
    });

    const { titulo, contenido } = avisos;

    const handleChange = e => {
        setAvisos({
            ...avisos,
            [e.target.name] : e.target.value
        })
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
                                    <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                                        Editar avisos
                                    </Typography>
                                    <TextField fullWidth sx={{mb: 4}}
                                        multiline
                                        required
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
                                        required
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
                                    <Button variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Actualizar</Button>
                                </>
                            }
                        />
                
            </Box>
        </>
     );
}
 
export default AvisosSA;