import React from 'react';
import logo from '../../logo.png';
import Copyright from '../layout/Copyright';

// Material UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const drawerWidth = 320;

const SideBar = () => {
    return ( 
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Container fixed sx={{marginBottom: 3}}>
                <Box component="img" src={logo} sx={{ height: 265 }} />
                <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h4" component="div">
                    Espinoza Pymes
                </Typography>
            </Container>
        
            <Divider />
            <Divider />

            <Container fixed sx={{ marginBottom: 15, marginTop: 2}}>
                <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h5" component="div">
                    Clientes
                </Typography>
            </Container>

            <Box
                component="footer"
                sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#000000'
                }}
            >
                <Container fixed>
                    <Typography sx={{textAlign: 'center'}} variant="h5" component="div">
                        <InstagramIcon sx={{color: '#fff'}} />
                        <FacebookIcon sx={{color: '#fff', marginRight: 1, marginLeft: 1}} />
                        <TwitterIcon sx={{color: '#fff'}} />
                    </Typography>
                    <Copyright sx={{color: '#fff'}} />
                </Container>
            </Box>

        </Drawer>
     );
}
 
export default SideBar;