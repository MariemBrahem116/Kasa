import React from 'react'
import AppartementDescription from '../components/AppartementDescription'
import "../pages/About.scss"

function About() {
  return (
    <>
  <div className='container'>
     <div className='imageAbout'>
        <img src="photoApropos.png" alt=""></img>
    </div>
    <div className='aboutContainer'>

        <div><AppartementDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/></div>
        <div><AppartementDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/></div>
        <div><AppartementDescription title="Service" content ="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/></div>
        <AppartementDescription title="Sécurité" content ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."/>
    </div>
    </div>
    </>
  )
}

export default About