import React from 'react'
import "./Banner.scss"
import home from '../../assets/home.png'

function Banner() {
  return (
    <div className='banner'>
      <img src={home} alt="logo"/>
      <div className='BannerImage'></div>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner