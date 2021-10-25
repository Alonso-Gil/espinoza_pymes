import React from 'react';
import SideBar from '../layout/SideBar';
import MainNavBar from '../layout/MainNavBar';

// Material UI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({LayoutProp, MyProp}) => {

    return ( 
        <Box sx={{ display: 'flex' }}>
            
            <CssBaseline />

            <SideBar />

            <MainNavBar 
                LayoutProp={LayoutProp}
                MyProp={MyProp}
            />

        </Box>
     );
}
 
export default Layout;