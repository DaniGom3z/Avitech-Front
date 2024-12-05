import React from 'react'
import Instagram from '../../assets/instagram.png'
import Ubicacion from '../../assets/marcador-de-posicion.png'
const Fotter = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-between  flex-col items-center '>
    <div className='h-1/2 w-1/2 flex items-center my-auto gap-5 flex-col justify-center'>
        <h3 className='biryaniRegular text-lg textParrafColor'>Visitanos<span className='bg-black h-0.5 w-16 block mx-auto'></span></h3>
        <div className='flex flex-col justify-between text-center items-center h-1/2 text-xs lg:text-sm  text-neutral-800'>
        <div>
        <h3>Suchiapa</h3>
        <h3>Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500</h3>
        <h3>Col. Las Brisas; Suchiapa, Chiapas. CP.29150. </h3>
        <h3>Suchiapa, Chiapas.</h3>
        <h2>2024</h2>
        </div>
        <div className='flex flex-row gap-2'>
        <img className='h-8' src={Instagram} alt="instagram" />
        <img className='h-8' src={Ubicacion} alt="ubicacion" />
        </div>
        </div>
    </div>
    <div className='w-full h-16 flex items-center justify-center flex-col flex-wrap bg-black'>
        <h2 className='text-neutral-600 text-sm'>Proyecto Desarrollado por:</h2>
        <h3 className='text-neutral-600 text-sm'>Ary Coronado | Daniel Gomez | Carlos Ruiz | Vinicio Esquinca</h3>
    </div>
    </div>
    </>
  )
}

export default Fotter