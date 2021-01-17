import React, { useState } from "react";
import "./HeroDynamic.css";
import axios from "axios";
import "../App.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./recipe-related/Recipe";

function HeroDynamic() {
  let term = "";

  const handleInput = function (e) {
    console.log(e.target.value);
    term = e.target.value;
  };

  const handleSearch = function () {
    localStorage.setItem("query", term);
  };

  return (
    <div className="hero-container">
      <video src="/videos/kitchen.mp4" autoPlay loop muted />
      <h1>HEALTHIER LIVING TODAY</h1>
      <p>
        Ditch the fast food. REFRY offers thousands of alternative and healthy
        recipes at your fingertips.
      </p>

      <div className="search-bar">
        <SearchBar handleInput={handleInput} handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default HeroDynamic;
