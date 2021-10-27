import React from 'react';

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

const AppRouter = () => {
    return ( 
        // Creando las rutas
    <Router>
        <Switch>

        {/* Iniciar sésion */}
        <Route exact path="/" component={Login} />
        <Route exact path="/nuevaCuenta" component={NuevaCuenta} />

        {/* Usuarios */}
        <Route exact path="/superAdmin" component={SuperAdmin} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path="/agenteDifusor" component={AgenteDifusor} />
        <Route exact path="/recepcion" component={Recepcion} />
        <Route exact path="/procesos" component={Procesos} />
        <Route exact path="/agenteCerrador" component={AgenteCerrador} />
        <Route exact path="/finanzas" component={Finanzas} />

        </Switch>
    </Router>
     );
}
 
export default AppRouter;