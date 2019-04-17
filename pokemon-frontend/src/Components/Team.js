import React, { Component, Fragment } from "react";
import Pokemon from "../Components/Pokemon";

class Team extends Component {
  render() {
    return (
      <Fragment>
        <div className="container" />
        <div className="row col-6" id="pokedex">
          {this.props.trainersPokemon.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Team;
