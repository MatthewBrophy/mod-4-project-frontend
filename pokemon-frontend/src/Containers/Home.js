import React, { Component } from "react";
import Pokedex from "./Pokedex";

const AllPokemonURL = "http://localhost:3000/api/v1/pokemons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      trainersPokemon: [],
      trainer: this.props.trainer
    };
  }

  componentDidMount() {
    this.populatePokedex();
  }

  populatePokedex = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }));
  };

  render() {
    return (
      <div className="container">
        <div className=" row justify-content-center align-items-center">
          <h4 className="row justify-content-center align-items-center">
            Welcome {this.state.trainer.name} from {this.state.trainer.hometown}
          </h4>
          <img src={this.state.trainer.image} alt="" />
          <Pokedex pokedex={this.state.pokedex} />
        </div>
      </div>
    );
  }
}

export default Home;
