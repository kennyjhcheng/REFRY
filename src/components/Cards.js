import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AWESOME recipes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
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
        </div>
      </div>
    </div>
  );
}

export default Cards;
