import React, { useEffect } from 'react'
import ModaReutilizable from '../../reutilizables/ModalReutilizable';
import EditUserForm from '../../reutilizables/EditUserForm';
import CrearUserForm from '../../reutilizables/CrearUserForm';
import AgenteView from '../../reutilizables/agenteView';
import SpinnerKit from '../../reutilizables/SpinnerKit';
import Swal from 'sweetalert2';
import { makeStyles } from '@mui/styles';

// Actions de Redux
import { obtenerUsuariosAction, borrarUsuarioAction, obtenerUsuarioEditar } from '../../../redux/actions/usuarioActions';
import { useDispatch, useSelector } from 'react-redux';

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { Card, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import { borrarSolicitudAction, crearUsuarioSolicitud, obtenerSolicitudesAction } from '../../../redux/actions/solicitudesActions';
import Tarjetas from '../../reutilizables/Tarjetas';

const UsuariosSA = () => {

      // Utilizar useDispatch y te crea una función
      const dispatch = useDispatch();
      useEffect(() => {
          // Consultar la API
        const cargarUsuarios = () => dispatch( obtenerUsuariosAction() );
        const cargarSolicitudes = () => dispatch( obtenerSolicitudesAction());
        cargarUsuarios();
        cargarSolicitudes();
        // eslint-disable-next-line
      }, []);


    //Confirmación para crear usuario de una solicitud
    const AceptarAgente = agente => {
      Swal.fire({
        title: `Agrega una contraseña inicial para ${agente.email}`,
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        inputValidator: contraseña => {
          // Si el valor es válido, debes regresar undefined. Si no, una cadena
          if (!contraseña) {
              return "Por favor escribe una contraseña inicial";
          } else {
            agente.contra = contraseña;
              return undefined;
          }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(agente); //TODO: REDUCER PARA CREAR USUARIO DE AGENTE
        dispatch( crearUsuarioSolicitud(agente));
        const cargarUsuarios = () => dispatch( obtenerUsuariosAction() );
        cargarUsuarios();
        Swal.fire(
          '¡Agente Difusor Agregado!',
          `¡Ahora ${agente.nombre} es parte de la familia EspinozaPymes!`,
          'success'
        )
      }
    })
    }

    //Confirmación para eliminar solicitud de agente
    const confirmarEliminarAgente = solicitud => {
      Swal.fire({ //Código JS para mostrar el dialog con animación de Sweet Alert, hecha función para poder reutilizarla
        title: `¿Seguro que quieres eliminar la solicitud de: ${solicitud.nombre}?`,
        text: `Una vez eliminado no podrás recuperar los datos.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',  
        confirmButtonText: `Eliminar solicitud`,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Pasarlo al action
        dispatch( borrarSolicitudAction(solicitud.idSolicitud) );
        // Si se elimina, mostrar alerta
          Swal.fire(
            '¡Eliminado!',
            `Se ha eliminado la solicitud de: ${solicitud.nombre} se ha eliminado exitosamente`,
            'success'
          )
        }
      })  
    }

    // Confirmar si desea eliminar usuario
    const confirmarEliminarUsuario = usuario => {
      // Preguntar al usuario 
        Swal.fire({
          title: `¿Seguro que quieres eliminar al usuario: ${usuario.Nombre}?`,
            text: `Una vez eliminado no podrás recuperar los datos del usuario`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Pasarlo al action
            dispatch( borrarUsuarioAction(usuario.idUsuario) );
            // Si se elimina, mostrar alerta
            Swal.fire(
              '¡Eliminado!',
              `El usuario: ${usuario.Nombre} se ha eliminado exitosamente`,
              'success'
            )
          }
        });
    }

    const seleccionarEditarUsuario = id => {
      dispatch( obtenerUsuarioEditar(id) );
    }

    // Obtener el state para usuarios
    const usuarios = useSelector( state => state.usuarios.usuarios );
    const error = useSelector(state => state.usuarios.error);
    const cargando = useSelector( state => state.usuarios.loading);

    // console.log(usuarios);
    const solicitudes = useSelector( state => state.solicitudes.solicitudes.data.solicitudes);
    // const errorSolicitud = useSelector( state => state.solicitudes.error);
    // const cargandoSolicitud = useSelector(state => state.solicitudes.loading); 
    
    const useStyles = makeStyles({
      tarjetaSolicitud: {
        background: 'radial-gradient(circle at 95.45% -4.17%, #656881 0, #1f3b6f 50%, #00175c 100%)',
      },
    });

    const classes = useStyles();

    return ( 
        <>
          { cargando ? <SpinnerKit /> : 
            <>
              <Box sx={{ mb:2, mr:7 ,textAlign: 'right', marginLeft:'95%'   }}>
              <ModaReutilizable Boton={<Fab color="secondary" aria-label="edit" sx={{  }}>
                                    <PersonAddIcon />
                                </Fab>}
                                Contenido={ //Caja para agregar usuario con modal
                                    <>
                                        <CrearUserForm />
                                    </>
                                }
                        />
            </Box>

            { error ? <Alert severity="error" sx={{ mb: 4}}>Hubo un error! - Intentalo de nuevo o notifica al área de sistemas</Alert> : null }

                  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 490 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                      <TableCell key={"nombre"} align="center" style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}}>Nombre</TableCell>
                      <TableCell key={"correo"} align="center" style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}}>Correo</TableCell>
                      <TableCell key={"tipo"} align="center" style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}>Tipo de Usuario</TableCell>
                      <TableCell key={"accion"} align="center" style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}>Editar/Eliminar</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                { usuarios.lenght === 0 ? 'No Hay usuarios' :
                    usuarios.map((usuario, i) => ( //Hacemos un mapeo a todos los clientes para poder mostrarlos en la tabla
                      <TableRow align="center" key={i}> 
                        <TableCell align="center">{usuario.Nombre}</TableCell>
                        <TableCell align="center">{usuario.Correo}</TableCell> 
                        <TableCell align="center">{usuario.Tipo}</TableCell>
                        <TableCell align="center"  >  
                          <Box sx={{  display: 'inline-flex' }} >
                            <ModaReutilizable 
                              Boton={ 
                                <IconButton style={{ color: '#09507a' }}
                                  onClick={() => seleccionarEditarUsuario(usuario)}
                                >
                                  <EditIcon />
                                </IconButton>  
                              }

                              Contenido={// Caja para los botones de cada usuario
                                <EditUserForm 
                                  titulo={'Editar'}
                                  usuario={usuario} 
                                />
                              }
                            />

                            <IconButton style={{ color: '#b00020', marginLeft:35 }} 
                              onClick={() => confirmarEliminarUsuario(usuario)}  >
                              <DeleteIcon />            
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))       
                }
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
             
      <Typography gutterBottom variant="h5" sx={{mt:2}}>
        Solicitudes:
        </Typography>
      <Box sx={{ minWidth: 275, mt:1, display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>

      {solicitudes.map((agente, i) => { //Map a las solicitudes de los agentes para mostrarlos en Cartas
            return(
              <Card sx={{ maxWidth: 265, m:2}} key={i} className={classes.tarjetaSolicitud}>
                <Tarjetas 
                  Contenido = {
                    <>
                      <Typography gutterBottom variant="h5" component="div" key={"nombre"} sx={{minHeight: 70}} color="white">
                      {agente.nombre}
                      </Typography>
                      <Typography variant="body2" color="white" key={"curp"}>
                        CURP: {agente.curp}
                        </Typography>
                        <Typography variant="body2" color="white" key={"celular"}>
                        Teléfono: {agente.celular}
                      </Typography>
                    </>
                  }
                  Botones= {
                    <>
                        <IconButton style={{ color: '#E3F2FD'}} 
                          onClick={ () => { confirmarEliminarAgente(agente) } } >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton> 

                        <ModaReutilizable 
                          Boton={ <IconButton 
                          style={{ color: '#E3F2FD'}} >
                                    <RemoveRedEyeOutlinedIcon />
                                </IconButton> }
                          Contenido={
                              <>
                                  <AgenteView 
                                      agente={agente} />
                              </> } 
                        />

                        <IconButton style={{ color: '#E3F2FD', marginLeft:"auto"}} 
                                    onClick={ () => { AceptarAgente(agente) } }>
                            <PersonAddIcon />
                        </IconButton>
                    </>
                  }
                />
                
            </Card>
            );

            })}
      </Box>
            </>
          }
          
         </ >
     )
}
 
export default UsuariosSA;