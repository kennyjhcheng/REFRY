import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "../CardItem";

import axios from "axios";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [recipes2, setRecipes2] = useState([]);

  const APP_ID = "e34c2315";
  const APP_KEY = "3e635c7a891274395e20a2074ea2f98f";

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
        setRecipes2(recipes)
        setRecipes(res.data.hits);
        query = "";
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipes2]);

  // const init = function () {
  //   setQuery(localStorage.getItem("query"));
  //   console.log(query);
  // };
  let cards;

  if (recipes) {
    cards =
      <div className="cards">
        <h1>Thousands of healthy recipes one click away.</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={(recipes[0]) ? ((recipes[0].recipe.image === "") ? "images/Refry_2_HackDavis.jpg" : recipes[0].recipe.image) : "images/Refry_2_HackDavis.jpg"}
                text={(recipes[0]) ? recipes[0].recipe.label : "Delicious Restaurant"}
                label={(recipes[0]) ?
                  ((recipes[0].recipe.totalTime > 119) ?
                    (`${recipes[0].recipe.totalTime / 60} hours`) :
                    (`${recipes[0].recipe.totalTime} minutes`)
                  ) : "Food"}
                path={(recipes[0]) ? `${recipes[0].recipe.url}` : ''}
              />
              <CardItem
                src={(recipes[1]) ? ((recipes[1].recipe.image === "") ? "images/Refry_2_HackDavis.jpg" : recipes[1].recipe.image) : "images/Refry_2_HackDavis.jpg"}
                text={(recipes[1]) ? recipes[1].recipe.label : "Delicious Restaurant"}
                label={(recipes[1]) ?
                  ((recipes[1].recipe.totalTime > 119) ?
                    (`${recipes[1].recipe.totalTime / 60} hours`) :
                    (`${recipes[1].recipe.totalTime} minutes`)
                  ) : "Food"}
                path={(recipes[1]) ? `${recipes[1].recipe.url}` : ''}
              />
              <CardItem
                src={(recipes[2]) ? ((recipes[2].recipe.image === "") ? "images/Refry_2_HackDavis.jpg" : recipes[2].recipe.image) : "images/Refry_2_HackDavis.jpg"}
                text={(recipes[2]) ? recipes[2].recipe.label : "Delicious Restaurant"}
                label={(recipes[2]) ?
                  ((recipes[2].recipe.totalTime > 119) ?
                    (`${recipes[2].recipe.totalTime / 60} hours`) :
                    (`${recipes[2].recipe.totalTime} minutes`)
                  ) : "Food"}
                path={(recipes[2]) ? `${recipes[2].recipe.url}` : ''}
              />
            </ul>
            {console.log(recipes[0])}
          </div>
        </div>
      </div >
  } else {
    cards =
      <div className="cards">
        <h1>Thousands of healthy recipes one click away.</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/Refry_2_HackDavis.jpg"
                text="Delicious Restaurant"
                label="Restaurant"
                path="/services"
              />
              <CardItem
                src="images/Refry_2_HackDavis.jpg"
                text="Delicious Restaurant"
                label="Restaurant"
                path="/services"
              />
              <CardItem
                src="images/Refry_2_HackDavis.jpg"
                text="Delicious Restaurant"
                label="Restaurant"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
  }

  return (
    <div>
      <h1 className="recipes">RECIPES</h1>
      {cards}
    </div>
  );
}

export default Recipes;
