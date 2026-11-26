import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Programs/>
      <Contact/>
    </div>
  )
}

export default App
