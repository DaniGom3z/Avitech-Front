import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Alimento = () => {
  const [alimento, setAlimento] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ id: '', fechaInicial: '', fechaFinal: '' });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:4000/alimentos', {
          headers: {
            'Token': `${token}`,
            'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
          }
        });
        setAlimento(response.data.alimentos);
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
      await axios.delete(`http://localhost:4000/alimentos/${id}`, {
        headers: {
          'Token': `${token}`,
          'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        }
      });
      setAlimento(alimento.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleEdit = (item) => {
    setEditData({
      id: item.id,
      fechaInicial: item.fechaInicial ? item.fechaInicial.split('T')[0] : '',
      fechaFinal: item.fechaFinal ? item.fechaFinal.split('T')[0] : ''
    });
    setIsEditing(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:4000/alimentos/${editData.id}`, {
        fechaInicial: editData.fechaInicial,
        fechaFinal: editData.fechaFinal
      }, {
        headers: {
          'Token': `${token}`,
          'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
        }
      });
      setAlimento(alimento.map(item => (item.id === editData.id ? { ...item, fechaInicial: editData.fechaInicial, fechaFinal: editData.fechaFinal } : item)));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  if (loading) {
    return <div className='flex justify-center items-center h-full'>
      <ReactLoading type='bars' color='#000' height={50} width={50} />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='h-full p-2 w-full'>
      <h2 className='font-semibold'>Alimentos</h2>
      <div className='overflow-y-scroll h-5/6'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 bg-yellow-400 rounded-l-xl text-left'>id</th>
              <th className='py-2 px-4 bg-yellow-400  text-left'>Nombre</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Precio</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Cantidad</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Fecha Inicial</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Fecha Final</th>
              <th className='py-2 px-4 bg-yellow-400 rounded-r-xl text-left'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alimento.map((data) => (
              <tr key={data.id} className='border-b'>
                <td className='py-2 px-4'>{data.id}</td>
                <td className='py-2 px-4'>{data.nombre}</td>
                <td className='py-2 px-4'>{data.precio} $</td>
                <td className='py-2 px-4'>{data.cantidad}</td>
                <td className='py-2 px-4'>{data.fechaInicial}</td>
                <td className='py-2 px-4'>{data.fechaFinal}</td>
                <td className='py-2 px-4'>
                  <button onClick={() => handleEdit(data)} className='bg-black text-white px-2 py-1 rounded mr-2'>Editar</button>
                  <button onClick={() => handleDelete(data.id)} className='bg-white border  text-black px-2 py-1 rounded'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Editar Fechas</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Fecha Inicial</label>
                <input
                  type="date"
                  value={editData.fechaInicial}
                  onChange={(e) => setEditData({ ...editData, fechaInicial: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Fecha Final</label>
                <input
                  type="date"
                  value={editData.fechaFinal}
                  onChange={(e) => setEditData({ ...editData, fechaFinal: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded mr-2">Cancelar</button>
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alimento;
