import React from 'react';
import PropTypes from 'prop-types';

// Material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TablaClientes = ({Contenido}) => {
    return (
        <>
            <TableContainer sx={{ maxHeight: 500 }}>

            <Table stickyHeader aria-label="sticky table">
                <TableHead>

                    <TableRow>
                        <TableCell key={"nombre"}    align="center"   style={{ minWidth:140, backgroundColor:"#09507a", color:"white"}}>Nombre</TableCell>
                        <TableCell key={"curp"}      align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}}>CURP</TableCell>
                        <TableCell key={"nss"}       align="center"   style={{ minWidth:200, backgroundColor:"#09507a", color:"white"}}>NSS</TableCell>
                        <TableCell key={"accion"}    align="center"   style={{ minWidth:150, backgroundColor:"#09507a", color:"white"}} >Acciones</TableCell>
                    </TableRow>

                </TableHead>

            <TableBody>
                {Contenido}
            </TableBody>

            </Table>

            </TableContainer>
        </>
    )
}

TablaClientes.propTypes = {
    Contenido: PropTypes.object.isRequired
}

export default TablaClientes;
