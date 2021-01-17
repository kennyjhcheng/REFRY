import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({
  resId,
  name,
  thumb,
  locality,
  address,
  cuisines,
  cost,
  rating,
  votes,
  rating_color,
}) => {
  const clickToStoreRecipe = () => {
    let cuisinesList = cuisines.split(", ");
    for (var i = 0; i < cuisinesList.length; i++) {
      localStorage.setItem(i, cuisinesList[i]);
    }
  };

  return (
    <div className="restaurant-tile">
      <Link to="/recipe">
        <h2 className="rest-name" onClick={clickToStoreRecipe}>
          {name}
        </h2>
      </Link>
      <img alt='' src={thumb} className='rest-img' />
      <div className="rest-details">
        <div className="rest-loc">{locality}</div>
        <div className="rest-add">{address}</div>
        <hr />
        <div className="rest-cusines">
          <strong>CUISINES:</strong> {cuisines}
        </div>
        <div className="rest-cost">
          <strong>COST FOR TWO:</strong> Rs.{cost}
        </div>
        <div className="rest-rating">
          <div>{votes} votes</div>
          <p style={{ backgroundColor: `${rating_color}` }}>{rating}/5</p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
