import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import Recipe from "../recipe-related/Recipe";
import { v4 as uuidv4 } from "uuid";
import Cards from "../Cards";
import "./Recipes.css";

export default function Recipes() {
  const [recipes1, setRecipes1] = useState([]);
  const [recipes2, setRecipes2] = useState([]);
  const [recipes3, setRecipes3] = useState([]);

  // Recipe Search Edamam API
  const APP_ID_1 = "xxxxxx";
  const APP_KEY_1 = "xxxxxxxxxxxxxxxxxxxxxxxx";

  const APP_ID_2 = "xxxxxx";
  const APP_KEY_2 = "xxxxxxxxxxxxxxxxxxxxxxxx";

  const APP_ID_3 = "xxxxxx";
  const APP_KEY_3 = "xxxxxxxxxxxxxxxxxxxxxxxx	";

  let query1 = localStorage.getItem(0);
  let query2 = localStorage.getItem(1);
  let query3 = localStorage.getItem(2);

  let one = `https://api.edamam.com/search?q=${query1}&app_id=${APP_ID_1}&app_key=${APP_KEY_1}&from=0&to=3&calories=591-722&health=alcohol-free`;
  let two = `https://api.edamam.com/search?q=${query2}&app_id=${APP_ID_2}&app_key=${APP_KEY_2}&from=0&to=3&calories=591-722&health=alcohol-free`;
  let three = `https://api.edamam.com/search?q=${query3}&app_id=${APP_ID_3}&app_key=${APP_KEY_3}&from=0&to=3&calories=591-722&health=alcohol-free`;

  // get recipe calls
  const getData = async () => {
    const result1 = await axios.get(one);
    const result2 = await axios.get(two);
    const result3 = await axios.get(three);

    console.log(result1);
    console.log(result2);
    console.log(result3);

    setRecipes1(result1.data.hits);
    setRecipes2(result2.data.hits);
    setRecipes3(result3.data.hits);

    query1 = "";
    query2 = "";
    query3 = "";
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Recipe-page">
      <h1 className="recipes">RECIPES</h1>
      {/* <div>
        <Cards />
      </div> */}
      <div class="flex-container">
        <div className="recipes">
          <div className="flex-item-1">
            {recipes1 !== [] &&
              recipes1.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </div>

          <div className="flex-item-2">
            {recipes2 !== [] &&
              recipes2.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </div>
          <div className="flex-item-3">
            {recipes3 !== [] &&
              recipes3.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
