// src/pages/acompanamientos.js
import React from 'react';

const acompanamientos = [
  { id: 1, nombre: 'Papas Fritas', precio: '$2.00' },
  { id: 2, nombre: 'Aros de Cebolla', precio: '$2.50' },
  { id: 3, nombre: 'Ensalada', precio: '$3.00' },
];

const Acompanamientos = () => {
  return (
    <div>
      <h1>Catálogo de Acompañamientos</h1>
      <ul>
        {acompanamientos.map(acompani => (
          <li key={acompani.id}>
            {acompani.nombre} - {acompani.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Acompanamientos;
