import React, { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=e700a4a4';

function App() {

  useEffect(() => {
    searchMovies('The Lord of the Rings')
  }, [])

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search)
    } catch(err) {
      console.error(err)
    }
  }

  const movie1 = {
      "Title": "The Lord of the Rings: The Return of the King",
      "Year": "2003",
      "imdbID": "tt0387360",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NTQwMTY5MV5BMl5BanBnXkFtZTgwODcwNjUwMTE@._V1_SX300.jpg"
  }

  return (
   <div className="app">
      <h1>SilverScreen</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value='Superman'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onChange={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>
        </div>
      </div>
   </div>
  );
}

export default App;
