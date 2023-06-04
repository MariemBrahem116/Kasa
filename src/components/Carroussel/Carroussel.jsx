import React, { useState } from 'react'
import "./Carroussel.scss"

function Carroussel(props) {
  const photos = props.photos;
  const [currentPhoto,setCurrentPhoto] = useState(0);

  const getClassName = (i)=>{
    if(i === currentPhoto) return "show";
    return "";
  };

  const moveToNext = ()=>{
    setCurrentPhoto((currentPhoto + 1) % photos.length);
  }

  const  moveToPrevious = () =>{
    const newCurrentPhoto = currentPhoto - 1;
    if(newCurrentPhoto < 0){
      setCurrentPhoto(photos.length - 1);
      return ;
    }
    setCurrentPhoto((currentPhoto - 1));
  }

  if (photos.length === 1) {
    return (
        <div className='appartement-image'>
            <img src={props.photos} alt="imageAppartement" className={getClassName(0)} />
        </div>
    );
  }

  return (
    <div className='appartement-image'>
      {
        photos.map((photo,i) => (
          <img key={`${photo}-${i}`} src= {photo} alt="ImageAppartement" className={getClassName(i)}></img>
        ))
      }
      <button  className ='btn btnNext' onClick={moveToNext}>
        <i className='fa fa-chevron-right'></i>
      </button>
      <span className='slideShow'>
        {currentPhoto + 1} / {photos.length}
      </span>
      <button className='btn btnPrevious' onClick={moveToPrevious}>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  );
}

export default Carroussel