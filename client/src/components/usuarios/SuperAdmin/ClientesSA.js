import React, { useEffect } from 'react';

// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { obtenerClientesAction, borrarClienteAction } from '../../../redux/actions/clienteActions';

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { Fab, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SpinnerKit from '../../reutilizables/SpinnerKit';
import { Box } from '@mui/system';
import ModalReutilizable from '../../reutilizables/ModalReutilizable';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DeleteDialog } from '../../reutilizables/utils';

///////////ICONS\\\\\\\\\\\\\\\\\\\\\
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Swal from 'sweetalert2';
import CrearClienteForm from '../../reutilizables/CrearClienteForm';
import EditClienteForm from '../../reutilizables/EditClientForm';


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

    return (
        
        < >

          <Box sx={{ mb:2, mr:7 ,textAlign: 'right', marginLeft:140 }}>
                        <ModalReutilizable Boton={<Fab color="secondary" aria-label="edit" sx={{  }}> 
                                              <PersonAddIcon />
                                          </Fab>} // Botón para agregar cliente con modal
                                          Contenido={
                                              <>
                                                  <CrearClienteForm />
                                              </>
                                          }
                                  />
                      </Box>
        {isLoading ? <SpinnerKit  />  //Mientras el spinner este activo no muestra nada
             : (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>

            <TableRow>
                <TableCell key={"nombre"}    align="center"   style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}}>Nombre</TableCell>
                <TableCell key={"curp"}      align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}}>CURP</TableCell>
                <TableCell key={"nss"}       align="center"   style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}>NSS</TableCell>
                {/* <TableCell key={"doc"}   align="center"   style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}> </TableCell> */}
                <TableCell key={"accion"}    align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Acciones</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            
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

                                <ModalReutilizable Boton={ <IconButton style={{ color: '#09507a' }}>
                                                                <EditIcon />
                                                            </IconButton> }
                                              Contenido={                                       //Caja para mostrar los botones en un solo TableCell
                                                  <>
                                                     <EditClienteForm
                                                     client={cliente} />
                                                  </>
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
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 15]}    
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>

      )}
  
  <Box sx={{ minWidth: 275, mt:2, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>  

      {clientes.map((cliente, i) => { //Map a clientes para mostrarlos en Cartas
        return(
          <Card sx={{ maxWidth: 265, background:"#E0E0E0", m:2}} key={i}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" key={"nombre"} sx={{minHeight: 65}}>
            {cliente.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary" key={"curp"}>
              CURP: {cliente.curp}
              </Typography>
              <Typography variant="body2" color="text.secondary" key={"celular"}>
              Teléfono: {cliente.celular}
            </Typography>
          </CardContent>
          <CardActions sx={{ background:'#184c7c', maxHeight:42 }}>
                    <Box sx={{  minWidth: 260, display: 'flex' }} >
    
              <IconButton style={{ color: '#E3F2FD'}} >
                        <RemoveRedEyeIcon />
                    </IconButton> 
    
                    <ModalReutilizable Boton={ <IconButton style={{ color: '#E3F2FD' }}>
                                                    <EditIcon />
                                                </IconButton> }
                                  Contenido={
                                      <>
                                          <EditClienteForm client={cliente} />
                                      </>
                                  }
                
                    />
    
                  <IconButton style={{ color: '#E3F2FD', marginLeft:"auto" }} 
                              onClick={ () => { DeleteDialog("cliente", cliente.nombre) } } >
                      <DeleteIcon />
                  </IconButton>
    
              </Box>
          </CardActions>
        </Card>
    );

      })}

  </Box>
         </>
    );
}

export default ClientesSA;
