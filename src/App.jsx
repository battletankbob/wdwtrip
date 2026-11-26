import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import Footer from './components/footer/Footer'
import Epcot from './components/programs/Epcot'
import PhotoB from './components/photo/PhotoB'
import MK from './components/programs/MK'

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Mkpage from './pages/Mkpage'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import PhotoMk from './components/photo/PhotoMk'



const App = () => {

  return (
    <div>
      {/* <Navbar/>  */}
      {/* <Hero/> */}
      {/* <Title title="Magic Kingdom Park" subTitle="Friday - January 24th, 2025"/> */}
      {/* <Programs/> */}
      {/* <Title title="Epcot" subTitle="Monday - January 27th, 2025"/>
      <Epcot/>
      <MK/> */}
      {/* <PhotoMk/> */}
      <Routes>
        <Route path="/wdwtrip/" element={<Programs />} />
        <Route path="/wdwtrip/mk-fountain" element={<Mkpage />} />
        <Route path="/wdwtrip/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </div>



  );
};

export default App
