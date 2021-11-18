import React from 'react';
import SpinnerKit from './SpinnerKit';

// Actions de Redux
import { editarUsuarioAction, obtenerUsuariosAction } from '../../redux/actions/usuarioActions';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import { useSnackbar } from 'notistack';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const UserForm = () => { //Desestructuramos al usuario, lo inicializamos todo en null por si las dudas

  const [usuario, setUsuario] = React.useState({
    contra: '',
    IdTipo: '',
  });
  
  const { contra, IdTipo } = usuario;

  const { enqueueSnackbar } = useSnackbar();

  // Utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector( state => state.usuarios.loading );

  // Usuario a editar
  const usuarioeditar = useSelector( state => state.usuarios.usuarioeditar);

  const usuarios = useSelector( state => state.usuarios.usuarios );

  React.useEffect( () => {
    setUsuario(usuarioeditar);
  }, [usuarioeditar]);

  const { Nombre, Correo } = usuarioeditar;

  // Cuando el usuario haga submit
  const submitEditarUsuario = e => {
    e.preventDefault();

    dispatch( editarUsuarioAction(usuario) );
    dispatch( obtenerUsuariosAction(usuarios) );

    // Mensaje al agregar el usuario correctamente
    enqueueSnackbar('Se ha editado el usuario correctamente!', { 
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
              Editar Usuario
          </Typography>

          <form
            onSubmit={submitEditarUsuario}
          >
          <div>
            <Grid container spacing={2}>

            <Grid item xs={6} sm={4} >
              <FormControl disabled variant="standard">
              <InputLabel htmlFor="component-disabled">Nombre: </InputLabel>
              <Input value={Nombre} />
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={4} >
              <FormControl disabled variant="standard">
              <InputLabel htmlFor="component-disabled">Correo: </InputLabel>
              <Input value={Correo} />
              </FormControl>
            </Grid>
            

            <Grid item xs={6} sm={4}>
              <TextField
                id="contra"
                name="contra"
                label="Contraseña"
                placeholder="Solo si desea cambiarla"
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
              id="IdTipo"
              name="IdTipo"
              value={IdTipo}
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

          <Button type="submit" variant="contained" color='secondary' fullWidth sx={{mt: 5, height: 50}}>Guardar</Button>
          </form>
        </>
      }
      </>
     );
    }
 
export default UserForm;