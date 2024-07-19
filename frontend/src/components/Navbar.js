import React from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';
import './Navbar.css';  // Importa el archivo CSS

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    history.push('/login');
  };

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
