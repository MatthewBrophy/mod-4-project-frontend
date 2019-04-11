import React, { Component } from "react";
import MainImage from "./images/maxresdefault.jpg";
import Home from "./Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
        {this.state.redirect ? (
          <Home
            allPokemon={this.props.allPokemon}
            team={this.props.team}
            trainer={this.props.trainer}
          />
        ) : (
          <div>
            <img src={MainImage} alt="" />
            <br />
            <button
              className="enter-button"
              onClick={this.handleOnClick}
              type="button"
            >
              Lets Catch Some Pokemon
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
