import React, { useState } from 'react';

const AgregarPollos = ({ agregarPeso }) => {
  const [peso, setPeso] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (peso !== '') {
      agregarPeso(parseFloat(peso));
    
      setPeso('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-md mb-4">Agregar Peso de Pollos</h2>
      <form onSubmit={manejarSubmit} className="flex flex-col space-y-4">
        <input
          type="number"
          step="0.01"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ingrese el peso en kg"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-black text-white p-2 rounded-xl">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AgregarPollos;
