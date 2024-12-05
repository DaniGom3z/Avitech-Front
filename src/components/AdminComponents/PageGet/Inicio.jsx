import React from 'react'
import PesosPollos from './PesosPollos'
import Vacuna from './Vacuna'
import Alimento from './Alimento'
import Ganancias from './Ganancias'

const Inicio = () => {
  return (
    <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='pageGet1 p-4 shadowP h-full rounded-xl'>
          <PesosPollos />
        </div>
        <div className='pageGet p-4  shadowP h-full rounded-xl'>
          <Vacuna />
        </div>
        <div className='pageGet3 flex-col p-4 flex shadowP h-full rounded-xl'>
            <Alimento/>
        </div>
        <div className='pageGet4 flex shadowP h-full rounded-xl p4 '>
              <Ganancias/>
        </div>
      </div>
  )
}

export default Inicio