import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Contact from './components/contact/Contact'
import Title from './components/title/Title'
import Footer from './components/footer/Footer'
import Epcot from './components/programs/Epcot'
import Photo from './components/photo/Photo'
import PhotoB from './components/photo/PhotoB'
import MK from './components/programs/MK'

const App = () => {

  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Title title="Magic Kingdom Park" subTitle="Friday - January 24th, 2025"/>
      <Programs/>
      <Title title="Epcot" subTitle="Monday - January 27th, 2025"/>
      <Epcot/>
      <MK/>
      {/* <Photo/> */}
      <PhotoB/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
};

export default App
