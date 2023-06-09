import React, { useEffect, useState } from 'react'
import "../Appartementpage/AppartementPage.scss"
import Collapse from '../../components/Collapse/Collapse'
import AppartementHeader from '../../components/CardsContent/CardsContent'
import {useLocation} from "react-router-dom";
import Carroussel from '../../components/Carroussel/Carroussel'

function AppartementPage() {
  const location = useLocation();
  const [selectedFlat,setSelectedFlat] = useState(null);
  useEffect(fetchAppartementData,[location]);

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
        <Carroussel  photos={selectedFlat.photos} />
        <AppartementHeader flat={selectedFlat} />
        <div className='AppartementDescriptionScroll'>
            <Collapse title="Description" content={selectedFlat.description}/>
            <Collapse title="Equipements" content={selectedFlat.equipements.map((eq) => (<p key={eq}>{eq}</p>))}/>
        </div>
    </div>
  )
}

export default AppartementPage