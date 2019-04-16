import React, { Component } from "react";
import CatchButtons from "../Components/CatchButtons";
import Nickname from "../Components/Nickname";
import { Redirect } from "react-router-dom";

class Catch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      trainer: this.props.trainer,
      wildPokemon: this.getRandomPokemon(),
      attempts: 3,
      caught: false
    };
  }

  getRandomPokemon = () => {
    console.log("get rand poke")
    let pokemon = {
      back_img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      front_img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      hp: 39,
      id: 4,
      name: "charmander",
      weight: 85
    }
    return pokemon
  }

  throwPokeball = ev => {
    let failChance = 0
    if (this.state.attempts < 1){
      console.log("no more attempts")
    } else {
      let catchChance = Math.floor(Math.random() * 100)
      if (catchChance > failChance) {
        this.setState({ caught: true})
        //this.props.createTeam(this.state.wildPokemon)
      }
      this.setState((prevState) => ({
        attempts: prevState.attempts - 1
      }))
    }
  };

  run = () => {
    console.log("run")
    return <Redirect to="/home" />
  };

  displayMessage = () => {
    if (this.state.caught === true) {
      return <Nickname createTeam={this.props.createTeam} wildPokemon={this.state.wildPokemon}/>
    } else {
      return <p>Try to catch the pokemon or run away!</p>
    }
  }

  render() {
    return (
      <div className="container login-sign-up-margin">
        <div className="row justify-content-center">
          <div className="col-3">
            <h2>{this.state.wildPokemon.name}</h2>
            <p>HP: {this.state.wildPokemon.hp}</p>
          </div>
          <div className="col-3">
            <img src={this.state.wildPokemon.front_img} alt={this.state.wildPokemon.name} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3">
            <img src={this.state.trainer.image} alt={this.state.trainer.name} />
            </div>
            <div className="col-3">
            <h2>{this.state.trainer.name}</h2>
            <p>Has {this.state.attempts} left! </p>
          </div>
        </div>
        <div className="row justify-content-center textBox">
          <div className="col-5 ">
            {this.displayMessage()}
          </div>
          <div className="col-3 ">
            <CatchButtons run={this.run} throwPokeball={this.throwPokeball}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Catch;
