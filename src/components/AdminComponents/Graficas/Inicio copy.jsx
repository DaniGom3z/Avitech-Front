import React from 'react';

import AgregarPollos from './AgregarPollos';
const Inicio = () => {
  return (
    <>
      <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='pagegrafica1  shadowP h-full rounded-xl'>
          
        </div>
        <div className='pagegrafica2 shadowP h-full rounded-xl'>
        
        </div>
        <div className='pagegrafica3 overflow-y-auto flex-col p-4 flex shadowP h-full rounded-xl'>
          <AgregarPollos/>
        </div>
      </div>
    </>
  );
}

export default Inicio;
