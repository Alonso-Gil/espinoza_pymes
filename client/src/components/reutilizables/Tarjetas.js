import React from 'react';
import PropTypes from 'prop-types';

//Material
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
// import { CardActionArea } from '@mui/material';

const Tarjetas = ({Contenido, Botones}) => {

    return (
        <>
            <CardContent>
                {Contenido}
            </CardContent>

            <CardActions sx={{ maxHeight:42 }}  >
                <Box sx={{  minWidth: 260, display: 'flex' }} >
                {Botones}
                </Box>
            </CardActions>
        </>
    );
}


Tarjetas.propTypes = {
    Contenido: PropTypes.object.isRequired,
    Botones:   PropTypes.object.isRequired
}

export default Tarjetas;