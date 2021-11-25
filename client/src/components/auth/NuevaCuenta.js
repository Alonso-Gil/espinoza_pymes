import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FormularioEnviado } from '../reutilizables/utils';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import logo from '../../espinozaLogo.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { crearSolicitudAction } from '../../redux/actions/solicitudesActions';
import SpinnerKit from '../reutilizables/SpinnerKit';
import { useSnackbar } from 'notistack';
const NuevaCuenta = () => {

    // State para los datos
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        curp: '',
        nss: '',
        lugar_nacimiento: '',
        fecha_nacimiento: '',
        celular: '',
        oficina: ''
    });

    // Extraer de usuario
   const { nombre, email, curp, nss, lugar_nacimiento, fecha_nacimiento, celular, oficina } = usuario;
  
   const dispatch = useDispatch();
   const cargando = useSelector( state => state.solicitudes.loading );
   const agregarSolicitud = solicitud => dispatch( crearSolicitudAction(usuario) );
   const { enqueueSnackbar } = useSnackbar();

    const handleChange = e => {
      guardarUsuario({
          ...usuario,
         [e.target.name] : e.target.value}) 
   };

    const SubmitSolicitud = e => {
        e.preventDefault();

        // Validaciones de formulario
        if(nombre.trim() === '' || curp.trim() === '' || nss === '' || fecha_nacimiento === '' || celular === ''){
          enqueueSnackbar('No se ha creado el usuario, algunos campos son obligatorios!', { 
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
          });
          return;
        }

        if(curp.length!==18){
          enqueueSnackbar('La CURP debe de contener 18 digitos', { 
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
          });
          return;
        }

        if(nss.length>12 || nss.length<11){
          enqueueSnackbar('El NSS debe de contener 11', { 
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
          });
          return;
        }

        if(fecha_nacimiento.length!=10){
          enqueueSnackbar('La fecha debe de estar en el formato: dd/mm/aaaa', { 
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
          });
          return;
        }

        if(celular.length<10){
          enqueueSnackbar('El celular debe tener 10 dígitos', { 
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            },
          });
          return;
        }

        agregarSolicitud({
          nombre, 
          email, 
          curp, 
          nss, 
          lugar_nacimiento, 
          fecha_nacimiento, 
          celular, 
          oficina}); 

          console.log(usuario);
          FormularioEnviado(); // Swat para decirle que todo está bien
    }

    const Imagen = styled.img`
    max-width: 100%;
    max-height:300px;
    margin-left: 40rem;
    display: flex;
    justify-content: center;
`;

    return ( 

        < >
          <Box sx={{minHeight:800}} >
          <Imagen src={logo} alt="logo"  />

            <Box sx={{maxWidth:1200, maxHeight:1000, marginLeft:45, marginRight:"auto", marginTop:10, borderRadius:2 }} >
              <Typography variant="h6" gutterBottom sx={{mt:2, ml:2}}>
                  Registrate como Agente de Difusión
              </Typography>
              { cargando ? <SpinnerKit /> : 
                <form onSubmit={SubmitSolicitud}>
                  <div>
                    <Grid container spacing={3} sx={{ ml:1}}>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre Completo *"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={12} sm={5}>
                          <TextField
                            id="curp"
                            name="curp"
                            label="CURP *"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="lugar_nacimiento"
                            name="lugar_nacimiento"
                            label="Lugar de Nacimiento *"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                        label="Date desktop *"
                        inputFormat="MM/dd/yyyy"
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider> */}
                          <TextField
                            id="fecha_nacimiento"
                            name="fecha_nacimiento"
                            label="Fecha de Nacimiento *"
                            placeholder="ej. 02/02/1992"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="email"
                            name="email"
                            label="Correo *"
                            type="email"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                          <TextField
                            id="nss"
                            name="nss"
                            label="NSS *"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="celular"
                            name="celular"
                            label="Teléfono Celular *"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                          <TextField
                            id="oficina"
                            name="oficina"
                            label="Teléfono Oficina"
                            fullWidth
                            autoComplete="off"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </Grid>
                        

                        <Grid item xs={12}>
                        <Box sx={{display:'flex'}}>

                        {/* <Button variant="contained" color='secondary' fullWidth 
                        sx={{ display:'flex', height: 50, maxWidth:150, marginRight:"auto", mt:3, mb:3, mr:13}}
                        href="/"
                        >Regresar</Button> */}

                        <Link to={'/'} variant="body2" underline='none'>
                        <Button variant="contained" color='secondary' fullWidth
                        sx={{ display:'flex', height: 50, maxWidth:150, marginRight:"auto", mt:3, mb:3, mr:13}}
                        >Regresar</Button>
                                  </Link>

                        <Button  type="submit" variant="contained" color='primary' fullWidth 
                        sx={{ display:'flex', height: 50, maxWidth:400, marginLeft:"auto", mt:3, mb:3, mr:13}}
                            >Envía tus Datos</Button>

                        </Box>
                        </Grid>

                    </Grid>
                  </div>
                </form>
              }
        </Box>
        </Box>
        </>
     );
}
 
export default NuevaCuenta;