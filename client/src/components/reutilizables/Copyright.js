import React from 'react';

// Material UI
import Typography from '@mui/material/Typography';

const Copyright = props => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
            Espinoza Pymes
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}
 
export default Copyright;