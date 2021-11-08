import React from 'react';
import SideBar from '../layout/SideBar';
import MainNavBar from '../layout/MainNavBar';

// Material UI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

const Layout = ({NavBarContenido, InicioContenido, ClientesContenido, UsuariosContenido, CalendarioContenido, AvisosContenido, TipoUsuario}) => {

    return ( 
        <Box sx={{ display: 'flex' }}>
            
            <CssBaseline />

            <SideBar />

            <SnackbarProvider maxSnack={3}>
                <MainNavBar 
                    NavBarContenido={NavBarContenido}
                    InicioContenido={InicioContenido}
                    ClientesContenido={ClientesContenido}
                    UsuariosContenido={UsuariosContenido}
                    CalendarioContenido={CalendarioContenido}
                    AvisosContenido={AvisosContenido}
                    TipoUsuario={TipoUsuario}
                />
            </SnackbarProvider>

        </Box>
     );
}
 
export default Layout;