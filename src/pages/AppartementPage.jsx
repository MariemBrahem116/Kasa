import React, { useEffect, useState } from 'react'
import "../pages/AppartementPage.scss"
import AppartementDescription from '../components/AppartementDescription'
import AppartementImage from '../components/AppartementImage'
import AppartementHeader from '../components/AppartementHeader'
import {useLocation} from "react-router-dom";

function AppartementPage() {
  const location = useLocation();
  const [selectedFlat,setSelectedFlat] = useState(null);
  useEffect(fetchAppartementData,[]);
  
  function fetchAppartementData(){
    fetch("db.json")
    .then((Response) => Response.json())
    .then((flats) => {
      const flat = flats.find((flat)=> flat.id === location.state.appartementId);
      setSelectedFlat(flat);
    })
    .catch(console.error);
  }
  if(selectedFlat == null) return <div>loading...</div>
  return (
    <div className='appartementPage'>
        <AppartementImage  photos={selectedFlat.photos} />
        <AppartementHeader flat={selectedFlat} />
        <div className='AppartementDescriptionScroll'>
            <AppartementDescription title="Description" content={selectedFlat.description}/>
            <AppartementDescription title="Equipements" content={selectedFlat.equipements.map((eq,i) => (<p key={i}>{eq}</p>))}/>
        </div>
    </div>
  )
}

export default AppartementPage