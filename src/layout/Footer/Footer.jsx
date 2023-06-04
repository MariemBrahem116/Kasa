import React from 'react'
import "./Footer.scss"
import logoFooter from '../../assets/logoFooter.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logoFooter}alt="logo"/>
        </div>
        <div className='footer_text'>
        © 2022 Kasa. All rigths reserved
        </div>
    </div>
  )
}

export default Footer