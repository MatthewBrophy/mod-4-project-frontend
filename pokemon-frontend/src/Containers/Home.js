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
      trainersPokemon: [],
      trainer: this.props.trainer,
      selected: "pokedex"
    };
    this.populatePokedex();
    this.getTeam();
  }

  populatePokedex = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }));
  };

  getPokemon = (pokemon) => {
    let pokemonId = pokemon.pokemon_id
    let url = `http://localhost:3000/api/v1/pokemons/${pokemonId}`
    fetch(url)
    .then(data => data.json())
    .then(foundPokemon => {
      //console.log("fetched pokemon", foundPokemon)
      this.setState((prevState) => ({
        trainersPokemon: [foundPokemon, ...prevState.trainersPokemon]
      }));
    })
  }

  getTeam = () => {
    let url = `http://localhost:3000/api/v1/teams/find/${
      this.state.trainer.id
    }`;
    fetch(url)
      .then(data => data.json())
      .then(team => {
        //console.log(team)
        team.forEach(pokemon => {
          this.getPokemon(pokemon)
        })
      });
  };

  displayContent = () => {
    if (this.state.selected === "pokedex") {
      return <Pokedex pokedex={this.state.pokedex} />;
    } else if (this.state.selected === "team") {
      return <Team trainersPokemon={this.state.trainersPokemon} />;
    } else {
      return <Trainer setTrainer={this.props.setTrainer} trainer={this.props.trainer} />;
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
