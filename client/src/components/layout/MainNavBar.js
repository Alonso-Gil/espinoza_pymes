import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const MainNavBar = ({NavBarContenido, InicioContenido, ClientesContenido, UsuariosContenido, CalendarioContenido, AvisosContenido, TipoUsuario}) => {

    const theme = useTheme();
    const { listaMenu } = NavBarContenido;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };

    return ( 
        <>
          <AppBar
              position="fixed"
              sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >  
              <Box sx={{ width: '100%' }}>
              <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"

                >
                  
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" >
                          {Object.keys(listaMenu).map(menu => (
                            <Tab 
                              label={menu}
                              key={menu}
                              {...a11yProps(menu)}
                            />
                          ))}
                      </Tabs>
                  </Box>
      
                  <Button variant="contained" color='secondary' sx={{ mr: 2 }}>
                    {TipoUsuario}
                   <ArrowDropDownIcon>
                   </ArrowDropDownIcon>
                  </Button>
                  </Stack>
              </Box>
          </AppBar>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 8 }}
            >
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {/* Contenido de "Inicio" */}
                <TabPanel value={value} index={listaMenu.Inicio} dir={theme.direction}>
                  {InicioContenido}
                </TabPanel>
        
                {/* Contenido de Clientes */}
                <TabPanel value={value} index={listaMenu.Clientes} dir={theme.direction}>
                  {ClientesContenido}
                </TabPanel>

                {/* Contenido de "Usuarios" */}
                <TabPanel value={value} index={listaMenu.Usuarios} dir={theme.direction}>
                  {UsuariosContenido}
                </TabPanel>

                {/* Contenido de "Calendario" */}
                <TabPanel value={value} index={listaMenu.Calendario} dir={theme.direction}>
                  {CalendarioContenido}
                </TabPanel>

                {/* Contenido de "Avisos" */}
                <TabPanel value={value} index={listaMenu.Avisos} dir={theme.direction}>
                    {AvisosContenido}
                </TabPanel>

              </SwipeableViews>

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