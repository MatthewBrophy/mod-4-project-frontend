import React, { Component } from "react";
import Pokemon from "./Pokemon";

class AllPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.allPokemon,
      pokemonIndex: 0
    };
  }

  displayPokemon = () => {
    let slicedPokemon = this.state.pokemon.slice(
      this.state.pokemonIndex,
      this.state.pokemonIndex + 3
    );

    return (
      <div className="container" id="clear-margin-padding">
        <div className="card-deck" id="all-pokemon-container">
          {slicedPokemon.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  };

  handleClick = () => {
    console.log("supposed to go to pokemon show page");
  };

  render() {
    return (
      <div className="centered">
        <div id="clear-margin-padding">
          <h1> All Pokemon! </h1>
          {this.displayPokemon()}
        </div>
      </div>
    );
  }
}

export default AllPokemon;
