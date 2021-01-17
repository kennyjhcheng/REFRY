import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

// arrays storing bootstrap button styles and sizes
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

// button constructor
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  //default to STYLES/SIZES presets if button NOT already styled
  //prettier-ignore (sorry, this is for my vscode extensions, please disregard)
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/search" className="btn-mobile">
      <button className={`btn ${checkButtonStyle}' ${checkButtonSize}`}>
        {/* renders whatever is passed into call as Button component */}
        {children}
      </button>
    </Link>
  );
};
