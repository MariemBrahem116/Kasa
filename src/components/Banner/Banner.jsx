import React from 'react'
import "./Banner.scss"
import banner from '../../assets/banner.png'

function Banner() {
  return (
    <div className='banner'>
      <img src={banner} alt="logo"/>
      <div className='BannerImage'></div>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner