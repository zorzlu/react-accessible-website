import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Link, withRouter } from "react-router-dom";
import './Navigation.css';

//TODO fix
function Navigation(props) {

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React Multi-Page Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/events" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
          </div>
        </div>
      </nav>
    </div>
  );
}


Navigation.propTypes = {
    location: PropTypes.object
}

export default withRouter(Navigation);