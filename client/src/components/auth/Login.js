import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../espinozaLogo.png';
import styled from '@emotion/styled';
import Copyright from '../reutilizables/Copyright';

// Material UI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Imagen = styled.img`
    max-width: 100%;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
`;

const Login = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer de usuario
    const { email, password } = usuario;

    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const handleSubmit = e => {
        e.preventDefault();

        // Valdidar que no haya campos vacios

        // Pasarlo al action
    }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Imagen src={logo} alt="logo" />

              <Typography component="h1" variant="h5">
                Iniciar sesión
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recordar datos"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    
                  </Grid>
                  <Grid item>
                    <Link to={'/nuevaCuenta'} variant="body2">
                      {"Registrarse como agente difusor"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}
 
export default Login;

// return ( 
//     <div className="form-usuario">
//         <div className="contenedor-form sombra-dark">
//             <h1>Iniciar Sesión</h1>

//             <Imagen src={logo} alt="logo" />

//             <form
//                 onSubmit={onSubmit}
//             >
//                 <div className="campo-form">
//                     <label htmlFor="email">Email</label>
//                     <input 
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Tu email"
//                         value={email}
//                         onChange={onChange}
//                     />
//                 </div>

//                 <div className="campo-form">
//                     <label htmlFor="password">Password</label>
//                     <input 
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Tu password"
//                         value={password}
//                         onChange={onChange}
//                     />
//                 </div>

//                 <div className="campo-form">
//                     <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
//                 </div>
//             </form>

//             <Link to={'/nuevaCuenta'} className='enlace-cuenta'>
//                 Obtener Cuenta
//             </Link>
//         </div>
//     </div>
//  );