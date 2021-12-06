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
        cargarAviso(); //Precarga datos de solicitudes también por molestias que esta causando hacerlo desde usuarios
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
                actual de los usuarios, pero si tendrá el permiso de concederle una nueva a un usuario en caso que no la recuerde. Porfavor recuerdele al usuario
                CAMBIAR LA CONTRASEÑA EN CUANTO TENGA ACCESO A SU CUENTA, esto para evitar futuros conflictos los cuáles pudieran ocasionarte, ya que cambiaste la contraseña
                y ambos la saben, acusarte a ti que hiciste cambios o movimientos dentro de su cuenta, si te es posible porfavor verifica que ya no puedes acceder con
                la contraseña que tú le otorgaste para recuperar su contraseña. Es importante que la legalidad y la privacidad se mantenga en orden en cada usuario.
            </Typography>

            <Typography align="justify" paragraph color="black">
                En la sección de "Calendario" podrás ver las citas del día, semana o mes, cada cita estará representada por un color, el cuál 
                significará el motivo de la cita, los colores representan: 
                Morado  - Cita Informativa
                Verde   - Cita para retirar
                Azul    - Cita para entrega de documentos de Finanzas.
                Naranja - Cita para hacer cita con el  Notario.
                Rosa    - Cita para retiro de inversión.
                Rojo    - Cita para entrega de inversión.

                En la sección de "Avisos" los usuarios de Recursos Humanos estarán publicando avisos para TODOS los usuarios, en estos avisos 
                se compartirá información relevante a la semana o mes, en estos pueden dar avisos generales o avisos específicos a un rol de usuario,
                también podrá compartir imágenes y/o documentos para que todos lo visualicen y/o puedan descargarlo. La sección de Avisos también contará con
                una sección para agregar imágenes similares a los GIFs, las cuáles solo el editor del aviso podrá agregar para una mejor comunicación visual y 
                un mejor diseño de los mismos.
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