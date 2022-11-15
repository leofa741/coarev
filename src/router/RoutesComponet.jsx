import React from 'react'
import {Routes, Route, BrowserRouter,NavLink } from 'react-router-dom'
import { ContactComponent, HomeComponent, PortafolioComponent } from '../components'
import { FooterComponent, NavBar } from '../layout'
import { HeaderComponent } from '../layout/header/HeaderComponent'

export const RoutesComponet = () => {
  return (
    <BrowserRouter>

    {/* header y navbar */}
    <NavBar />
    <HeaderComponent  />

    {/* contenido */}
    <Routes>
        <Route path="/"  element={<HomeComponent />} />
        <Route path="/home"  element={<HomeComponent />} />
        <Route path="/portfolio" element={<PortafolioComponent />} />
        <Route path="/contacto" element={<ContactComponent />} />

        <Route path="*" element={<HomeComponent />} />


    </Routes>

    {/* footer */}
<FooterComponent />

    </BrowserRouter>
    
   
  )
}
