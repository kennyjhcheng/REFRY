import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Thousands of healthy recipes one click away.</h1>

      {/* this is 3x <ul></ul>, each containing 3 CardItem, thus creating a 3x3 grid*/}
      {/* note that the props will be passed down to CardItem  */}

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Refry_2_HackDavis.jpg" // the image to be displayed on the card
              text="Delicious Food Caption" // this will be the name of the recipe
              label="Food Type" // a tag on the picture indicating the type/category/country of the cuisine
              path="/services" // "services" is a placeholder; this path should bring you to either a popup of the recipe, or dedicated page for that recipe
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/services"
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/services"
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/products"
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/services"
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/products"
            />
            <CardItem
              src="images/Refry_2_HackDavis.jpg"
              text="Delicious Food Caption"
              label="Food Type"
              path="/sign-up"
            />
          </ul>
          <h1 className="Dropdown_placeholder">Show more</h1>
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Cards;
