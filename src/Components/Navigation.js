import {Search } from '@mui/icons-material';
import { Rating } from '@mui/material';
import React from 'react'

const Navigation = ({setSearch,setRating,data,searchvalue}) => {
  return (

    <div className='nav'>
    <span className='text'>N<span className='logo'>ETFLI</span>X</span>
    <div className='Navbar'>
    <Rating
     name="simple-controlled"
     value={2}
    onChange={(e) => 
    setRating(e.target.value)
        }
     />
    <input type="text" placeholder="looking for a movie"
        onChange={(e)=>setSearch(e.target.value)} className="input"
     />
     <Search />
     {searchvalue ? <ul className='menu'>
      {data.map(name => name.name.toUpperCase().includes(searchvalue.toUpperCase()) && searchvalue?
      
          <li  key={name.id}>{name.name}</li> :null
      )}
    </ul> :null}
   
    </div>
    </div>
        
       
     
  )
}

export default Navigation