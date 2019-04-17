import React, { Component } from "react";
import CatchButtons from "../Components/CatchButtons";
import Nickname from "../Components/Nickname";
import { Redirect } from "react-router-dom";
import Pokeball from "../images/pokeball.png";
import PendingPokeball from "../images/pending_pokeball.gif";

class Catch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thrownOnce: false,
      selected: "not run",
      pokedex: this.props.pokedex,
      trainer: this.props.trainer,
      wildPokemon: this.getRandomPokemon(),
      attempts: 3,
      inPokeball: false,
      caught: false
    };
    console.log(this.state)
  }

  getRandomPokemon = () => {
    let rand = Math.floor(Math.random() * 151)
    let randPoke = this.props.pokedex[rand]
    return randPoke
  }

  throwPokeball = ev => {
    let failChance = 0
    if (this.state.wildPokemon.hp < 100) {
      failChance = this.state.wildPokemon.hp + 30
    } else {
      failChance = this.state.wildPokemon.hp
    }
    if ((this.state.attempts < 1) && (this.state.caught === false)){
      alert("You ran out of pokeballs!")
      this.setState((prevState) => ({
        attempts: prevState.attempts - 1
      }))
    } else if (this.state.caught === true){
      alert("You've caugh't this pokemon already!")
    } else {
      this.setState({
        inPokeball: true, thrownOnce: true
      }, this.waitToCatch(failChance))
    }
  };

  waitToCatch = failChance => {
    console.log("hi")
    setTimeout(() => this.tryCatch(failChance), Math.floor(Math.random() * 4000) + 500)

  }

  tryCatch = failChance => {
    console.log(this.state)
    let catchChance = Math.floor(Math.random() * 150);
    if (catchChance > failChance) {
      this.setState((prevState) => ({
        attempts: prevState.attempts - 1, caught: true
      }));
    } else {
      this.setState((prevState) => ({
        attempts: prevState.attempts - 1, inPokeball: false
      }));
    }
  }

  run = () => {
    if (this.state.caught === true){
      alert("Give your Pokemon a nickname first!")
    } else {
      this.setState({selected: "run"})
    }
  };

  displayMessage = () => {
    if (this.state.caught === true) {
      return <Nickname createTeam={this.props.createTeam} wildPokemon={this.state.wildPokemon}/>
    } else {
      return <p>A wild {this.state.wildPokemon.name} appeared! Try to catch the pokemon or run away!</p>
    }
  }

  displayPokemon = () => {
    if (this.state.caught === true) {
      return <img src={Pokeball} alt="pokeball" className="pokeball-IMG"/>
    } else if (this.state.inPokeball === false){
      return <img src={this.state.wildPokemon.front_img} alt={this.state.wildPokemon.name} className={(this.state.thrownOnce === false) ? "pokemon-battle-slide" : "pokemon-battle-pic"}/>
    } else {
      return <img src={PendingPokeball} alt={this.state.wildPokemon.name} className="pokeball-IMG"/>
    }
  }

  render() {
    return ((this.state.selected === "run") || (this.state.attempts === -1))  ? (
      <Redirect to="/home" />
    ) : (
      <div className="container login-sign-up-margin">
        <div className="row">
          <div className="col-3">
            <h2>{this.state.wildPokemon.name}</h2>
            <p>HP: {this.state.wildPokemon.hp}</p>
          </div>
          <div className="col-3">
          </div>
          <div className="col-3">
            {this.displayPokemon()}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3">
            <img src={this.state.trainer.image} alt={this.state.trainer.name} className="trainer-battle-IMG"/>
          </div>
          <div className="col-3">
          </div>
          <div className="col-3 trainer-info">
            <h2>{this.state.trainer.name}</h2>
            <p>Has {this.state.attempts} attempts left! </p>
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
