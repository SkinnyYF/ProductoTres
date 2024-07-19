import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';  // Importa el Navbar

function App() {
  return (
    <Router>
      <div>
        <Navbar />  {/* Incluye el Navbar aquí */}
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* Añade más rutas privadas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
