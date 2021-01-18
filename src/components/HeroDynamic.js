import React from "react";
// import { Button } from "./Button";
import "./HeroDynamic.css";
import "../App.css";
import SearchBar from "./SearchBar";

function HeroDynamic() {
  let term = "";

  const handleInput = function (e) {
    console.log(e.target.value);
    term = e.target.value;
  };

  const handleSearch = function () {
    localStorage.setItem("query", term);
    console.log(term);
    console.log(localStorage.getItem("query"));
  };

  return (
    <div className="hero-container">
      <video src="/videos/kitchen.mp4" autoPlay loop muted />
      <h1>LIVE HEALTHIER TODAY.</h1>
      <p>
        <i>Ditch the fast food.</i> REFRY offers thousands of alternative and
        healthy recipes at your fingertips.
      </p>

      <div className="search-bar">
        <SearchBar handleInput={handleInput} handleSearch={handleSearch} />
      </div>

      <div className="arrow"></div>
    </div>
  );
}

export default HeroDynamic;
