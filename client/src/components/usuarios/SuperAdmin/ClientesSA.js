import React, { useEffect } from 'react';

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SpinnerKit from '../../reutilizables/SpinnerKit';

///////////ICONS\\\\\\\\\\\\\\\\\\\\\
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ClientesSA = () => {

  const [isLoading, setIsLoading] = React.useState(true);
    const [cliente, setCliente] = React.useState({
        clientes: [
            {
           nombre: 'Fernando Rafael González Soto',
           curp: 'GOSF980507HASNTR01',
           nss: '123456789012',
           fecha_nacimiento: '05/07/1998',
           celular: '(449) 230 46 75',
         },
         {
          nombre: 'Alonso Gil Pérez',
          curp: 'GIPA990621HASNTR01',
          nss: '123456789012',
          fecha_nacimiento: '21/06/1999',
          celular: '(449) 365 66 42',
        }
        ]
    });

    useEffect( () => {

      setIsLoading(false);
    }, [] );

    return (
        
        <>
        {isLoading ? <SpinnerKit  /> 
             : (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>

            <TableRow>
                <TableCell key={"nombre"}     align="center"   style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}}>Nombre</TableCell>
                <TableCell key={"curp"}     align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}}>CURP</TableCell>
                <TableCell key={"nss"}       align="center"   style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}>NSS</TableCell>
                {/* <TableCell key={"doc"}       align="center"   style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}> </TableCell> */}
                <TableCell key={"accion"}     align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Acciones</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            
            
           {cliente.clientes.map((user, i) => {

                return (

                    
                  <TableRow align="center" key={i} > 
                  
                      <TableCell key={"nombres"} align="center">{user.nombre}</TableCell>
                      <TableCell key={"curps"}   align="center">{user.curp}</TableCell>
                      <TableCell key={"nsss"}    align="center">{user.nss}</TableCell>

                      {/* <TableCell key={"docs"}    align="center" >
                             <IconButton style={{ color: '#09507a' }} >
                                <RemoveRedEyeIcon />
                            </IconButton> 
                      </TableCell> */}


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

                      <IconButton style={{ color: '#09507a' }} >
                                <RemoveRedEyeIcon />
                            </IconButton> 


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
    );
}

export default ClientesSA;
