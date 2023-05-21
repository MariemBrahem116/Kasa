import React from 'react'
import "./Appartement.scss"
import { Link } from 'react-router-dom'

function Appartement() {
  return (
    <div className='appartement'><Link to={"/flat"}><div className='appartement_titre'>Titre de la location</div></Link></div>
  )
}

export default Appartement