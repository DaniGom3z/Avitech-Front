import React, { useEffect, useState } from 'react'
import InfoPollos from '../../assets/Banner pollos.png'
import '../../App.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Info = () => {

  const text = ['Efectividad', 'Perdidas', 'Ganancias']
  const [currentInterval, setCurrentInterval] = useState(0)
 
 
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentInterval(prevIndex =>(prevIndex + 1)% text.length)
    },3000)


  },[text.length])
 


  return (
    <>
    <div className='w-full lg:h-1/5 flex relative h-2/6 mt-44'>
    <div className='h-full relative'>
      <div className='bg-black bg-opacity-60 absolute w-full h-full z-10'></div>
      <img className='min-h-96 h-full object-cover object-left' src={InfoPollos} alt="" />
    </div>
    <div className='w-full lg:flex-row   flex-col-reverse  flex absolute h-full justify-around '>
    
      <div className='lg:w-1/3 w-full justify-center h-full flex items-center lg:items-center lg:justify-center z-10'>
      <motion.div
    initial={{x:-75}}
    whileInView={{x:0}}
      >
          <div className='w-52 h-10 flex items-center justify-center bg-white'>
            <h2   className='text-black  biryaniRegular text-xl'>{text[currentInterval]}</h2></div>
      </motion.div>
      </div>
      <div className='lg:w-2/3 h-full flex z-10 flex-col relative items-end lg:pr-56 pr-10 pl-10 py-14'>
        <h2 className='bungee text-white '>Avitech<span className='bg-white w-16 h-1 block mx-auto'></span></h2>
        <p className='biryaniRegular text-xs  text-end pt-5 text-white'>Avitech es una aplicación para el cuidado de los pollos con una eficacia del 
          90%, optimizando tiempo, aumentando ganancias y 
          reduciendo pérdidas, lo que garantiza resultados confiables.
          Avitech automatiza tareas esenciales en el cuidado de los pollos, 
          como limpieza del hábitat, llenado automático de aserrín,
          agua y comida,  y monitoreo constante de la salud de las aves. 
          Con su tecnología avanzada, permite a los granjeros detectar y 
          solucionar problemas de manera proactiva, asegurando un 
          ambiente óptimo para el crecimiento y bienestar de los pollos.</p>
          <Link to='/iniciar' className='py-2 biryaniRegular text-sm mt-2 px-2 rounded textParrafColor bg-white'>Probar Avitech</Link>
      </div>
    </div>
    </div>
  </>
  ) 
}

export default Info