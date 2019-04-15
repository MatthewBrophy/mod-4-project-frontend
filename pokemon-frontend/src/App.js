import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ChooseStarter from "./Components/ChooseStarter";
import Home from "./Containers/Home";
import Pikachu from "./images/pikachu-2.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: {
        name: "Matt",
        hometown: "Pallet Town",
        age: 35,
        enemy: "Kevin",
        image: Pikachu
      },
      trainersPokemon: [
        {
          back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
          front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
          hp: 35,
          id: 138,
          name: "omanyte",
          weight: 75
        },
        {
          back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png",
          front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
          hp: 70,
          id: 139,
          name: "omastar",
          weight: 350
        },
        {
          back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png",
          front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
          hp: 80,
          id: 142,
          name: "aerodactyl",
          weight: 590
        }
      ]
    };
  }

  setTrainer = newTrainer => {
    this.setState({ trainer: newTrainer });
  };

  setTeam = newPokemon=> {
    this.setState((prevState) => ({
      trainersPokemon: [...prevState.trainersPokemon, newPokemon]
    }))
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
                component={() => <ChooseStarter setTeam={this.setTeam}/>}
              />
              <Route path="/login" component={() => <Login setTrainer={this.setTrainer}/>} />
              <Route
                path="/home"
                component={() => <Home trainer={this.state.trainer} trainersPokemon={this.state.trainersPokemon}/>}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
