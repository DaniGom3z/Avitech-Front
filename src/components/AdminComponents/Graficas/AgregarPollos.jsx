import React, { useState, useEffect } from 'react';
import Agregar from './Agregar';
import MostrarMedia from './MostrarMedia';

const AgregarPollos = () => {
  const [pesos, setPesos] = useState([]);

  // Recuperar pesos de localStorage al cargar el componente
  useEffect(() => {
    const pesosGuardados = JSON.parse(localStorage.getItem('pesos'));
    if (pesosGuardados) {
      setPesos(pesosGuardados);
    }
  }, []);

  // Guardar pesos en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem('pesos', JSON.stringify(pesos));
  }, [pesos]);

  const agregarPeso = (nuevoPeso) => {
    setPesos([...pesos, nuevoPeso]);
  };

  const calcularMedia = () => {
    if (pesos.length === 0) return 0;
    const suma = pesos.reduce((acc, peso) => acc + peso, 0);
    return suma / pesos.length;
  };

  return (
    <div className="container justify-between items-center flex mx-auto p-4">
      <Agregar agregarPeso={agregarPeso} />
      <div className="mt-8 flex-col flex items-center justify-start h-full w-full">
        <h2 className="text-md mb-4">Tabla de Pesos</h2>
        <div className="overflow-y-auto w-full flex flex-col items-center max-h-32">
          <table className="w-2/3 bg-white">
            <thead>
              <tr>
                <th className="py-2 w-full h-2 bg-yellow-400 rounded-xl">Peso (kg)</th>
              </tr>
            </thead>
            <tbody className='overflo-y-auto'>
              {pesos.map((peso, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{peso.toFixed(2)} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MostrarMedia media={calcularMedia()} />
    </div>
  );
};

export default AgregarPollos;
