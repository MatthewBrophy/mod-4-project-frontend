import React, { Component } from "react";
import Pokemon from "./Pokemon";

class AllPokemon extends Component {
  constructor(props) {
    super(props);
  }

  displayPokemon = () => {
    return this.props.allPokemon.map(pokemon => {
      console.log(pokemon);
      return (
        <div className="all-pokemon-container">
          <div
            className="individual-pokemon"
            onClick={() => console.log("go to pokemon show page")}
          >
            <h4>{pokemon.name}</h4>
            <img src={pokemon.front_img} alt="" />
            <button onClick={console.log("selectedPokemon")}>
              Display Details
            </button>
          </div>
        </div>
      );
    });
  };

  handleClick = () => {
    console.log("supposed to go to pokemon show page");
  };

  render() {
    return (
      <div>
        <h1> All Pokemon! </h1>
        <ul>{this.displayPokemon()}</ul>
      </div>
    );
  }
}

export default AllPokemon;
