import React from 'react';
import './Card.css';


const Card = ({name, language, image})=> {

  return(
    <div class="card">
        <img src={image} alt="Avatar" className='avatar' />
        <div class="container">
          <h4><b>{name}</b></h4> 
          <p>{language}</p> 
        </div>
    </div>
  )
} 
  

export default Card;