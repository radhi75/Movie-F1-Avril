import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data,searchvalue,rate}) => {
  
  return (
    <div className='List'>
       {data.filter((el)=>el.name.toUpperCase().includes(searchvalue.toUpperCase()) && el.rating>=rate).map((el)=><MovieCard key={el.id} el={el}/>)}
    </div>
  )
}

export default MovieList