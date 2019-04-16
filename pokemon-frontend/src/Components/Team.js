import React, { Component, Fragment } from "react";
import Pokemon from "../Components/Pokemon";

class Team extends Component {
  render() {
    return (
      <Fragment>
        <h1>Your Pokemon!</h1>
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
