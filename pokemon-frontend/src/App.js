import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage";
import Login from "./Login"

const AllPokemonURL = "http://localhost:3000/api/v1/pokemons";

class App extends Component {
  constructor() {
    super();

    this.state = {
      allPokemon: [],
      team: [1, 2, 3],
      trainer: {}
    };
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ allPokemon: pokemon }));
  };

  getTeam = () => {
    let url = "";
    fetch(url)
      .then(data => data.json())
      .then(result => {
        this.setState({ team: result });
      });
  };

  addToTeam = pokemon => {
    this.setState(prevState => ({
      team: [pokemon, ...prevState.team]
    }));
  };

  render() {
    return (
      <div>
        {console.log(this.state.allPokemon)}
        <LandingPage
          allPokemon={this.state.allPokemon}
          team={this.state.team}
          trainer={this.state.trainer}
        />
      <Login />
      </div>
    );
  }
}

export default App;
