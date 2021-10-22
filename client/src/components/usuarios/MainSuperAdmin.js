import React from 'react'

///////////MATERIAL\\\\\\\\\\\\\\\\\\\
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

  function createData(nombre, correo, tipo) {

    const contraseña = '**********'
    return { nombre, correo, contraseña, tipo};    
  }

  const rows = [

    createData('Vero', 'vero@espinozapymes.com', 'Super Admin'),
    createData('Fernando', 'fernando@espinozapymes.com', 'Super Admin'),
    createData('Gil', 'alonso@espinozapymes.com', 'Agente Difusor'),
    createData('Lucy', 'lucy@espinozapymes.com', 'Recursos Humanos'),
    createData('Ceiri', 'ceiri@espinozapymes.com', 'Agente Difusor'),
    createData('Sharon', 'sharon@espinozapymes.com', 'Recepción'),
    createData('Mariana', 'sharon@espinozapymes.com', 'Recepción'),
    createData('Liliana', 'liliana@espinozapymes.com', 'Agente Difusor'),
    createData('Alberto', 'alberto@espinozapymes.com', 'Agente Difusor'),
  ];

    
  
    

const MainSuperAdmin = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tipo, setTipo] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      const handleChangeTipo = (event) => {
        setTipo(event.target.value);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return ( 
        
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead  >
            <TableRow>
                <TableCell key={"nombre"} align="center" style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}} >Nombre</TableCell>
                <TableCell key={"correo"} align="center" style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Correo</TableCell>
                <TableCell key={"contraseña"} align="center" style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Contraseña</TableCell>
                <TableCell key={"tipo"} align="center" style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}} >Tipo de Usuario</TableCell>
                <TableCell key={"acciones"} align="center" style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Editar/Eliminar </TableCell>
              {/* {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:"#09507a", color:"white"}}
                >
                  {column.label}
                </TableCell> */}
              {/* )  */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {

                return (
                <TableRow align="center" key={row.code} > 
                    <TableCell key={"nombre"} align="center">{row.nombre}</TableCell>
                    <TableCell key={"correo"} align="center">{row.correo}</TableCell>
                    <TableCell key={"contraseña"} align="center">{row.contraseña}</TableCell>

                    <TableCell key={"tipo"} align="right">    
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={row.tipo}
                        label="Tipo de Usuario"
                        align="left"
                        onChange={handleChangeTipo}
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
                    </TableCell>

                    <TableCell align="center">  

                        <IconButton style={{ color: '#09507a' }}>
                            <EditIcon />
                            
                        </IconButton>

                        <IconButton style={{ color: '#b00020' }}>
                            <DeleteIcon />
                        </IconButton>

                    </TableCell>
                
                 </TableRow>
                );
                // return (
                //   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                //     {columns.map((column) => {
                //       const value = row[column.id];
                //       return (
                //         <TableCell key={column.id} align={column.align}>
                //           {column.format && typeof value === 'number'
                //             ? column.format(value)
                //             : value}
                //         </TableCell>
                //       );
                //     })}
                //   </TableRow>
                // );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}    
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

         </>
     )


}
 
export default MainSuperAdmin;
