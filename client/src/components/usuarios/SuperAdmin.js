import React from 'react';
import Sidebar from '../layout/Sidebar';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';

const SuperAdmin = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    navbar: {
      background: '#10487c',
    },
    ptm: {
        fontSize: 30,
        color: 'white',
        textTransform: 'capitalize',
        margin: '0px 30px 0px 30px',
    },
  });

  const classes = useStyles();

    return ( 
        <div className="contenedor-app">
            <Sidebar />

            <Box sx={{ width: 1, flexGrow: 1 }}>
                <AppBar className={classes.navbar} position="static">
                    <Toolbar>
                    
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab className={classes.ptm} label="Inicio"></Tab>
                            <Tab className={classes.ptm} label="Usuarios" />
                            <Tab className={classes.ptm} label="Calendario" />
                        </Tabs>
                    </Typography>

                        <Button color="inherit">
                            <Typography variant="h4">
                                login
                            </Typography>
                        </Button>

                    </Toolbar>
                </AppBar>
                </Box>
        </div>
     );
}
 
export default SuperAdmin;