import React, { Component } from "react";

import LandingPageImage from "../../src/images/maxresdefault.jpg";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="row h-100 justify-content-center align-items-center">
        <img
          src={LandingPageImage}
          alt="Landing Page"
          className="img-fluid landing-page-image"
        />

        <div className="row">
          <Link to="./sign-up" className="signUp-button">
            Sign Up
          </Link>

          <Link to="./login" className="login-button">
            Log In
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
