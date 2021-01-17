import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-form">
      <input
        className="searchBar"
        type="text"
        placeholder="What are you craving?"
      />
      <button className="searchBtn" type="submit" color="#ffffff">
        SEARCH
      </button>
    </form>
  );
};

export default SearchBar;
