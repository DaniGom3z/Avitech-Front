import React from 'react'
import Card from './Card'
import Eficiencia from '../../assets/Eficiencia pollos.png'
import Bienestar from '../../assets/Bienestar pollos.png'
import Monitoreo from '../../assets/Monitoreo pollos.png'
const Cards = () => {
  return (
    <>
    <div className='flex gap-5 flex-wrap items-center justify-center'>

    <Card   text="Automatizar tareas repetitivas
                para permitir a los avicultores 
                centrarse en aspectos más
                estratégicos de la producción."
            img={Eficiencia}
            alt='Eficiencia'
            titulo="Mejorar la Eficiencia"
                />

    <Card text="Crear un entorno óptimo para el
                desarrollo de los pollos, reduciendo
                el estrés y mejorando su salud."
                img={Bienestar}
                alt='Bienestar'
                titulo="Mejorar el Bienestar"
                />

    <Card text="Proveer datos en tiempo real 
                sobre la condición
                y necesidades de los pollos, permitiendo una
                intervención rápida y precisa
                cuando sea necesario."
                img={Monitoreo}
                alt='Monitoreo'
                titulo='Facilitar el Monitoreo'
                
                />
    
    </div>
    </>
  )
}

export default Cards