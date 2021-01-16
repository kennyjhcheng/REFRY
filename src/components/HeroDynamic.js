import React from "react";
import { Button } from "./Button";
import "./HeroDynamic.css";
import "../App.css";

function HeroDynamic() {
  return (
    <div className="hero-container">
      <video src="/videos/kitchen.mp4" autoPlay loop muted />
      <h1>HEALTHIER LIVING TODAY</h1>
      <p>
        Ditch the fast food. REFRY offers thousands of alternative and healthy
        recipes at your fingertips.
      </p>
      <div className="hero-btns">
        {/* GET STARTED BUTTON */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        {/* WATCH TRAILER BUTTON */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <i className="far fa-question-circle" /> HOW IT WORKS
        </Button>
      </div>
    </div>
  );
}

export default HeroDynamic;