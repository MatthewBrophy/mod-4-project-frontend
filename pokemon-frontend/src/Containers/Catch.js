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
      wildPokemon: this.props.wildPokemon,
      attempts: 0,
      inPokeball: false,
      caught: false
    };
  }

  componentDidMount() {
    this.getAttempts();
  }

  getRandomPokemon = () => {
    let rand = Math.floor(Math.random() * 151);
    let randPoke = this.props.pokedex[rand];
    return randPoke;
  };

  getAttempts = () => {
    if (this.state.wildPokemon.hp < 50) {
      this.setState({ attempts: 4 });
    } else if (this.state.wildPokemon.hp < 85) {
      this.setState({ attempts: 3 });
    } else if (this.state.wildPokemon.hp < 110) {
      this.setState({ attempts: 1 });
    } else {
      this.setState({ attempts: 2 });
    }
  };

  throwPokeball = ev => {
    let failChance = 0;
    if (this.state.wildPokemon.hp < 100) {
      failChance = this.state.wildPokemon.hp + 30;
    } else {
      failChance = this.state.wildPokemon.hp;
    }
    if (this.state.attempts < 1 && this.state.caught === false) {
      alert(`${this.state.wildPokemon.name} ran away!`);
      this.setState(prevState => ({
        attempts: prevState.attempts - 1
      }));
    } else if (this.state.caught === true) {
      alert("You've caught this pokemon already!");
    } else {
      this.setState(
        {
          inPokeball: true,
          thrownOnce: true
        },
        this.waitToCatch(failChance)
      );
    }
  };

  waitToCatch = failChance => {
    setTimeout(
      () => this.tryCatch(failChance),
      Math.floor(Math.random() * 4000) + 500
    );
  };

  tryCatch = failChance => {
    let catchChance = Math.floor(Math.random() * 150);
    if (catchChance > failChance) {
      this.setState(prevState => ({
        attempts: prevState.attempts - 1,
        caught: true
      }));
    } else {
      this.setState(prevState => ({
        attempts: prevState.attempts - 1,
        inPokeball: false
      }));
    }
  };

  run = () => {
    if (this.state.caught === true) {
      alert("Give your Pokemon a nickname first!");
    } else {
      this.setState({ selected: "run" });
    }
  };

  displayMessage = () => {
    if (this.state.caught === true) {
      return (
        <Nickname
          createTeam={this.props.createTeam}
          wildPokemon={this.state.wildPokemon}
        />
      );
    } else {
      return (
        <p>
          A wild {this.state.wildPokemon.name} appeared! Try to catch the
          pokemon or run away!
        </p>
      );
    }
  };

  displayPokemon = () => {
    if (this.state.caught === true) {
      return <img src={Pokeball} alt="pokeball" className="pokeball-IMG" />;
    } else if (this.state.inPokeball === false) {
      return (
        <img
          src={this.state.wildPokemon.front_img}
          alt={this.state.wildPokemon.name}
          className={
            this.state.thrownOnce === false
              ? "pokemon-battle-slide"
              : "pokemon-battle-pic"
          }
        />
      );
    } else {
      return (
        <img
          src={PendingPokeball}
          alt={this.state.wildPokemon.name}
          className="pokeball-IMG"
        />
      );
    }
  };

  render() {
    return this.state.selected === "run" || this.state.attempts === -1 ? (
      <Redirect to="/home" />
    ) : (
      <div className="container catch-margin">
        <div className="row">
          <div className="col-3">
            <h2 className="wild-pokemon-name pokemon-battle-slide">
              {this.state.wildPokemon.name}
            </h2>
            <p className="wild-pokemon-hp pokemon-battle-slide">
              HP: {this.state.wildPokemon.hp}
            </p>
          </div>
          <div className="col-3" />
          <div className="col-3">{this.displayPokemon()}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3">
            <img
              src={this.state.trainer.image}
              alt={this.state.trainer.name}
              className="trainer-battle-IMG"
            />
          </div>
          <div className="col-3" />
          <div className="col-3 trainer-info">
            <h2 className="trainer-battle-name">{this.state.trainer.name}</h2>
          </div>
        </div>
        <div className="row justify-content-center battle-text-box">
          <div className="col-5 ">{this.displayMessage()}</div>
          <div className="col-3 ">
            <CatchButtons run={this.run} throwPokeball={this.throwPokeball} />
          </div>
        </div>
      </div>
    );
  }
}

export default Catch;
