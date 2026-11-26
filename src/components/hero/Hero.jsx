import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>WDW Trip 2025</h1>
        <p>Lorem ipsum dolor set amit.</p>
        <button className='btn'>Explore More <img src={right_arrow} alt='right arrow'/></button>
      </div>
    </div>
  )
}

export default Hero
