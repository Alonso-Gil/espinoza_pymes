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
import { PublicRoute } from './PublicRoute';
import { ProcesosRoute } from './ProcesosRoute';
import PageNotFound from '../components/usuarios/PageNotFound';
import SpinnerKit from '../components/reutilizables/SpinnerKit';

const AppRouter = () => {

    const { usuario, isLoading } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        // Obtener el usuario del token, si es que hay
        dispatch(renovarToken());
    }, [dispatch])

    if (isLoading) { return <SpinnerKit /> }

    return ( 
        // Creando las rutas
    <Router>
        <Switch>

        {/* Iniciar sesión */}
        <PublicRoute exact path="/" isAuthenticated={!!usuario} userId={usuario?.idTipo} component={Login} />
        <Route exact path="/nuevaCuenta" component={NuevaCuenta} />

        {/* Usuarios */}
        <SuperAdminRoute exact path="/superAdmin" userId={usuario?.idTipo} >
            <SuperAdmin />
        </SuperAdminRoute>

        <ProcesosRoute exact path="/procesos" userId={usuario?.idTipo}>
            <Procesos />
        </ProcesosRoute>

        <Route exact path="/manager" component={Manager} />
        <Route exact path="/agenteDifusor" component={AgenteDifusor} />
        <Route exact path="/recepcion" component={Recepcion} />
        <Route exact path="/agenteCerrador" component={AgenteCerrador} />
        <Route exact path="/finanzas" component={Finanzas} />

        {/* 404 Not Found */}
        <Route component={PageNotFound}/> 
        

        </Switch>
    </Router>
     );
}
 
export default AppRouter;