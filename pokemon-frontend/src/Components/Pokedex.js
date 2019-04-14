import React, { Component, Fragment } from "react";
import Pokemon from "../Components/Pokemon";

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>All Pokemon!</h1>
        <div className="row col-8" id="pokedex">
          {this.props.pokedex.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Pokedex;
