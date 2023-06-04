import React from 'react'
import "./Cards.scss"
import { Link } from 'react-router-dom'

function Cards(props) {
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

export default Cards