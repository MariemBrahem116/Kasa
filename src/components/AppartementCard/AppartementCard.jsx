import React, { useEffect, useState } from 'react'
import "./AppartementCard.scss"
import Cards from '../Cards/Cards.jsx'

function AppartementCard() {

  const [appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements,[]);

  function fetchAppartements(){
    fetch("db.json")
    .then(Response => (Response).json())
    .then(Response => setAppartements(Response))
    .catch(console.error);
  }

  return (
    <div className='appartement-grid'>
      {
        appartements.map((appartement) => (
          <Cards key= {appartement.id} title={appartement.title} imageUrl={appartement.cover} id={appartement.id}/>

      ))}
    </div>
  )
}

export default AppartementCard