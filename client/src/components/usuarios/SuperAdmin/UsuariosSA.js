import React, { useEffect } from 'react'
import ModaReutilizable from '../../reutilizables/ModalReutilizable';
import UserForm from '../../reutilizables/UserForm';
import { AgenteAceptado, DeleteDialog } from '../../reutilizables/utils';

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
import SpinnerKit from '../../reutilizables/SpinnerKit';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AgenteView from '../../reutilizables/agenteView';




const UsuariosSA = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [usuario] = React.useState( //Usuarios iniciales simulando un JSON

      {
      usuarios: [

         {
        nombre: 'Vero',
        correo: 'vero@espinozapymes.com',
        tipe: 'Super Admin',
        idTipe: 9
      },
       {
        nombre: 'Fernando',
        correo: 'fernando@espinozapymes.com',
        tipe: 'Agente Difusor',
        idTipe: 1
      },
       {
        nombre: 'Lucy',
        correo: 'lucy@espinozapymes.com',
        tipe: 'Recursos Humanos',
        idTipe: 8
      },
      {
        nombre: 'Gil',
        correo: 'alonso@espinozapymes.com',
        tipe: 'Manager',
        idTipe: 2
      },
      {
        nombre: 'Ceiri',
        correo: 'ceiri@espinozapymes.com',
        tipe: 'Recepción',
        idTipe: 3
      },
      {
        nombre: 'Sharon',
        correo: 'sharon@espinozapymes.com',
        tipe: 'Manager',
        idTipe: 2
      },
      {
        nombre: 'Mariana',
        correo: 'mariana@espinozapymes.com',
        tipe: 'Recepción',
        idTipe: 3
      },
      {
        nombre: 'Alberto',
        correo: 'alberto@espinozapymes.com',
        tipe: 'Agente Difusor',
        idTipe: 1
      },

      
    ]
    
    });

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

    useEffect( () => {

      setIsLoading(false); //Se deja de mostrar el Spinner
    }, [] )

    return ( 
    
        <   >
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

        {isLoading ? <SpinnerKit  />  //Si no se ha cargado se muestra el Spinner
             : (
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
                {usuario.usuarios.map((user, i) => { //Hacemos un mapeo a todos los clientes para poder mostrarlos en la tabla

                      return (
                        <TableRow align="center" key={i} > 
                            <TableCell key={"nombres"} align="center">{user.nombre}</TableCell>
                            <TableCell key={"correos"} align="center">{user.correo}</TableCell> 
                            <TableCell key={"tipos"}   align="center">{user.tipe}</TableCell>
                            <TableCell key={"acciones"} align="center"  >  

                          <Box sx={{  display: 'inline-flex' }} >
                            <ModaReutilizable Boton={ <IconButton style={{ color: '#09507a' }}>
                                                          <EditIcon />
                                                      </IconButton> }
                                              Contenido={             //Caja para los botones de cada usuario
                                                  <>
                                                      <UserForm 
                                                          titulo={'Editar'}
                                                          user={user} />
                                                  </>
                                              }
                            
                            />
                                
                                <IconButton style={{ color: '#b00020', marginLeft:35 }} 
                                   onClick={ () => { DeleteDialog("usuario", user.nombre) } } >

                                    <DeleteIcon  />            

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

      <Typography gutterBottom variant="h5" sx={{mt:2}}>
        Solicitudes:
        </Typography>
      <Box sx={{ minWidth: 275, mt:1, display:'flex' }}>

      {agente.agentes.map((agente, i) => { //Map a clientes para mostrarlos en Cartas

            return(
              <Card sx={{ maxWidth: 275, background:"#E0E0E0", m:2}} key={i}>
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
                   


                  <IconButton style={{ color: '#E3F2FD', marginLeft:"auto" }} 
                              onClick={ () => { AgenteAceptado(agente.correo, agente.nombre) } }>
                      <PersonAddIcon />
                  </IconButton>

                </Box>
              </CardActions>
            </Card>
            );

            })}
      </Box>


         </ >
     )


}
 
export default UsuariosSA;
