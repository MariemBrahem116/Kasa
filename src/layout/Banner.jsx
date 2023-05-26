import React from 'react'
import "./Banner.scss"

function Banner() {
  return (
    <div className='banner'>
      <img src='banner.png' alt="logo"/>
      <div className='BannerImage'></div>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner