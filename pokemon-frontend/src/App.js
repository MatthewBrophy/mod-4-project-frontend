import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ChooseStarter from "./Components/ChooseStarter";
import Home from "./Containers/Home";
import Catch from "./Containers/Catch";
import PokeMap from "./Components/Map";

const AllPokemonURL = "http://localhost:3000/api/v1/pokemons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: {
        id: 900,
        name: "Matt",
        hometown: "here",
        age: 4000,
        image:
          "https://cdn.bulbagarden.net/upload/thumb/a/a2/ORAS_Pok%C3%A9mon_Ranger_M.png/150px-ORAS_Pok%C3%A9mon_Ranger_M.png",
        rival: "kevin"
      },
      trainersPokemon: [],
      pokedex: []
    };

    this.populatePokedex();
  }

  populatePokedex = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }));
  };

  setTrainer = newTrainer => {
    this.setState({ trainer: newTrainer });
  };

  selectStarter = pokemon => {
    this.createTeam(pokemon);
    this.setState(prevState => ({
      trainersPokemon: [pokemon, ...prevState.trainersPokemon]
    }));
  };

  createTeam = pokemon => {
    let url = "http://localhost:3000/api/v1/teams";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trainer_id: this.state.trainer.id,
        pokemon_id: pokemon.id,
        nickname: pokemon.nickname
      })
    })
      .then(res => res.json())
      .then(newTeam => {
        console.log(this.state);
        this.setState((prevState) => ({
          trainersPokemon: [...prevState.trainersPokemon, pokemon]
        }))
      });
  };

  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route
                path="/sign-up"
                component={() => <SignUp setTrainer={this.setTrainer} />}
              />
              <Route
                path="/choose-starter"
                component={() => (
                  <ChooseStarter
                    trainersPokemon={this.state.trainersPokemon}
                    selectStarter={this.selectStarter}
                  />
                )}
              />
              <Route
                path="/login"
                component={() => <Login setTrainer={this.setTrainer} />}
              />
              <Route
                path="/map"
                component={() => <PokeMap pokedex={this.state.pokedex} />}
              />
              <Route
                path="/catch"
                component={() => (
                  <Catch
                    pokedex={this.state.pokedex}
                    createTeam={this.createTeam}
                    trainer={this.state.trainer}
                  />
                )}
              />
              <Route
                path="/home"
                component={() => (
                  <Home
                    pokedex={this.state.pokedex}
                    trainer={this.state.trainer}
                    trainersPokemon={this.state.trainersPokemon}
                    setTrainer={trainer => this.setTrainer(trainer)}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
