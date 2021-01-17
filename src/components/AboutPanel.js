import React from "react";
import "./AboutPanel.css";

const AboutPanel = () => {
  return (
    <div className="aboutpanel-container">
      <ul className="aboutpanel-slides">
        <div className="aboutpanel-slide-1">
          <h1>Support Local Restaurants</h1>
          <i class="fas fa-hamburger"></i>
          <p>
            REFRY connects you with health-conscious restaurants in your area.
            Search for your meal with REFRY and you will be directly supporting
            the small businesses in your community!
          </p>
        </div>

        <div className="aboutpanel-slide-2">
          <h1>Lead a Healthier Lifestyle</h1>
          <i class="fas fa-heart"></i>
          <p>
            Improve your diet with intelligent recipe recommendations and
            restaurant suggestions. Whenever you crave fast food, just come to
            us and we'll guide you to a healthier future!
          </p>
        </div>

        <div className="aboutpanel-slide-3">
          <h1>Save Your Precious Money</h1>
          <i class="fas fa-comments-dollar"></i>
          <p>
            Cooking at home will save you a dramatic amount of money. The same
            meal ordered at restaurant can be 300% more expensive than a
            home-prepped meal!
          </p>
        </div>

        <div className="aboutpanel-slide-4">
          <h1>Practice your Sustainability</h1>
          <i class="fas fa-globe-americas"></i>
          <p>
            The restaurant industry wastes around $25 billion of food every
            year. That's a lot of food in the garbage! Cooking at home in an
            eco-conscious manner will dramatically minimize food waste.
          </p>
        </div>
      </ul>
    </div>
  );
};

export default AboutPanel;
