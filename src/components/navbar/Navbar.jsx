import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 400 ? setSticky(true) : setSticky(false);
      })
  },[]);
  

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className='logo' /></Link>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Disney Springs</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Magic Kingdom</Link></li>
            <li><Link to='epcot' smooth={true} offset={-260} duration={500}>Epcot</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Hollywood Studios</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Animal Kingdom</Link></li>
            <li><Link to='hero' smooth={true} offset={0} duration={500}><button className='btn'>Polynesian Resort</button></Link></li>
        </ul>
        <img tabIndex="0" src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )

}

export default Navbar
