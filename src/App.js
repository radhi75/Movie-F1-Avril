
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import moviesData from "./assets/Data"

function App() {
 const [searchvalue,setSearch]=useState("")
 const [rate,setRating]=useState(0)
console.log(rate)
  return (
    <div className="App">
     <Navigation setSearch={setSearch} setRating={setRating} data={moviesData} searchvalue={searchvalue}/>
     <MovieList data={moviesData} rate={rate} searchvalue={searchvalue} />
     <Footer/>
    </div>
  );
}

export default App;
