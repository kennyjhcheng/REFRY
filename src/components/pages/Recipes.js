import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "../Cards";
import axios from "axios";

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
      <div className="returned-recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            let { label, image, url } = recipe.recipe;
            return <CardItem path={url} label={label} image={image} />;
          })}
      </div>
    </div>
  );
}

export default Recipes;
