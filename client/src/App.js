import React from 'react';

// Imports de las vistas
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import SuperAdmin from './components/usuarios/SuperAdmin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    // Creando las rutas
    <Router>
      <Switch>

        {/* Iniciar sésion */}
        <Route exact path="/" component={Login} />
        <Route exact path="/nuevaCuenta" component={NuevaCuenta} />

        {/* Usuarios */}
        <Route exact path="/superAdmin" component={SuperAdmin} />
        {/* <Route exact path="/manager" component={manager} />
        <Route exact path="/agenteDifusor" component={agenteDifusor} />
        <Route exact path="/recepcion" component={recepcion} />
        <Route exact path="/procesos" component={procesos} />
        <Route exact path="/agenteCerrador" component={agenteCerrador} />
        <Route exact path="/finanzas" component={finanzas} />
        <Route exact path="/procesos" component={procesos} /> */}

      </Switch>
    </Router>
  );
}

export default App;
