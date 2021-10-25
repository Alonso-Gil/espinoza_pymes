import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
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

// function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }

const MainNavBar = ({NavBarContenido, InicioContenido, ClientesContenido, UsuariosContenido, CalendarioContenido, AvisosContenido}) => {

    const { listaMenu } = NavBarContenido;

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
                            {Object.keys(listaMenu).map(menu => (
                              <Tab 
                                label={menu}
                                key={menu}
                              />
                            ))}
                            {/* <Tab label="Inicio" {...a11yProps(0)} />
                            <Tab label="Usuarios" {...a11yProps(1)} />
                            <Tab label="Clientes" {...a11yProps(2)} /> */}
                        </Tabs>
                    </Box>
                </Box>
            </AppBar>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 8 }}
            >

                {/* Contenido de "Inicio" */}
                <TabPanel value={value2} index={0}>
                  {InicioContenido}
                </TabPanel>
        
                {/* Contenido de Clientes */}
                <TabPanel value={value2} index={1}>
                  {ClientesContenido}
                </TabPanel>

                {/* Contenido de "Usuarios" */}
                <TabPanel value={value2} index={2}>
                  {UsuariosContenido}
                </TabPanel>

                {/* Contenido de "Calendario" */}
                <TabPanel value={value2} index={3}>
                  {CalendarioContenido}
                </TabPanel>

                {/* Contenido de "Avisos" */}
                <TabPanel value={value2} index={4}>
                    {AvisosContenido}
                </TabPanel>

            </Box>

        </>
            
     );
}

MainNavBar.propTypes = {
  NavBarContenido: PropTypes.object.isRequired,
  InicioContenido: PropTypes.object.isRequired,
  ClientesContenido: PropTypes.object.isRequired,
  CalendarioContenido: PropTypes.object.isRequired,
  AvisosContenido: PropTypes.object.isRequired,
}
 
export default MainNavBar;