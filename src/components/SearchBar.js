import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<form className="search-form">
			<input className="searchBar" type="text" placeholder="Search..." />
			<button className="searchBtn" type="submit" color="#ffffff">SEARCH</button>
		</form>
	)
}

export default SearchBar;