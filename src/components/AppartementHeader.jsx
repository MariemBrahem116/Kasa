import React from 'react'
import './AppartementHeader.scss'

function AppartementHeader({flat}) {
    const [fisrtName,lastName] = flat.heberger.nom.split(" ");
  return (
    <div className='appartement_header'>
            <div className='appartementPage_title'>
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>
                <div className='appartementPage_subtitle'>
                    {flat.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div className='appartemnt_owner'>
                <div className='appartement_name'>
                    <h3><span>{fisrtName}</span><span>{lastName}</span></h3>
                    <div className='appartement_owner_badge'>
                      <img src= {flat.heberger.image} alt="imageHeberger"/>
                    </div>
                </div>
                <div className='appartemnt_owner_stars'>
                    {[1,2,3,4,5].map((num) => (
                      <span  key={num} className={flat.note >= num ? "on" : ""}>★</span>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default AppartementHeader