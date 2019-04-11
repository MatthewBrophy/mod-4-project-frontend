import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex'
import LandingPage from './LandingPage'

class App extends Component {
  constructor(){
    super()

    this.state = {
      allPokemon: [],
      team: [],
      trainer: 0,
    }
  }

  getTeam = () => {
    url = ""
    fetch(url)
    .then(data => data.json())
    .then(result => {
      setState({team: results})
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
        /*<Pokedex allPokemon={this.state.allPokemon} team={this.state.team} trainer={this.state.trainer}/>*/
      </div>
    );
  }
}

export default App;
