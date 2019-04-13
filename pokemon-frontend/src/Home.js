import React, { Component } from "react";
import Pokedex from "./Pokedex";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        <Pokedex
          team={this.props.team}
          trainer={this.props.trainer}
          allPokemon={this.props.allPokemon}
        />
        <Nav />
      </div>
    );
  }
}

export default Home;
