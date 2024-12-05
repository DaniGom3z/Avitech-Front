import React, { useState } from 'react';
import axios from 'axios';

const Ganancias = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setId(e.target.value);
  };

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/ganancias/${id}`, {
        headers: {
          Token: token,
          apikey: 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        }
      });
      setData(response.data);
      setError(null);
      
    } catch (error) {
      setError('Error al obtener los datos. Por favor, intente nuevamente.');
      setData(null);
      
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg ">
      <h1 className="text-lg font-semibold mb-4 text-center">Ganancias de Peso del Pollo</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="id">
            Ingresar ID del Alimento:
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-600"
        >
          Buscar
        </button>
      </form>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {data && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Resultados</h2>
        
          <p className="text-yellow-400"><span className="font-bold">!{data.message}¡</span></p>
          <p className="text-gray-700"><span className="font-bold">Alimento:</span> {data.nombreAlimento}</p>
          <p className="text-gray-700"><span className="font-bold">Ganancia de Peso:</span> {data.totalGananciaPeso}</p>
        </div>
      )}
    </div>
  );
};

export default Ganancias;
