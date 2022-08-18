import React from 'react';

const Search = ({ handleSearch, handleChange }) => (
  <form>
    <label>Want to look up a word? <input type="text"  id="searchInput" onChange={handleChange}/></label>
    <button onClick={handleSearch}>Search...</button>
  </form>
)

export default Search;