import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar_logo'>
            <img src="logo.png" alt="logo-kasa" />
        </div>
        <Link to="/">Accueil</Link>
        <Link to="/about">
            <div>A propos</div>
        </Link>

    </nav>
  )
}

export default Navbar