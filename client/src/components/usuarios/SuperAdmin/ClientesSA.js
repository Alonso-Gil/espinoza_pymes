import React, { useEffect } from 'react';

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
import ClienteForm from '../../reutilizables/ClienteForm';


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
           oficina:'',
          registrado_por:'Vero',
          actualizado_por:'Lucy',
          actualizado_fecha:'29/10/21'
         },
         {
          nombre: 'Alan Emmanuel Delgado López',
          curp: 'DELA990621HASNTR01',
          nss: '123456789012',
          fecha_nacimiento: '21/06/1999',
          celular: '(449) 365 66 42',
          oficina:'',
          registrado_por:'Lucy',
          actualizado_por:'Vero',
          actualizado_fecha:'29/09/21'
        },
        {
          nombre: 'Edna Montserrat Silva Aguilar',
          curp: 'SIAE990414HASNTR01',
          nss: '123456789012',
          fecha_nacimiento: '21/06/1999',
          celular: '(449) 788 77 42',
          oficina:'',
          registrado_por:'Mariana',
          actualizado_por:'Lucy',
          actualizado_fecha:'29/09/21'
        }
        ]
    });

    useEffect( () => {

      setIsLoading(false);
    }, [] );

    return (
        
        < >

          <Box sx={{ mb:2, mr:7 ,textAlign: 'right'}}>
                        <ModalReutilizable Boton={<Fab color="secondary" aria-label="edit" sx={{  }}>
                                              <PersonAddIcon />
                                          </Fab>}
                                          Contenido={
                                              <>
                                                  <ClienteForm />
                                              </>
                                          }
                                  />
                      </Box>
        {isLoading ? <SpinnerKit  /> 
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
            
            
           {cliente.clientes.map((cliente, i) => {

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
                                              Contenido={
                                                  <>
                                                      <ClienteForm
                                                          client={cliente}
                                                          titulo="Editar" />
                                                  </>
                                              }
                            
                                />


                              <IconButton style={{ color: '#b00020' }} onClick={ () => { DeleteDialog("cliente", cliente.nombre) } }>
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
  
  <Box sx={{ minWidth: 275, mt:2, display:'flex' }}>

      {cliente.clientes.map((cliente, i) => {

        return(
          <Card sx={{ maxWidth: 275, background:"#E0E0E0", m:2}} key={i}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" key={"nombre"}>
            {cliente.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary" key={"curp"}>
              CURP: {cliente.curp}
              </Typography>
              <Typography variant="body2" color="text.secondary" key={"celular"}>
              Teléfono: {cliente.celular}
            </Typography>
            
          </CardContent>
          <CardActions>
    
                    <Box sx={{  minWidth: 275, display: 'inline-flex', background:'#184c7c' }} >
    
              <IconButton style={{ color: '#E3F2FD' }} >
                        <RemoveRedEyeIcon />
                    </IconButton> 
    
                    <ModalReutilizable Boton={ <IconButton style={{ color: '#E3F2FD' }}>
                                                    <EditIcon />
                                                </IconButton> }
                                  Contenido={
                                      <>
                                          <ClienteForm
                                              client={cliente}
                                              titulo="Editar" />
                                      </>
                                  }
                
                    />
    
    
                  <IconButton style={{ color: '#E3F2FD' }} 
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
