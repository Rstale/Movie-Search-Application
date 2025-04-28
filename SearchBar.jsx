
import React from 'react';

const SearchBar = ({ query, setQuery, fetchMovies }) => {
  return (
    <form onSubmit={fetchMovies}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;