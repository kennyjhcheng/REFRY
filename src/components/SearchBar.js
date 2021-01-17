import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <form className="search-form">
      <input
        className="searchBar"
        type="text"
        placeholder="What are you craving?"
        onChange={props.handleInput}
      />
      <Link to="/recipes">
        <button
          className="searchBtn"
          type="submit"
          color="#ffffff"
          onClick={props.handleSearch}
        >
          SEARCH
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;
