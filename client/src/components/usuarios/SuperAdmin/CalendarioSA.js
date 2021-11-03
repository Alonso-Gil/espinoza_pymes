import { Box } from '@mui/system';
import React from 'react';
import Spinner2 from '../../reutilizables/Spinner2';
import Spinner3 from '../../reutilizables/Spinner3';
import Spinner4 from '../../reutilizables/Spinner4';
import SpinnerKit from '../../reutilizables/SpinnerKit';

const CalendarioSA = () => {
    return ( 
        < >
        <h1>Calendario</h1>

        <Box sx={{ display: 'flex'}} >
        <SpinnerKit />
        <Spinner2 />
        <Spinner3 />
        <Spinner4 />
        </Box>

        
        </>
        
     );
}
 
export default CalendarioSA;