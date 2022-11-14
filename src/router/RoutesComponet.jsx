import React from 'react'
import {Routes, Route, BrowserRouter,NavLink } from 'react-router-dom'
import { ContactComponent, HomeComponent, PortafolioComponent } from '../components'

export const RoutesComponet = () => {
  return (
    <BrowserRouter>

    {/* header y navbar */}

    {/* contenido */}
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/portafolio" element={<PortafolioComponent />} />
        <Route path="/contacto" element={<ContactComponent />} />

        <Route path="*" element={<HomeComponent />} />


    </Routes>

    {/* footer */}


    </BrowserRouter>
    
   
  )
}
