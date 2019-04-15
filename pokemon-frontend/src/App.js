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
      }

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
