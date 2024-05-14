import React from 'react'
import './Navbar.css'
// import navlogo from '../Assets/nav-logo.svg'
import admin from '../Assets/admin.jpg'
import logo from '../Assets/logo3.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <p className='nav-text'>Garments</p>
      <img src={admin} className='nav-logo' alt="" />
      <p className='nav-profile'> ADMIN</p> 
    </div>
  )
}

export default Navbar
