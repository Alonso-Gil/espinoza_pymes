import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const AgenteView = (
    {
    agente = {
        nombre:'',
        curp:'',
        correo:'',
        nss:'',
        fecha_nacimiento:'',
        celular:'',
        oficina:'',
        lugar_nacimiento:''}, 
    titulo='Agregar'}) => {

        return (

            <Box>

        <Typography gutterBottom variant="h5">
            Datos del Agente Difusor
        </Typography>

            <List
              sx={{
                width: '100%',
                maxWidth: 250,
                bgcolor: 'background.paper',
              }}
            >
              <ListItem>
                <ListItemText primary={agente.nombre} secondary="Nombre" />
              </ListItem>
              <Divider component="li" />
              <li>
                <Typography
                  sx={{ mt: 0.5, ml: 2 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Datos
                </Typography>
              </li>
              <ListItem>
                <ListItemText primary={agente.curp} secondary="CURP" />
              </ListItem>
              <Divider component="li" variant="inset" />
              <ListItem>
                <ListItemText primary={agente.nss} secondary="NSS" />
              </ListItem>
              <ListItem>
                <ListItemText primary={agente.fecha_nacimiento} secondary="Fecha de Nacimiento" />
              </ListItem>
              <ListItem>
                <ListItemText primary={agente.lugar_nacimiento} secondary="Lugar de Nacimiento" />
              </ListItem>
              <ListItem>
                <ListItemText primary={agente.celular} secondary="Teléfono Celular" />
              </ListItem>
              <ListItem>
                <ListItemText primary={agente.oficina} secondary="Teléfono de Oficina" />
              </ListItem>
              <ListItem>
                <ListItemText primary={agente.email} secondary="Correo" />
              </ListItem>
            </List>

            </Box>
          );

}

export default AgenteView;