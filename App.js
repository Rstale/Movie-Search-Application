import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Compononts/SearchBar';
import MovieCard from './Compononts/MovieCard';
import './styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const url = `http://www.omdbapi.com/?s=${query}&apikey=b5e5ee3e`;
      const res = await axios.get(url);

      if (res.data.Response === 'True') {
        setMovies(res.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No movies found!');
      }
    } catch (err) {
      setError('Something went wrong.');
      setMovies([]);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} />

      {error && <p className="error">{error}</p>}

      <div className="movie-cards">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
};

export default App;