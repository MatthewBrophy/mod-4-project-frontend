import React, { Component } from "react";
import logo from "./logo.svg";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Battle from "./Battle";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

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
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" render={() => <Login />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
