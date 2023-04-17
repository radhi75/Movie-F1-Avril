import { Rating } from '@mui/material'
import React from 'react'

const MovieCard = ({el}) => {
   
  return (
    <div className='card'>
        <img width="270px" height="400px" src={el.image} alt='404'/>
    <div className='card-content'>
    <div>
        <h4>{el.name}</h4>
        <Rating name="read-only" value={el.rating} readOnly />
        <p>{el.date}</p>
        <p>{el.type}</p>
        <p style={{marginRight:"20px"}}>{el.description}</p>
        
        </div>
        <button className='button'>Watch Trailler</button>
    </div> 
      
    </div>
  )
}

export default MovieCard