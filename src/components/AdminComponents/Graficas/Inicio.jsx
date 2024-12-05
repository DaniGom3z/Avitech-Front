import React from 'react';
import Alimento from './Alimento'
import Vacuna from './Vacuna'
import Peso from './Peso'
import AgregarPollos from './AgregarPollos';
const Inicio = () => {
  return (
    <>
      <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='pagegrafica1 gap-5 p-4 flex shadowP h-full rounded-xl'>
            <Alimento/>
            <Peso/>
            <Vacuna/>
        </div>
        <div className='pagegrafica3 overflow-y-auto flex-col p-4 flex shadowP h-full rounded-xl'>
          <AgregarPollos/>
        </div>
      </div>
    </>
  );
}

export default Inicio;
