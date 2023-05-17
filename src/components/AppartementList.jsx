import React from 'react'
import "./AppartementList.css"
import Appartement from '../components/Appartement'

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