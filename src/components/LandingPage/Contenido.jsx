import React from 'react'
import Cards from './Cards'

const Contenido = () => {
  return (
    <>
    <div>
        <main>
            <h2 className='text-center text-lg font-extrabold biryani'>Objetivos<span className='block mx-auto h-1 w-20 bgcolor'></span></h2>
            <h3 className='text-xs textParrafColor text-center py-2'>Objetivos generales del proyecto</h3>
            <div className='py-5'>
                <Cards/>
            </div>
        </main>
    </div>
    
    </>
  )
}

export default Contenido