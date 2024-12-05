import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Inicio from './Inicio'

const Dahsboard = () => {
    const [show, setShow] = useState(true);
    const handleAnimation = () => {
        setShow(!show);
      };
      

  return (
    <>
        <div className='h-screen  w-full bg-neutral-50 grid grid-cols-[auto,6fr]'>
        <div className={`h-full py-2 pl-2 posicion duration-500 ease-in-out transition-all ${show ? 'sidebar' : 'sidebar2'}`}>
                 <Sidebar show={show} handleAnimation={handleAnimation}/>    
        </div>
            <div className='h-full p-2  w-full posicion2'> 
                  <Inicio/> 
            </div>
        </div>
    </>
  )
}

export default Dahsboard