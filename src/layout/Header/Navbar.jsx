import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='navbar_logo'>
            <img src={logo} alt="logo-kasa" />
        </div>
      </NavLink>
      <div>
        <NavLink to="/" >Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  )
}

export default Navbar