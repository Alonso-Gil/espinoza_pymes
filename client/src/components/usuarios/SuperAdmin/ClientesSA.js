import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
// import TablaClientes from '../../reutilizables/TablaClientes';

// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { obtenerClientesAction, borrarClienteAction } from '../../../redux/actions/clienteActions';

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { Fab, IconButton } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
import SpinnerKit from '../../reutilizables/SpinnerKit';
import { Box } from '@mui/system';
import ModalReutilizable from '../../reutilizables/ModalReutilizable';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

///////////ICONS\\\\\\\\\\\\\\\\\\\\\
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Swal from 'sweetalert2';
import CrearClienteForm from '../../reutilizables/CrearClienteForm';
import EditClienteForm from '../../reutilizables/EditClientForm';
import Tarjetas from '../../reutilizables/Tarjetas';


const ClientesSA = () => {

  const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();

    useEffect( () => {
      // Consultar la API
      const cargarClientes = () => dispatch( obtenerClientesAction() );
      cargarClientes();
      setIsLoading(false); //Se deja de mostrar el Spinner, solo dura 1 seg o menos por ahora
      // eslint-disable-next-line
    }, [] );

    // Obtener los clientes
    const clientes = useSelector( state => state.clientes.clientes); 

    //Obtenemos el nombre del usuario de la autenticación para mandarlo en el formulario en caso de que actualice o agregue un cliente
    const user = useSelector( state => state.auth.usuario);
    const name_user = user.nombre;

    const confirmarEliminarCliente = cliente => {
      // Preguntar al usuario 
        Swal.fire({
          title: `¿Seguro que quieres eliminar al cliente: ${cliente.nombre}?`,
            text: `Una vez eliminado no podrás recuperar los datos del cliente`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Pasarlo al action
            dispatch( borrarClienteAction(cliente.idCliente) );
            // Si se elimina, mostrar alerta
            Swal.fire(
              '¡Eliminado!',
              `El cliente: ${cliente.Nombre} se ha eliminado exitosamente`,
              'success'
            )
          }
        });
    }

    const useStyles = makeStyles({
      tarjeta: {
        maxWidth: 265, 
        margin:2
      },
      tarjetaAzul: {
        background: 'linear-gradient(210deg, #0095cf 0, #156892 50%, #183f58 100%)',
      },
    });

    const classes = useStyles();

  return ( 
    <>
      <Box sx={{ mb:2 }}>

      <Typography variant="h4" fontWeight="bold" sx={{position:'absolute'}}> Clientes </Typography>

      <Box sx={{marginLeft:'95%'}}>
        <ModalReutilizable
          Boton={
            <Fab color="secondary" aria-label="edit"> 
              <PersonAddIcon />
            </Fab>} // Botón para agregar cliente con modal
          Contenido={
            <CrearClienteForm creador={name_user}/>
          }
        />
        </Box>
      </Box>

      {/* {isLoading ? <SpinnerKit  />  //Mientras el spinner este activo no muestra nada
      : (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TablaClientes 
            Contenido={
              <>
                {clientes.map((cliente, i) => {  //Hacemos un map a todos los clientes para mostrarlos en la tabla
                  return (
                    <TableRow align="center" key={i} > 
                        <TableCell key={"nombres"} align="center">{cliente.nombre}</TableCell>
                        <TableCell key={"curps"}   align="center">{cliente.curp}</TableCell>
                        <TableCell key={"nsss"}    align="center">{cliente.nss}</TableCell>
                        <TableCell key={"acciones"} align="center">  
                          <Box sx={{  display: 'inline-flex' }} >  

                              <IconButton style={{ color: '#09507a' }} >
                                  <RemoveRedEyeIcon />
                              </IconButton> 

                              <ModalReutilizable 
                                  Boton={ 
                                      <IconButton style={{ color: '#09507a' }}>
                                          <EditIcon />
                                      </IconButton> }

                                  Contenido={
                                      <EditClienteForm client={cliente} editor={name_user}/>
                                  }
                              />

                              <IconButton style={{ color: '#b00020', marginLeft:35 }} 
                                  onClick={ () => { confirmarEliminarCliente(cliente) } }>
                                  <DeleteIcon />
                              </IconButton>
                              
                          </Box>
                        </TableCell>
                    </TableRow>
                  );  
                })}
              </>
            }
          />
        </Paper>
      )} */}
  
  {isLoading ? <SpinnerKit />
  :

      <Box sx={{ minWidth: 275, mt:2, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', justifyContent:'center' }}>  

      {clientes.map((cliente, i) => { //Map a clientes para mostrarlos en las tarjetas
        return(
          <Card sx={{ maxWidth: 265, m:2}} key={i} className={classes.tarjetaAzul} >
            <Tarjetas 
              Contenido = {
                <>
                  <Typography gutterBottom variant="h5" component="div" key={"nombre"} sx={{minHeight: 65}} color="white">
                    {cliente.nombre}
                  </Typography>

                  <Typography variant="body2" color="white" key={"curp"} >
                    CURP: {cliente.curp}
                  </Typography>

                  <Typography variant="body2" color="white" key={"celular"} >
                    Teléfono: {cliente.celular}
                  </Typography>
                </>
              }
              Botones = {
                <>
                    <IconButton style={{ color: '#E3F2FD'}} >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton> 
          
                    <ModalReutilizable 
                      Boton={ 
                        <IconButton style={{ color: '#E3F2FD' }}>
                          <EditOutlinedIcon />
                        </IconButton> 
                      }
                      Contenido={
                        <EditClienteForm client={cliente} editor={name_user}/>
                      }
                    />
          
                      <IconButton style={{ color: '#E3F2FD', marginLeft:"auto" }} 
                          onClick={ () => { confirmarEliminarCliente(cliente) } } >
                          <DeleteOutlineOutlinedIcon />
                      </IconButton>
                </>
              }
            />
          </Card>
        ) //Fin del return y del map abajo
      })}
      </Box>
}
    </>
  );
}

export default ClientesSA;