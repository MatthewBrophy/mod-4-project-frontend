import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'

class App extends Component {
  constructor(){
    super()

    let exampleTrainer = {}
    exampleTrainer.name = "kevin"
    exampleTrainer.hometown = "pallet town"
    exampleTrainer.age = 31
    exampleTrainer.img = "https://img.rankedboost.com/wp-content/plugins/ice/pokemon/Luxio-Pokemon-Go.png"
    exampleTrainer.enemy = "eli"

    this.state = {
      allPokemon: [1,2,3, 4, 5, 6],
      team: [1,2,3],
      trainer: exampleTrainer,
    }
  }

  getTeam = () => {
    let url = ""
    fetch(url)
    .then(data => data.json())
    .then(result => {
      this.setState({team: result})
    })
  }

  addToTeam = (pokemon) => {
    this.setState((prevState) => ({
      team: [pokemon, ...prevState.team]
    }))
  }

  render() {
    return (
      <div >
        <LandingPage />

      </div>
    );
  }
}

export default App;
