import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FormularioEnviado } from '../reutilizables/utils';

import logo from '../../espinozaLogo.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        curp: '',
        nss: '',
        lugarNac: '',
        fechaNac: '',
        telCel: '',
        telOfi: ''
    });

    // Extraer de usuario
   // const { nombre, email, curp, nss, lugarNac, fechaNac, telCel, telOfi } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    // const onSubmit = e => {
    //     e.preventDefault();

    //     // Valdidar que no haya campos vacios

    //     // Password minimo de 6 caracteres

    //     // Los dos passwords son iguales

    //     // Pasarlo al action
    // }

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
            Registrate como Agente Difusor
        </Typography>

        <Grid container spacing={3} sx={{ ml:1}}>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre Completo"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="curp"
              name="curp"
              label="CURP"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="lugarNac"
              name="lugarNac"
              label="Lugar de Nacimiento"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id="fechaNac"
              name="fechaNac"
              label="Fecha de Nacimiento"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telCel"
              name="telCel"
              label="Teléfono Celular"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id="telOfi"
              name="telOfi"
              label="Teléfono Oficina"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Correo"
              fullWidth
              autoComplete="off"
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="nss"
              name="nss"
              label="NSS"
              fullWidth
              autoComplete="off"
              onChange={onChange}
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

          <Button variant="contained" color='primary' fullWidth 
          sx={{ display:'flex', height: 50, maxWidth:400, marginLeft:"auto", mt:3, mb:3, mr:13}}
          onClick={ () => { FormularioEnviado() } } >Envía tus Datos</Button>

          </Box>
          </Grid>

        </Grid>
        </Box>

        </Box>

        </>
      

     );
}
 
export default NuevaCuenta;