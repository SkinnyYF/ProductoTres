// src/pages/postres.js
import React from 'react';

const postres = [
  { id: 1, nombre: 'Brownie', precio: '$2.50' },
  { id: 2, nombre: 'Helado', precio: '$3.00' },
  { id: 3, nombre: 'Tarta de Queso', precio: '$3.50' },
];

const Postres = () => {
  return (
    <div>
      <h1>Catálogo de Postres</h1>
      <ul>
        {postres.map(postre => (
          <li key={postre.id}>
            {postre.nombre} - {postre.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Postres;
