import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

const PesosPollos = () => {
  const [peso, setPeso] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/pesos', {
          headers: {
            'Token': `${token}`,
            'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
          },
        });

        setPeso(response.data.pesos);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:4000/pesos/${id}`, {
        headers: {
          'Token': `${token}`,
          'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        }
      });
      setPeso(peso.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item: ", error);
      setError('Error al eliminar el dato. Por favor, intente nuevamente.');
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <ReactLoading type='bars' color='#000' height={50} width={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='h-full p-2 w-full'>
      <h2 className='font-semibold'>Media de Pesos</h2>
      <div className='overflow-y-scroll h-5/6'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 bg-yellow-400 rounded-l-xl text-left'>Peso</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Fecha</th>
              <th className='py-2 px-4 bg-yellow-400 rounded-r-xl text-left'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peso.map((data) => (
              <tr key={data.id} className='border-b'>
                <td className='py-2 px-4'>{data.peso} kg</td>
                <td className='py-2 px-4'>{data.fecha}</td>
                <td className='py-2 px-4'>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className='bg-white border text-black px-2 py-1 rounded'
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PesosPollos;
