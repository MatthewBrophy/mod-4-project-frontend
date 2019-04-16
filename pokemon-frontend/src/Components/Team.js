import React, { Component, Fragment } from "react";
import Pokemon from "../Components/Pokemon";

class Team extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1>Your Pokemon!</h1>
          </div>
        </div>
        <div className="row col-8" id="pokedex">
          {this.props.trainersPokemon.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Team;
