import React, { useEffect } from 'react'
import ModaReutilizable from '../../reutilizables/ModalReutilizable';
import UserForm from '../../reutilizables/UserForm';
import { AgenteAceptado, DeleteDialog } from '../../reutilizables/utils';
import Swal from 'sweetalert2';

// Actions de Redux
import { obtenerUsuariosAction, borrarUsuarioAction, obtenerUsuarioEditar } from '../../../redux/actions/usuarioActions';
import { useDispatch, useSelector } from 'react-redux';

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import SpinnerKit from '../../reutilizables/SpinnerKit';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AgenteView from '../../reutilizables/agenteView';
import SpinnerKit from '../../reutilizables/SpinnerKit';

const UsuariosSA = () => {

      // Utilizar useDispatch y te crea una función
      const dispatch = useDispatch();

      useEffect(() => {
          // Consultar la API
        const cargarUsuarios = () => dispatch( obtenerUsuariosAction() );
        cargarUsuarios();
        
        // eslint-disable-next-line
      }, []);

    // Confirmar si desea eliminar
    const confirmarEliminarUsuario = id => {
      // Preguntar al usuario 
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertirlo una vez borrado!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Pasarlo al action
            dispatch( borrarUsuarioAction(id) );
            // Si se elimina, mostrar alerta
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado.',
              'success'
            )
          }
        });
    }

    const seleccionarEditarUsuario = id => {
      dispatch( obtenerUsuarioEditar(id) );
    }
  
    // Obtener el state
    const usuarios = useSelector( state => state.usuarios.usuarios );
    const error = useSelector(state => state.usuarios.error);
    const cargando = useSelector( state => state.usuarios.loading)

    // const [isLoading, setIsLoading] = React.useState(true);

    const [agente] = React.useState(
      {
        agentes: [
          {
            nombre: 'Eduardo González Montes',
            curp:'GOEE190875HASNTRO4',
            nss:'123456789',
            lugar_nacimiento:'Aguascalientes, Ags',
            fecha_nacimiento:'1975-08-19',
            celular:'(449) 925 33 22',
            oficina:'',
            correo:'eduardo@gmail.com'
          },
          {
            nombre: 'Francisco Sandoval Esparza',
            curp:'SAEF220870HASNTRO4',
            nss:'123456789',
            lugar_nacimiento:'Aguascalientes, Ags',
            fecha_nacimiento:'1970-08-22',
            celular:'(449) 322 33 22',
            oficina:'',
            correo:'francisco@gmail.com'
          },
          {
            nombre: 'José Guadalupe Rocha García',
            curp:'ROGJ190498HASNTRO4',
            nss:'123456789',
            lugar_nacimiento:'Aguascalientes, Ags',
            fecha_nacimiento:'1998-04-19',
            celular:'(449) 775 46 99',
            oficina:'',
            correo:'lupe@gmail.com'
          },
          {
            nombre: 'Gerardo Martínez Velázquez',
            curp:'MAVG190892HASNTRO4',
            nss:'123456789',
            lugar_nacimiento:'Aguascalientes, Ags',
            fecha_nacimiento:'1992-08-19',
            celular:'(449) 925 33 22',
            oficina:'',
            correo:'princeso22@gmail.com'
          }
        ]
      }
    )

    return ( 
    
        <>
          { cargando ? <SpinnerKit /> : 
            <>
              <Box sx={{ mb:2, mr:7 ,textAlign: 'right', marginLeft:140   }}>
              <ModaReutilizable Boton={<Fab color="secondary" aria-label="edit" sx={{  }}>
                                    <PersonAddIcon />
                                </Fab>}
                                Contenido={ //Caja para agregar usuario con modal
                                    <>
                                        <UserForm />
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
                      <TableCell key={"nombre"}  align="center"  style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}} >Nombre</TableCell>
                      <TableCell key={"correo"}  align="center"  style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Correo</TableCell>
                      <TableCell key={"tipo"}    align="center"  style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}} >Tipo de Usuario</TableCell>
                      <TableCell key={"accion"}  align="center"  style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}} >Editar/Eliminar</TableCell>
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

                          <ModaReutilizable Boton={ 
                            <IconButton style={{ color: '#09507a' }}
                              onClick={() => seleccionarEditarUsuario(usuario)}
                            >
                              <EditIcon />
                            </IconButton> }

                            Contenido={             //Caja para los botones de cada usuario
                              <>
                                <UserForm 
                                titulo={'Editar'}
                                usuario={usuario} />
                              </>
                            }
                          />

                          <IconButton style={{ color: '#b00020', marginLeft:35 }} 
                          onClick={() => confirmarEliminarUsuario(usuario.idUsuario)} >

                          <DeleteIcon  />            

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

      {agente.agentes.map((agente, i) => { //Map a los agentes para mostrarlos en Cartas

            return(
              <Card sx={{ maxWidth: 265, background:"#E0E0E0", m:2}} key={i}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" key={"nombre"} sx={{minHeight: 70}}>
                {agente.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" key={"curp"}>
                  CURP: {agente.curp}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" key={"celular"}>
                  Teléfono: {agente.celular}
                </Typography>
                
              </CardContent>
              <CardActions sx={{ background:'#184c7c', maxHeight:42 }}>

                <Box sx={{  minWidth: 260, display: 'flex' }} >

                  <IconButton style={{ color: '#E3F2FD'}} 
                              onClick={ () => { DeleteDialog("Agente Difusor", agente.nombre) } } >
                      <DeleteIcon />
                  </IconButton> 


                  <ModaReutilizable Boton={ <IconButton style={{ color: '#E3F2FD'}} >
                                                        <RemoveRedEyeIcon />
                                                    </IconButton> }
                                              Contenido={
                                                  <>
                                                      <AgenteView 
                                                          agente={agente} />
                                                  </>
                                              }
                            
                            />
                   


                  <IconButton style={{ color: '#E3F2FD', marginLeft:"auto"}} 
                              onClick={ () => { AgenteAceptado(agente.correo, agente.nombre) } }>
                      <PersonAddIcon />
                  </IconButton>

                </Box>
              </CardActions>
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
