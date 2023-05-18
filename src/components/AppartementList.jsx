import React from 'react'
import "./AppartementList.scss"
import Appartement from './Appartement.jsx'

function AppartementList() {
  return (
    <div className='appartement-grid'>
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
        <Appartement />
    </div>
  )
}

export default AppartementList