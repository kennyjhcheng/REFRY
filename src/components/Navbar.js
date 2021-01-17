import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  // menu button reversing functionality
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // resizing for mobile and small windows
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  // ensures that Sign Up button is only rendered once
  useEffect(() => {
    showButton();
  }, []);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* navbar logo, pulled from fontawesome.com */}
            REFRY
            <i className="fas fa-utensils" />
          </Link>

          {/* "hamburger" menu icon */}
          <div className="menu-icon" onClick={handleClick}>
            {/* adds menu icon, once clicked it will turn into an X */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* home page */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* about page */}
            {/* <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={handleBackClick}>
                About
              </Link>
            </li> */}

            {/* recipes gallery */}
            <li className="nav-item">
              <Link
                to="/recipes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recipes
              </Link>
            </li>

            {/* search */}
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline">SEARCH</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
