import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Peso = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [pollosPesados, setPollosPesados] = useState(0);
  const [peso, setPeso] = useState(0);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const refFormulario = useRef();

  useEffect(() => {
    const numeroPollos = JSON.parse(localStorage.getItem('pesos')) || [];
    const medias = JSON.parse(localStorage.getItem('media')) || 0;
    
    setPollosPesados(numeroPollos.length); // Total de pollos pesados
    setPeso(medias); // Media de pesos

    const handleClickOutside = (event) => {
      if (refFormulario.current && !refFormulario.current.contains(event.target)) {
        setMostrarFormulario(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleClose = () => {
    setMostrarFormulario(false); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const nuevosPesos = {
      peso: parseFloat(peso), // Asegúrate de que sea un número
      pollosPesados: parseInt(pollosPesados, 10), // Asegúrate de que sea un número entero
    };

    try {
      const response = await axios.post('http://localhost:4000/pesos', nuevosPesos, {
        headers: {
          'Token': token,
          'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        },
      });

      setMensaje({ tipo: 'exito', texto: 'Peso agregado exitosamente.' });
      setMostrarFormulario(false);
      // Opcional: manejar la respuesta de la API
      console.log('Peso agregado:', response.data);
    } catch (error) {
      setMensaje({ tipo: 'error', texto: error.response ? error.response.data.message : 'Error al agregar peso.' });
      console.error('Error:', error.response ? error.response.data.message : error.message);
      // Manejar errores como desees
    }
  };

  return (
    <div className='shadowP flex flex-col justify-end w-1/3 h-3/4 rounded-xl'>
      <div className='h-full flex flex-col justify-start p-2 items-center relative'>
        <h2 className='text-lg font-bold mb-4'>Número de Pollos Pesados: {pollosPesados || 0}</h2>
        <i>Media: {peso}</i>
        <button
          className={`bg-black text-white absolute bottom-0 w-full py-2 duration-200 rounded-xl ${mostrarFormulario ? 'h-full' : 'h-12'}`}
          onClick={toggleFormulario}
        >
          Agregar peso
        </button>
      </div>

      {mensaje.texto && (
        <div className={`p-4 ${mensaje.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} border border-${mensaje.tipo === 'exito' ? 'green' : 'red'}-300 rounded-md`}>
          {mensaje.texto}
        </div>
      )}

      {mostrarFormulario && (
        <div ref={refFormulario} className='bg-white border absolute w-1/ border-gray-300 p-4 rounded-b-xl mt-1'>
          <div className="flex justify-between mb-2">
            <h2 className='text-lg font-bold'>Agregar Peso</h2>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='nombre' className='block text-sm font-medium text-gray-700'>
                Media
              </label>
              <input
                type='number'
                id='nombre'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={pollosPesados}
                onChange={(e) => setPollosPesados(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='precio' className='block text-sm font-medium text-gray-700'>
                Pollos Pesado
              </label>
              <input
                type='number'
                id='precio'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>
            <button
              type='submit'
              className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
            >
              Agregar Peso
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Peso;
