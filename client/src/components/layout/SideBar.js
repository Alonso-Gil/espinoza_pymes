import React from 'react';
import espinozaLogo from '../../espinozaLogo.png';
import Copyright from '../reutilizables/Copyright';

// Material UI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const drawerWidth = 320;

const SideBar = () => {
    return ( 
        <Drawer
            sx={{
            width: drawerWidth,
            overflowY: 'auto',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Container fixed sx={{marginBottom: 3, marginTop: 3}}>
                <Box component="img" src={espinozaLogo} sx={{ height: 200 }} />
                {/* <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h4" component="div">
                    Espinoza Pymes
                </Typography> */}
            </Container>
        
            <Divider />
            <Divider />

            <Container fixed sx={{ marginBottom: 8.5, marginTop: 2}}>
                <Stack spacing={2}>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h5" component="div">
                        Clientes
                    </Typography>
                    <Alert variant="filled" severity="error">
                        Alonso Gil Pérez  -  11:45 am
                    </Alert> 
                    <Alert variant="filled" severity="warning">
                        Juan de la Cruz  -  1:23 pm
                    </Alert> 
                    <Alert variant="filled" severity="warning">
                        Jose Chuy de la Riva  -  4:51 pm
                    </Alert> 
                    <Alert variant="filled" severity="info">
                        Miguelon Martinez  -  7:30 pm
                    </Alert> 
                    <Alert variant="filled" severity="success">
                        Jose Pancho  -  9:00 pm
                    </Alert> 
                </Stack>
            </Container>

            <Pagination count={3} sx={{ display: 'flex', justifyContent: 'center', mt: 10}} color="primary" />

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