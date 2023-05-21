import React from 'react'
import "../pages/AppartementPage.scss"

function AppartementPage() {
  return (
    <div className='appartementPage'>
        <div><img src="./photoAppatement.png" alt="appartementPhoto"></img></div>
        <div className='appartement_title'>
        <div className='appartementPage_title'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h2>Paris, Île-de-France</h2>
            <div className='appartementPage_subtitle'>
                <span>Cozi</span>
                <span>Canal</span>
                <span>Paris 10</span>
            </div>
        </div>
        <div className='appartemnt_owner'>
            <div className='appartement_name'>
                <h3>Alexandre Dumas</h3>
                <div className='appartement_owner_badge'></div>
            </div>
            <div className='appartemnt_owner_stars'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
            </div>
        </div>
        </div>
        <div className="apptement_description">
            <p>Description</p>
            <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            <p>climatisation</p>
        </div>
    </div>
  )
}

export default AppartementPage