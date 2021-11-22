import * as React from 'react';

// Actions de Redux
import { crearNuevoClienteAction } from '../../redux/actions/clienteActions';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import SpinnerKit from './SpinnerKit';

const CrearClienteForm = ( 
    {
    client = {
        nombre:'',
        curp:'',
        nss:'',
        fecha_nacimiento:'',
        celular:'',
        oficina:'',
        registrado_por:''}
    } ) => { //Desestructuramos al cliente y lo inicializamos en null todo por si las dudas
        
    const [cliente, setCliente] = React.useState(client);

    const {nombre, curp, nss, fecha_nacimiento, celular, oficina} = cliente; //Desestrucuramos los campos de cliente

    const { enqueueSnackbar } = useSnackbar();

    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector( state => state.clientes.loading );

    // Mandar llamar el action de usuarioAction
    const agregarCliente = cliente => dispatch( crearNuevoClienteAction(cliente) );

    const submitNuevoCliente = e => {
        e.preventDefault();

        // Validar formulario
        if(nombre.trim() === '' || curp.trim() === '' || nss === '' || fecha_nacimiento === '' || celular === '' || oficina.trim() === ''){
            enqueueSnackbar('No se ha creado el usuario, todos los campos son obligatorios!', { 
              variant: 'error',
              anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'center',
              },
            });
            return;
          }

        // Crear el nuevo cliente
        agregarCliente({
            nombre,
            curp,
            nss,
            fecha_nacimiento,
            celular,
            oficina,
            actualizado_fecha: '',
            actualizado_por: null,
            registrado_por: 'SuperAdmin'
        });

        console.log(cliente);

        // Mensaje al agregar el usuario correctamente
        enqueueSnackbar('Se ha creado el cliente correctamente!', { 
            variant: 'success',
      });

    }

    const handleChange = e => {
         setCliente({
             ...cliente,
            [e.target.name] : e.target.value}) 
      };
      


    return (
        <>
        <Box>
        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
             Agregar Cliente
        </Typography>

        { cargando ? <SpinnerKit /> :
        <form
            onSubmit={submitNuevoCliente}
        >
            <div>

            <Grid container spacing={2}>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="nombre"
                name="nombre"
                label="Nombre"
                variant="filled"
                value={ nombre }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="curp"
                name="curp"
                label="CURP"
                variant="filled"
                value={ curp }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="nss"
                name="nss"
                label="Nss"
                variant="filled"
                value={ nss }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="fecha_nacimiento"
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
                placeholder="ej. 1999/12/31"
                variant="filled"
                autoComplete="off"
                value={ fecha_nacimiento }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="celular"
                name="celular"
                label="Celular"
                variant="filled"
                value={ celular }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            <Grid item xs={6} sm={4} >
                <TextField 
                id="oficina"
                name="oficina"
                label="Oficina"
                variant="filled"
                value={ oficina }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                />
            </Grid>

            {/* {titulo==='Editar' ? 

            <Grid item xs={6} sm={4} >
                <FormControl disabled variant="standard">
                <InputLabel htmlFor="component-disabled">Última Actualización: </InputLabel>
                <Input id="component-disabled" value={actualizado_fecha} onChange={handleChange} />
                <FormHelperText>Actualizado por: {actualizado_por}</FormHelperText>
                </FormControl>
                </Grid>
                

            : null } */}


            </Grid>
            </div>

            <Button type="submit" variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Agregar Cliente</Button>
        </form>

        }
        </Box>
        </>
     );
}
 
export default CrearClienteForm;