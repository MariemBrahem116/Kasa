import React from 'react'
import "./AppartementCard.scss"
import { Link } from 'react-router-dom'

function AppartementCard(props) {
  return (
      <Link to= "/flat" state={
        {
          appartementId:props.id
        }}
      >
        <div className='appartement'>
          <img src={props.imageUrl} alt="imageAppartement"/>
          <div className='appartement_titre'>{props.title}</div>
        </div>
      </Link>
  )
}

export default AppartementCard