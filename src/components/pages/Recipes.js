import React, { useEffect, useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import axios from "axios";
import RecipeDisplay from "../recipe-related/RecipeDisplay";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "38c6f696";
  const APP_KEY = "b1458abdffa7bede3e5b702ed7b100dc";

  let query = localStorage.getItem("query");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  // const getData = async () => {
  //   const result = await axios.get(url);
  //   setRecipes(result.data.hits);
  //   setQuery("");
  // };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setRecipes(res.data.hits);
        query = "";
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const init = function () {
  //   setQuery(localStorage.getItem("query"));
  //   console.log(query);
  // };

  return (
    <div>
      <h1 className="recipes">RECIPES</h1>
      <Cards />
      <RecipeDisplay array={recipes} />
    </div>
  );
}

export default Recipes;
