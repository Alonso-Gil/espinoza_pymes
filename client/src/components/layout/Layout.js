import React from 'react';
import SideBar from '../layout/SideBar';
import MainNavBar from '../layout/MainNavBar';

// Material UI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({NavBarContenido, InicioContenido, ClientesContenido, UsuariosContenido, CalendarioContenido, AvisosContenido}) => {

    return ( 
        <Box sx={{ display: 'flex' }}>
            
            <CssBaseline />

            <SideBar />

            <MainNavBar 
                NavBarContenido={NavBarContenido}
                InicioContenido={InicioContenido}
                ClientesContenido={ClientesContenido}
                UsuariosContenido={UsuariosContenido}
                CalendarioContenido={CalendarioContenido}
                AvisosContenido={AvisosContenido}
            />

        </Box>
     );
}
 
export default Layout;