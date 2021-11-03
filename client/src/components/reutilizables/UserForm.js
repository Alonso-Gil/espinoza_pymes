import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const UserForm = ( { 
  user={
      nombre:'',
      correo:'',
      contraseña:'',
      tipe:'',
      idTipe:0
  }, titulo='Crear', //Si no manda el titulo será para crear y si es para editar debe de mandar el titulo como "Editar"
  } ) => { //Desestructuramos al usuario y al titulo, el titulo debe ser "Crear" o "Editar", el usuario lo inicializamos todo en null por si las dudas

  const [usuario, setUsuario] = React.useState(user);

  const {nombre, correo, contraseña, idTipe} = usuario; //Desestructuramos los campos de usuario

  const handleChange = (event) => {
    setUsuario({...usuario,
       [event.target.name] : event.target.value}) 
 };

    return ( 
        <Box  >
        <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
             {titulo} Usuario
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


    <Grid item xs={6} sm={4}>
    <TextField
      id="correo"
      label="Correo"
      type="email"
      value={ correo }
      onChange={handleChange}
      variant="filled"
    />
    </Grid>
    
    
    <Grid item xs={6} sm={4}>
    <TextField
      id="filled-password-input"
      label="Contraseña"
      type="password"
      value={ contraseña }
      onChange={handleChange}
      autoComplete="current-password"
      variant="filled"
    />
    </Grid>
    

    <Grid item xs={8} sm={4}>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-standard-label">Tipo de Usuario</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={idTipe}
        onChange={handleChange}
        label="Tipo de Usuario"
        >
        <MenuItem value={1}>Agente Difusor</MenuItem>
        <MenuItem value={2}>Manager</MenuItem>
        <MenuItem value={3}>Recepción</MenuItem>
        <MenuItem value={4}>Procesos</MenuItem>
        <MenuItem value={5}>Agente Cerrador</MenuItem>
        <MenuItem value={6}>Asesor</MenuItem>
        <MenuItem value={7}>Finanzas</MenuItem>
        <MenuItem value={8}>Recursos Humanos</MenuItem>
        <MenuItem value={9}>Súper Administrador</MenuItem>
        </Select>   
    </FormControl>
    </Grid>

</Grid>
  </div>

  <Button variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Guardar</Button>

    </Box>


     );

    }
 
export default UserForm;