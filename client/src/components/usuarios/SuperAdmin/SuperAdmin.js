import React from 'react';
import Layout from '../../layout/Layout';
import InicioSA from './InicioSA';
import ClientesSA from './ClientesSA';
import UsuariosSA from './UsuariosSA';
import CalendarioSA from './CalendarioSA';
import AvisosSA from './AvisosSA';

const SuperAdmin = () => {

  const NavBarContenidoSA = {
    listaMenu: {'Inicio': 0, 'Clientes': 1, 'Usuarios': 2, 'Calendario': 3, 'Avisos': 4}
  }

    return (
        <Layout 
          NavBarContenido={NavBarContenidoSA}
          InicioContenido={<InicioSA />}
          ClientesContenido={<ClientesSA />}
          UsuariosContenido={<UsuariosSA />}
          CalendarioContenido={<CalendarioSA />}
          AvisosContenido={<AvisosSA />}
        />
      );
}
 
export default SuperAdmin;