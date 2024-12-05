import React from 'react'
import Page from './components/LandingPage/page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IniciarSesion from './components/SignIN/IniciarSesion'
import Dahsboard from './components/AdminComponents/Inicio/Dahsboard'
import PageGet from './components/AdminComponents/PageGet/PageGet'
import PageGraf from './components/AdminComponents/Graficas/PageGraf'
const App = () => {
  return (
    <>
    

    <Router>
      <Routes>
        <Route path='/' element={<Page/>} />
        <Route path='/iniciar' element={<IniciarSesion/>}/>
        <Route path='/dashboard' element={<Dahsboard/>}/>
        <Route path='/inventario' element={<PageGet/>}/>
        <Route path='/peso' element={<PageGraf/>}/>
      </Routes>
    </Router>
 
    </>
  )
}

export default App