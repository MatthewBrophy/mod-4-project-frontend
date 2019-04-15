import React, { Component } from "react";
import Pokedex from "../Components/Pokedex";
import Trainer from "../Components/Trainer";
import Team from "../Components/Team";
import PokedexButtons from "../Components/PokedexButtons";

const AllPokemonURL = "http://localhost:3000/api/v1/pokemons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      trainersPokemon: this.props.trainersPokemon,
      trainer: this.props.trainer,
      selected: "pokedex"
    };
    this.populatePokedex();
    console.log(this.props.selectedStarter);
  }

  populatePokedex = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }));
  };

  displayContent = () => {
    if (this.state.selected === "pokedex") {
      return <Pokedex pokedex={this.state.pokedex} />;
    } else if (this.state.selected === "team") {
      return <Team trainersPokemon={this.state.trainersPokemon} />;
    } else {
      return <Trainer trainer={this.props.trainer} />;
    }
  };

  handleClick = ev => {
    this.setState({
      selected: ev.target.name
    });
  };

  render() {
    return (
      <div className="container">
        <div className=" row justify-content-center align-items-center first-home-box">
          <h4 className="row justify-content-center align-items-center">
            Welcome {this.state.trainer.name} from {this.state.trainer.hometown}
            !
          </h4>
          {this.displayContent()}
          <br />
          <PokedexButtons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Home;
