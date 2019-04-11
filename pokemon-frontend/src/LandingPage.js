import React, { Component } from "react";

import MainImage from "./images/maxresdefault.jpg";
import Home from "./Home";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        <img src={MainImage} alt="" />
        <br />
        {this.state.redirect ? (
          <Home />
        ) : (
          <button
            className="enter-button"
            onClick={this.handleOnClick}
            type="button"
          >
            Lets Catch Some Pokemon
          </button>
        )}
      </div>
    );
  }
}

export default LandingPage;