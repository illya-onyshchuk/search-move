import React, { useEffect, useState } from "react";

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const API_URL = 'http://www.omdbapi.com?apikey=e700a4a4';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchMovies('The Lord of the Rings')
  }, [])

  const searchMovies = async (title) => {
    if (!title.trim()) {
      return;
    }

    try {
      setIsLoading(true)
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    } catch(err) {
      console.error('error:', err)
    } finally {
      setIsLoading(false)
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      searchMovies(searchTerm)
    }
  }

  return (
    isLoading
      ? <Loader/>
      : <div className="app">
          <h1>SilverScreen</h1>

          <div className="search">
            <input 
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => handleKeyUp(e)}
            />
            <img 
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)} />
          </div>

          {movies?.length
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            )
            : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )}
        </div>
  );
}

export default App;
