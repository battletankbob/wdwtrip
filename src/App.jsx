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
import Mkfountain from './components/photo/mk-photos/Mkfountain'
import Mkskipper from './components/photo/mk-photos/Mk-skipper'
import Mkgate from './components/photo/mk-photos/Mkgate'



const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/wdwtrip/" element={<Programs />} />
        {/* MK */}
        <Route path="/wdwtrip/mk-fountain" element={<Mkfountain />} />
        <Route path="/wdwtrip/mk-skipper" element={<Mkskipper />} />
        <Route path="/wdwtrip/mk-gate" element={<Mkgate />} />
      </Routes>
      <Footer/>
    </div>
  



  );
};

export default App
