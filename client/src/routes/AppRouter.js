import React, { useEffect } from 'react';

// Imports de las vistas
import Login from '../components/auth/Login';
import NuevaCuenta from '../components/auth/NuevaCuenta';
import SuperAdmin from '../components/usuarios/SuperAdmin/SuperAdmin';
import Manager from '../components/usuarios/Manager';
import AgenteDifusor from '../components/usuarios/AgenteDifusor';
import Recepcion from '../components/usuarios/Recepcion';
import Procesos from '../components/usuarios/Procesos/Procesos';
import AgenteCerrador from '../components/usuarios/AgenteCerrador';
import Finanzas from '../components/usuarios/Finanzas';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SuperAdminRoute } from './SuperAdminRoute';
import { renovarToken } from '../redux/actions/auth';
// import { ProcesosRoute } from './ProcesosRoute';

const AppRouter = () => {

    const { usuario, isLoading } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        // Obtener el usuario del token, si es que hay
        dispatch(renovarToken());
    }, [dispatch])

    // console.log(usuario); //si tienes dudas de que pedo has el console.log

    if (isLoading) {
        return <h1>Espere...</h1>
    }

    return ( 
        // Creando las rutas
    <Router>
        <Switch>

        {/* Iniciar sesión */}
        <Route exact path="/" component={Login} />
        <Route exact path="/nuevaCuenta" component={NuevaCuenta} />

        {/* Usuarios */}
        {/* <Route exact path="/superAdmin" component={SuperAdmin} /> */}
        <SuperAdminRoute exact path="/superAdmin" userId={usuario?.idTipo} >
            <SuperAdmin />
        </SuperAdminRoute>
        {/* <ProcesosRoute exact path="/procesos" >
            <Procesos />
        </ProcesosRoute> */} 
        <Route exact path="/procesos" component={Procesos} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path="/agenteDifusor" component={AgenteDifusor} />
        <Route exact path="/recepcion" component={Recepcion} />
        <Route exact path="/agenteCerrador" component={AgenteCerrador} />
        <Route exact path="/finanzas" component={Finanzas} />

        </Switch>
    </Router>
     );
}
 
export default AppRouter;