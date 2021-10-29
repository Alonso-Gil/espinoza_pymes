import React, { useEffect } from 'react'

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SpinnerKit from '../../reutilizables/SpinnerKit';


const UsuariosSA = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [usuario, setUsuario] = React.useState(

      {
      usuarios: [

         {
        nombre: 'Vero',
        correo: 'vero@espinozapymes.com',
        tipe: 'Super Admin',
      },
       {
        nombre: 'Fernando',
        correo: 'fernando@espinozapymes.com',
        tipe: 'Agente Difusor',
      },
       {
        nombre: 'Lucy',
        correo: 'lucy@espinozapymes.com',
        tipe: 'Recursos Humanos',
      },
      {
        nombre: 'Gil',
        correo: 'alonso@espinozapymes.com',
        tipe: 'Manager',
      },
      {
        nombre: 'Ceiri',
        correo: 'ceiri@espinozapymes.com',
        tipe: 'Recepción',
      },
      {
        nombre: 'Sharon',
        correo: 'sharon@espinozapymes.com',
        tipe: 'Manager',
      },
      {
        nombre: 'Mariana',
        correo: 'mariana@espinozapymes.com',
        tipe: 'Recepción',
      },
      {
        nombre: 'Alberto',
        correo: 'alberto@espinozapymes.com',
        tipe: 'Agente Difusor',
      },

      
    ]
    
    });

    useEffect( () => {

      setIsLoading(false);
    }, [] )


  //   const onChangeUsuario = e => {
  //     setUsuario(e.target.value)
  // }
    return ( 
        
        <  >

        {isLoading ? <SpinnerKit  /> 
             : (
                  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>

                  <TableRow>
                      <TableCell key={"nombre"}  align="center"  style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}} >Nombre</TableCell>
                      <TableCell key={"correo"}  align="center"  style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Correo</TableCell>
                      <TableCell key={"tipo"}    align="center"  style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}} >Tipo de Usuario</TableCell>
                      <TableCell key={"accion"}  align="center"  style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Editar/Eliminar</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                {usuario.usuarios.map((user, i) => {

                      return (
                        <TableRow align="center" key={i} > 
                            <TableCell key={"nombres"} align="center">{user.nombre}</TableCell>
                            <TableCell key={"correos"} align="center">{user.correo}</TableCell>
                            <TableCell key={"tipos"}   align="center">{user.tipe}</TableCell>

                            {/* <TableCell key={"tipos"} align="right">    
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ user.tipe }
                                label="Tipo de Usuario"
                                align="left"
                                onChange={ onChangeUsuario }
                                sx={{ width: 200 }}
                                > 
                                <MenuItem value={"Super Admin"}>Super Administrador</MenuItem>
                                <MenuItem value={"Manager"}>Manager</MenuItem>
                                <MenuItem value={"Agente Difusor"}>Agente Difusor</MenuItem>
                                <MenuItem value={"Recepción"}>Recepción</MenuItem>
                                <MenuItem value={"Procesos"}>Procesos</MenuItem>
                                <MenuItem value={"Agente Cerrador"}>Agente Cerrador</MenuItem>
                                <MenuItem value={"Asesor"}>Asesor</MenuItem>
                                <MenuItem value={"Finanzas"}>Finanzas</MenuItem>
                                <MenuItem value={"Recursos Humanos"}>Recursos Humanos</MenuItem>
                            </Select>  
                            </TableCell> */}

                            <TableCell key={"acciones"} align="center">  

                                <IconButton style={{ color: '#09507a' }}>
                                    <EditIcon />
                                </IconButton>

                                <IconButton style={{ color: '#b00020' }}>
                                    <DeleteIcon />
                                </IconButton>

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

         </>
     )


}
 
export default UsuariosSA;
