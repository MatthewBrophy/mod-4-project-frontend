import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Pokedex from "./images/trippy-sun-pokedex-avec-pika.jpg";

class AllPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.allPokemon
    };
  }

  displayPokemon = () => {
    return (
      <div>
        <div className="container main-pokedex-display">
          <img src={Pokedex} alt="" />
        </div>
        <div>
          {this.state.pokemon.map(pokemon => (
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
