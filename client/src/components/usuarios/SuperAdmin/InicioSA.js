import React, {useEffect} from 'react';
import Spinner2 from '../../reutilizables/Spinner2';
import Spinner3 from '../../reutilizables/Spinner3';
import Spinner4 from '../../reutilizables/Spinner4';
import SpinnerKit from '../../reutilizables/SpinnerKit';

import { useDispatch } from 'react-redux';
import { obtenerAvisoAction } from '../../../redux/actions/avisoActions';

// Material UI
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { obtenerSolicitudesAction } from '../../../redux/actions/solicitudesActions';


const InicioSA = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la API - Precarga de los datos de aviso
        const cargarAviso = () => dispatch( obtenerAvisoAction() );
        cargarAviso();
        const cargarSolicitudes = () => dispatch( obtenerSolicitudesAction() );
        cargarSolicitudes();
        // eslint-disable-next-line
    }, []);

    return ( 
        <>
            <Typography sx={{textAlign: 'center', fontWeight: 'bold', marginBottom: 5}} color="black" variant="h3" component="div">
                Inicio Super Administrador
            </Typography>

            <Typography align="justify" paragraph color="black">
                Ser super Administrador te da los privilegios de ver todos los clientes y sus documentos así que ten cuidado y se responsable
                mientras estés dentro de la página. En la sección "Clientes" se encuentra un listado de los clientes de manera alfábetica, en un fututo
                se encontrarán los filtros para una búsqueda rápida y sencilla. Por el momento solo se pueden agregar los datos básicos del cliente, editarlos,
                eliminar o agregar un cliente, sin embargo esta conotemplado que en el botón en forma de ojo redirija a una pantalla la cuál será de la información
                del cliente y sus documentos. 
                En la sección "Usuarios", están los usuarios que tienen acceso al sistema, se puede ver su correo y el rol que tiene dentro del sistema.
                Cada rol es diferente y por lo tanto solo podrán realizar las acciones que se le permitan y le correspondan. Usted como Super Administrador puede 
                entrar y modificar el tipo de usuario y su contraseña en caso de que se requiera. Por cuestiones de privacidad usted no podrá ver la contraseña 
                actual de los usuarios, pero si tendrá el permiso de concederle una nueva a un usuario en caso que no la recuerde. Profavor recuerdele al usuario
                CAMBIAR LA CONTRASEÑA EN CUANTO TENGA ACCESO A SU CUENTA, esto para evitar futuros conflictos los cuáles pudieran acusarte a ti que cambiaste la contraseña
                y ambos saben cuál es la contraseña. Es importante que la legalidad y la privacidad se mantenga en orden en cada usuario.
            </Typography>

            <Typography align="justify" paragraph color="black">
                En la sección de "Calendario" podrás ver las citas del día, semana o mes, cada cita estará representada por un color, el cuál 
                significará el motivo de la cita, por ejemplo: 
                Morado - Cita Informativa
                Verde - Cita para retirar
                Azul - Cita para entrega de documentos de Finanzas.

                En la sección de "Avisos" los usuarios de Recursos Humanos estarán publicando avisos para TODOS los usuarios, en estos avisos 
                se podrán compartir imágenes y/o documentos también.
            </Typography>

            <Box sx={{ display: 'flex'}} >
                <SpinnerKit />
                <Spinner2 />
                <Spinner3 />
                <Spinner4 />
            </Box>
            
        </>
     );
}
 
export default InicioSA;