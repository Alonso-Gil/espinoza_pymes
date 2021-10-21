import React from 'react';
import SideBar from '../layout/SideBar';
import MainNavBar from '../layout/MainNavBar';

// Material UI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = (LayoutProp) => {

    const MainNavBarProp = LayoutProp.LayoutProp;
    
    return ( 
        <Box sx={{ display: 'flex' }}>
            
            <CssBaseline />

            <SideBar />

            <MainNavBar 
                MainNavBarProp={MainNavBarProp}
            />

        </Box>
     );
}
 
export default Layout;