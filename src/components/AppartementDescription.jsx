import React, { useState } from 'react'
import "./AppartementDescription.scss"

function AppartementDescription(props) {
  const [isContentVisible,setIsContentVisible] = useState(false);
  const showContent = () =>{
    setIsContentVisible(!isContentVisible);
  }
  const contentClass = (isContentVisible ? "visible" :"hidden") + " description-content";
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down")+ " fas";
  return (
    <div className="appartement_description">
    <p className='description-header'>
        <span>{props.title}</span>
        <i className={chevronClass} onClick={showContent}></i>
    </p>
    <p className={contentClass}>{props.content}</p>
    </div>
  )
}

export default AppartementDescription