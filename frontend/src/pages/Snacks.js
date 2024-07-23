// src/pages/snacks.js
import React from 'react';

const snacks = [
  { id: 1, nombre: 'Chips', precio: '$1.00' },
  { id: 2, nombre: 'Chocolate', precio: '$1.50' },
  { id: 3, nombre: 'Galletas', precio: '$0.75' },
];

const Snacks = () => {
  return (
    <div>
      <h1>Catálogo de Snacks</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            {snack.nombre} - {snack.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Snacks;
