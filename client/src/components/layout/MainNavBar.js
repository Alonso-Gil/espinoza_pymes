import React from 'react';

// Material UI
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const drawerWidth = 320;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const MainNavBar = (props) => {

    const [value2, setValue2] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue2(newValue);
    };
  

    return ( 
        <>
        <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >  
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value2} onChange={handleChange} textColor="inherit" indicatorColor="secondary" >
                            <Tab label="Inicio" {...a11yProps(0)} />
                            <Tab label="Usuarios" {...a11yProps(1)} />
                            <Tab label="Clientes" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                </Box>
            </AppBar>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 8 }}
            >
                <TabPanel value={value2} index={0}>

                    <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                        Inicio
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

                </TabPanel>
        
                <TabPanel value={value2} index={1}>
                    
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                        Usuario
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

                </TabPanel>
                
                <TabPanel value={value2} index={2}>
                    Item Three
                </TabPanel>
            </Box>

        </>
            
     );
}
 
export default MainNavBar;