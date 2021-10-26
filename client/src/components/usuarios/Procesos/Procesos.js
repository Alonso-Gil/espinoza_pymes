import React from 'react';
import Layout from '../../layout/Layout';
import InicioP from './InicioP';
import ClientesP from './ClientesP';
import CalendarioP from './CalendarioP';
import AvisosP from './AvisosP';

const Procesos = () => {

    const NavBarContenidoP = {
        listaMenu: {'Inicio': 0, 'Clientes': 1, 'Calendario': 2, 'Avisos': 3}
      }
    
        return (
            <Layout 
                NavBarContenido={NavBarContenidoP}
                InicioContenido={<InicioP />}
                ClientesContenido={<ClientesP />}
                CalendarioContenido={<CalendarioP />}
                AvisosContenido={<AvisosP />}
            />
          );
    }
 
export default Procesos;