import React, { useState } from 'react'
import "./Collapse.scss"

function AppartementDescription(props) {
  const [open,setOpen] = useState(false);

  const showContent = () =>{
    setOpen(!open);
  }

  const contentClass = (open ? "visible" :"hidden") + " description-content";
  const chevronClass = (open ? "fa-chevron-up" : " fa-chevron-down")+ " fas";
  return (
    <div className="appartement_description">
      <div className='description-header'>
        <span>{props.title}</span>
        <i className={chevronClass} onClick={showContent}></i>
      </div>
      <div className={contentClass}>{props.content}</div>
    </div>
  )
}

export default AppartementDescription