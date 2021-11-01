import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, Typography } from '@mui/material';

const ClienteForm = ( 
    {
    client = {
        nombre:'',
        curp:'',
        nss:'',
        fecha_nacimiento:'',
        celular:'',
        oficina:'',
        registrado_por:'',
        actualizado_por:'',
        actualizado_fecha:'',}, 
    titulo='Agregar'} ) => {

        
    const [cliente, setCliente] = React.useState(client);

    const {nombre, curp, nss, fecha_nacimiento, celular, oficina, actualizado_fecha, actualizado_por} = cliente;

    const handleChange = (event) => {
         setCliente({...cliente,
            [event.target.name] : event.target.value}) 
      };
      


    return (
        <>
        <Box>
        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
             {titulo} Cliente
        </Typography>

        <div>

        <Grid container spacing={2}>

        <Grid item xs={6} sm={4} >
            <TextField 
            id="nombre"
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
            label="Fecha de Nacimiento"
            variant="filled"
            value={ fecha_nacimiento }
            onChange={handleChange}
            sx={{ minWidth: 180 }}
            />
        </Grid>

        <Grid item xs={6} sm={4} >
            <TextField 
            id="celular"
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
            label="Oficina"
            variant="filled"
            value={ oficina }
            onChange={handleChange}
            sx={{ minWidth: 180 }}
            />
        </Grid>

        {titulo==='Editar' ? 

        <Grid item xs={6} sm={4} >
            <FormControl disabled variant="standard">
            <InputLabel htmlFor="component-disabled">Última Actualización: </InputLabel>
            <Input id="component-disabled" value={actualizado_fecha} onChange={handleChange} />
            <FormHelperText>Actualizado por: {actualizado_por}</FormHelperText>
            </FormControl>
            </Grid>
            

        : null }

        
        </Grid>
        </div>

        <Button variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Guardar</Button>

        </Box>



        </>
     );
}
 
export default ClienteForm;