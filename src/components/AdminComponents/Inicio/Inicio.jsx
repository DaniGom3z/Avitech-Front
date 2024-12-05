import React from 'react';
import GraficaFood from './GraficaFood';

import GraficaAliDaily from './GraficaAliDaily'
import GraficaWatDaily from './GraficaWatDaily'

const Inicio = () => {
  return (
    <>
      <div className="h-full overflow-hidden bg-white grid gap-4 grid-rows-2 p-2">
        {/* Primera fila: una gráfica que ocupa toda la fila */}
        <div className="grafica1 shadowP h-full rounded-xl w-full">
          <GraficaFood />
        </div>
        
        {/* Segunda fila: dos gráficas lado a lado */}
        <div className="grafica2 flex shadowP h-full rounded-xl gap-4">
          <div className="flex-1">
            <GraficaAliDaily />
          </div>
          <div className="flex-1">
            <GraficaWatDaily />
          </div>
        </div>
      </div>
    </>
  );
};


export default Inicio;
