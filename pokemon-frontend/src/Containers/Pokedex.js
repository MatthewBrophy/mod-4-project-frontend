import React, { Component } from "react";
import Pokemon from "../Components/Pokemon";

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row col-10 card-deck pokedex justify-content-center align-items-center">
        {this.props.pokedex.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
