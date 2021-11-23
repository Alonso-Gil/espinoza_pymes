import React, {useEffect} from 'react';
import Spinner2 from '../../reutilizables/Spinner2';
import Spinner3 from '../../reutilizables/Spinner3';
import Spinner4 from '../../reutilizables/Spinner4';
import SpinnerKit from '../../reutilizables/SpinnerKit';

import { useDispatch } from 'react-redux';
import { obtenerAvisoAction } from '../../../redux/actions/avisoActions';

// Material UI
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { obtenerSolicitudesAction } from '../../../redux/actions/solicitudesActions';




const InicioSA = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la API - Precarga de los datos de aviso
        const cargarAviso = () => dispatch( obtenerAvisoAction() );
        cargarAviso();
        const cargarSolicitudes = () => dispatch( obtenerSolicitudesAction() );
        cargarSolicitudes();
        // eslint-disable-next-line
    }, []);


    return ( 
        <>
            <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                Inicio Super Administrador
            </Typography>

            <Typography align="justify" paragraph color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>

            <Typography align="justify" paragraph color="black">
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>

            <Box sx={{ display: 'flex'}} >
                <SpinnerKit />
                <Spinner2 />
                <Spinner3 />
                <Spinner4 />
            </Box>
            
        </>
     );
}
 
export default InicioSA;