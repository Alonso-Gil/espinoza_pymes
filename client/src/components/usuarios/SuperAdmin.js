import React from 'react';
import Layout from '../layout/Layout';
import MyProp from './MyProp';


const SuperAdmin = () => {

  const LayoutProp = {
    firstName: "Lindsay",
    lastName: "Criswell",
    city: "NYC",
    listaMenu: {'Inicio': 1, 'Usuario': 2, 'Cliente': 3},
  }

    return (
        <Layout 
          LayoutProp={LayoutProp}
          MyProp={<MyProp />}
        />
      );
}
 
export default SuperAdmin;