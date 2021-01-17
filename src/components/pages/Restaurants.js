import React, { useEffect, useState } from "react";
import "../../App.css";
import ResCards from "../ResCards";
import axios from "axios";
import Restaurant from "../Restaurant";
import CardItem from "../CardItem";
import { Link } from "react-router-dom";

export default function Restaurants() {
  // Zomato Restaurant API
  const [restaurant, setRest] = useState([]);
  const [restaurant2, setRest2] = useState([]);
  const config = {
    headers: {
      "user-key": "2ad63f94902019632381f2df301a60cc",
    },
  };
  let query = localStorage.getItem("query");
  let id = 256;
  const zomatoURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=${query}&count=100`;

  // API calls
  useEffect(() => {
    axios
      .get(zomatoURL, config)
      .then((res) => {
        console.log(res.data.restaurants);
        setRest2(restaurant);
        setRest(res.data.restaurants);
        localStorage.clear();
        query = "";
        id = 0;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [restaurant2]);

  const clickToStoreRecipe = (index) => {
    console.log("need to store");
    let cuisinesList = restaurant[index].restaurant.cuisines.split(", ");
    for (var i = 0; i < cuisinesList.length; i++) {
      localStorage.setItem(i, cuisinesList[i]);
    }
  };

  // render restaurants
  let restaurantToRender;
  if (restaurant) {
    restaurantToRender = restaurant.map((rest) => {
      {
        console.log("Reached");
      }
      return (
        // <CardItem
        //   src={rest.restaurant.thumb}
        //   text={rest.restaurant.name}
        //   label="{rest.restaurant.average_cost_for_two}/two people"
        //   path="/services"
        // />
        <Restaurant
          resId={rest.restaurant.id}
          name={rest.restaurant.name}
          thumb={rest.restaurant.thumb}
          locality={rest.restaurant.location.locality}
          address={rest.restaurant.location.address}
          cuisines={rest.restaurant.cuisines}
          cost={rest.restaurant.average_cost_for_two}
          rating={rest.restaurant.user_rating.aggregate_rating}
          votes={rest.restaurant.user_rating.votes}
          rating_color={rest.restaurant.user_rating.rating_obj.bg_color.type}
        />
      );
    });
  }

  let cards;

  if (restaurant) {
    cards = (
      <div className="cards">
        <h1>Thousands of healthy recipes one click away.</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <div className="grid">
              {/* <ul className="cards__items"> */}
              <div className="cell" onClick={() => clickToStoreRecipe(0)}>
                <CardItem
                  src={
                    restaurant[0]
                      ? restaurant[0].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[0].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[0]
                      ? restaurant[0].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[0]
                      ? restaurant[0].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[0].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(1)}>
                <CardItem
                  src={
                    restaurant[1]
                      ? restaurant[1].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[1].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[1]
                      ? restaurant[1].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[1]
                      ? restaurant[1].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[1].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(2)}>
                <CardItem
                  src={
                    restaurant[2]
                      ? restaurant[2].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[2].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[2]
                      ? restaurant[2].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[2]
                      ? restaurant[2].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[2].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              {/* </ul>
            <ul className="cards__items"> */}
              <div className="cell" onClick={() => clickToStoreRecipe(3)}>
                <CardItem
                  src={
                    restaurant[3]
                      ? restaurant[3].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[3].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[3]
                      ? restaurant[3].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[3]
                      ? restaurant[3].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[3].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(4)}>
                <CardItem
                  src={
                    restaurant[4]
                      ? restaurant[4].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[4].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[4]
                      ? restaurant[4].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[4]
                      ? restaurant[4].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[4].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(5)}>
                <CardItem
                  src={
                    restaurant[5]
                      ? restaurant[5].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[5].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[5]
                      ? restaurant[5].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[5]
                      ? restaurant[5].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[5].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              {/* </ul>
            <ul className="cards__items"> */}
              <div className="cell" onClick={() => clickToStoreRecipe(6)}>
                <CardItem
                  src={
                    restaurant[6]
                      ? restaurant[6].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[6].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[6]
                      ? restaurant[6].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[6]
                      ? restaurant[6].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[6].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(7)}>
                <CardItem
                  src={
                    restaurant[7]
                      ? restaurant[7].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[7].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[7]
                      ? restaurant[7].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[7]
                      ? restaurant[7].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[7].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <div className="cell" onClick={() => clickToStoreRecipe(8)}>
                <CardItem
                  src={
                    restaurant[8]
                      ? restaurant[8].restaurant.thumb === ""
                        ? "images/Refry_2_HackDavis.jpg"
                        : restaurant[8].restaurant.thumb
                      : "images/Refry_2_HackDavis.jpg"
                  }
                  text={
                    restaurant[8]
                      ? restaurant[8].restaurant.name
                      : "Delicious Restaurant"
                  }
                  label={
                    restaurant[8]
                      ? restaurant[8].restaurant.average_cost_for_two < 21
                        ? "$"
                        : restaurant[8].restaurant.average_cost_for_two < 61
                        ? "$$"
                        : "$$$"
                      : "Restaurant"
                  }
                  path="/recipes"
                />
              </div>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    cards = (
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
            <h1 className="Dropdown_placeholder">Show more</h1>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="restaurants">RESTAURANTS</h1>

      {cards}

      {/* <ResCards></ResCards> */}

      {/* <div>
        {restaurantToRender}
      </div> */}
    </>
  );
}
