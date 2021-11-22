import React from 'react';
import SpinnerKit from './SpinnerKit';

// Actions de Redux
import { crearNuevoUsuarioAction, obtenerUsuariosAction } from '../../redux/actions/usuarioActions';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import { useSnackbar } from 'notistack';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const EditUserForm = ( { 
  user={
      nombre:'',
      correo:'',
      contra:'',
      tipo:'superAdmin',
      idTipo:''
  }
  } ) => { //Desestructuramos al usuario, inicializamos todo en null por si las dudas

  const [usuario, setUsuario] = React.useState(user);

  const {nombre, correo, contra, idTipo, tipo} = usuario; //Desestructuramos los campos de usuario

  const { enqueueSnackbar } = useSnackbar();

  // Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector( state => state.usuarios.loading );

  const usuarios = useSelector( state => state.usuarios.usuarios );

  // Mandar llamar el action de usuarioAction
  const agregarUsuario = usuario => dispatch( crearNuevoUsuarioAction(usuario) );

  // Cuando el usuario haga submit
  const submitNuevoUsuario = e => {
    e.preventDefault();

    // Validar formulario
    if(nombre.trim() === '' || correo.trim() === '' || contra.trim() === '' || idTipo === 0 ){
      enqueueSnackbar('No se ha creado el usuario, todos los campos son obligatorios!', { 
        variant: 'error',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
      });
      return;
    }

    // Crear el nuevo usuario
    agregarUsuario({
      nombre,
      correo, 
      contra,
      idTipo,
      tipo
    });
    dispatch( obtenerUsuariosAction(usuarios) );

    // Mensaje al agregar el usuario correctamente
    enqueueSnackbar('Se ha creado el usuario correctamente!', { 
      variant: 'success',
    });

  }

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value})
  };

    return ( 
      <>
      { cargando ? <SpinnerKit /> : 
        <>
          <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
              Agregar Usuario
          </Typography>

          <form
            onSubmit={submitNuevoUsuario}
          >
          <div>
            <Grid container spacing={2}>

            <Grid item xs={6} sm={4} >
              <TextField 
                type="text"
                id="nombre"
                name="nombre"
                label="Nombre"
                variant="filled"
                value={ nombre }
                onChange={handleChange}
                sx={{ minWidth: 180 }}
                autoComplete="off"
              />
            </Grid> 

            <Grid item xs={6} sm={4}>
              <TextField
                type="email"
                id="correo"
                name="correo"
                label="Correo"
                value={ correo }
                onChange={handleChange}
                variant="filled"
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <TextField
                id="filled-password-input"
                name="contra"
                label="Contraseña"
                type="password"
                value={ contra }
                onChange={handleChange}
                variant="filled"
                autoComplete="off"
              />
            </Grid>


            <Grid item xs={8} sm={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
            <InputLabel id="demo-simple-select-standard-label">Tipo de Usuario</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="idTipo"
              value={idTipo}
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

          <Button type="submit" variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Agregar</Button>
          </form>
        </>
      }
      </>
     );
    }
 
export default EditUserForm;