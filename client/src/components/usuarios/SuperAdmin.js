import React from 'react';
import Layout from '../layout/Layout';


const SuperAdmin = () => {

  const LayoutProp = {
    firstName: "Lindsay",
    lastName: "Criswell",
    city: "NYC",
    listaMenu: {'Inicio': 1, 'Usuario': 2, 'Cliente': 3}
  }

    return (
        <Layout 
          LayoutProp={LayoutProp}
        />
      );
}
 
export default SuperAdmin;