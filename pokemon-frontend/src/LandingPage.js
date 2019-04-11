import React, { Component } from "react";
import MainImage from "./images/maxresdefault.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <img src={MainImage} alt="" />
        <br />
        <button
          className="enter-button"
          onClick={() => this.props.RenderHomePage}
        >
          Lets Catch Some Pokemon
        </button>
      </div>
    );
  }
}

export default LandingPage;
