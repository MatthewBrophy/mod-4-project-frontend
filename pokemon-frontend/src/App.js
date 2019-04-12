import React, { Component } from "react";
import logo from "./logo.svg";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Login from "./Login";
import Battle from "./Battle";
import Team from "./Team";
import Trainer from "./Trainer";
import Pokedex from "./Pokedex"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

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

  setTrainer = (trainer) => {
    console.log(trainer)
    this.setState({
      trainer: trainer
    })
  }

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
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route path="/login" component={() => <Login setTrainer={this.setTrainer} />} />
              <Route path="/sign-up" component={() => <SignUp setTrainer={this.setTrainer}/>} />
              <Route path="/home" component={() => <Home team={this.state.team} trainer={this.state.trainer}/>} />
              <Route path="/team" component={() => <Team />} />
              <Route path="/trainer" component={() => <Trainer trainer={this.state.trainer}/>} />
              <Route path="/pokedex" component={() => <Pokedex />} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
