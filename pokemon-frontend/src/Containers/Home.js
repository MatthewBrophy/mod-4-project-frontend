import React, { Component } from "react";
import Pokedex from "../Components/Pokedex";
import Trainer from "../Components/Trainer";
import Catch from "./Catch";
import Team from "../Components/Team";
import { Redirect } from "react-router-dom";
import PokedexButtons from "../Components/PokedexButtons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: this.props.pokedex,
      trainersPokemon: [],
      trainer: this.props.trainer,
      selected: "pokedex",
      button: ""
    };
    this.getTeam();
  }

  getPokemon = pokemon => {
    let pokemonId = pokemon.pokemon_id;
    let url = `http://localhost:3000/api/v1/pokemons/${pokemonId}`;
    fetch(url)
      .then(data => data.json())
      .then(foundPokemon => {
        //console.log("fetched pokemon", foundPokemon)
        this.setState(prevState => ({
          trainersPokemon: [foundPokemon, ...prevState.trainersPokemon]
        }));
      });
  };

  getTeam = () => {
    let url = `http://localhost:3000/api/v1/teams/find/${
      this.state.trainer.id
    }`;
    fetch(url)
      .then(data => data.json())
      .then(team => {
        //console.log(team)
        team.forEach(pokemon => {
          this.getPokemon(pokemon);
        });
      });
  };

  displayContent = () => {
    if (this.state.selected === "pokedex") {
      return (
        <div className="container pokedex-display">
          <div className="row justify-content-center align-items-center first-home-box">
            <Pokedex pokedex={this.state.pokedex} />
          </div>
        </div>
      );
    } else if (this.state.selected === "team") {
      return (
        <div className="container pokedex-display">
          <div className="row justify-content-center align-items-center first-home-box">
            <Team trainersPokemon={this.state.trainersPokemon} />
          </div>
        </div>
      );
    } else if (this.state.selected === "trainer") {
      return (
        <div className="container pokedex-display">
          <div className="row justify-content-center align-items-center first-home-box">
            <Trainer
              setTrainer={trainer => this.props.setTrainer(trainer)}
              trainer={this.props.trainer}
            />
          </div>
        </div>
      );
    } else {
      return <Redirect to="/map" />;
    }
  };

  handleClick = ev => {
    this.setState({
      selected: ev.target.name
    });
  };

  selectionSelector = ev => {
    this.setState({ button: "Catch 'em All!!!" });
  };

  removeSelector = ev => {
    this.setState({ button: "" });
  };

  render() {
    return (
      <div className="container ">
        <p className="catchem-display">{this.state.button}</p>
        <h2 className="row justify-content-center align-items-center first-home-box">
          Welcome {this.state.trainer.name} from {this.state.trainer.hometown}!
        </h2>
        <div className="pokedex-background img-fluid">
          <div className="row">
            <div className="col-8">
              <div className="row">{this.displayContent()}</div>
              <button
                name="catch"
                className="button catch-button"
                onClick={() => this.setState({ selected: "catch" })}
                onMouseOver={ev => this.selectionSelector(ev)}
                onMouseLeave={ev => this.removeSelector(ev)}
              >
                Catch 'em All
              </button>
            </div>
            <div className="col-4 justify-content-center align-items-center pokedex-right">
              <PokedexButtons handleClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
