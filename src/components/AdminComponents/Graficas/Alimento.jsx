import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Alimento = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const refFormulario = useRef();

  useEffect(() => {
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

  
    const nuevoAlimento = {
      nombre,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad),
    };

    try {
     
      const response = await axios.post('http://localhost:4000/alimentos', nuevoAlimento, {
        headers: {
          'Token': `${token}`,
          'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        },
      });

      
      setNombre('');
      setPrecio('');
      setCantidad('');
      setMostrarFormulario(false);

      
      console.log('Alimento agregado:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
     
    }
  };

  return (
    <div className='shadowP flex flex-col justify-end w-1/3 h-3/4 rounded-xl'>
      
      <button
        className={`bg-black w-full text-white py-2 duration-200 rounded-xl ${mostrarFormulario ? 'h-full' : 'h-12'}`}
        onClick={toggleFormulario}
      >
        Agregar alimento
      </button>

      {mostrarFormulario && (
        <div ref={refFormulario} className='bg-white border absolute w-1/ border-gray-300 p-4 rounded-b-xl mt-1'>
          <div className="flex justify-between mb-2">
            <h2 className='text-lg font-bold'>Agregar Alimento</h2>
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
                Nombre
              </label>
              <input
                type='text'
                id='nombre'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='precio' className='block text-sm font-medium text-gray-700'>
                Precio
              </label>
              <input
                type='number'
                id='precio'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='cantidad' className='block text-sm font-medium text-gray-700'>
                Cantidad
              </label>
              <input
                type='number'
                id='cantidad'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                required
              />
            </div>
            <button
              type='submit'
              className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
            >
              Agregar Alimento
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Alimento;
