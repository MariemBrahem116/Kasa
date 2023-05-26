import React, { useEffect, useState } from 'react'
import "./AppartementList.scss"
import AppartementCard from './AppartementCard.jsx'




function AppartementList() {

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
          <AppartementCard  title={appartement.title} imageUrl={appartement.cover} id={appartement.id}/>

      ))}
    </div>
  )
}

export default AppartementList