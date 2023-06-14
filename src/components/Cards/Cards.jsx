import React from 'react'
import "./Cards.scss"

function Cards({imgUrl,title,id}) {

  return (
        <div className='appartement'>
          <img src={imgUrl} alt="imageAppartement" id={id}/>
          <div className='appartement_titre'>{title}</div>
        </div>

  )
}

export default Cards