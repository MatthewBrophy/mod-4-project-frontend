import React, { Component } from "react";
import Pokedex from "../Components/Pokedex";
import Trainer from "../Components/Trainer";
import Team from "../Components/Team";
import PokedexButtons from "../Components/PokedexButtons";

const AllPokemonURL = "http://localhost:3000/api/v1/pokemons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      trainersPokemon: [{
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
    ],
      trainer: this.props.trainer,
      selected: 'pokedex'
    };
    this.populatePokedex()
    console.log(this.state)
  }

  populatePokedex = () => {
    fetch(AllPokemonURL)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokedex: pokemon }));
  };

  displayContent = () => {
    if (this.state.selected === 'pokedex'){
      return <Pokedex pokedex={this.state.pokedex} />
    }
    else if (this.state.selected === 'team') {
      return <Team trainersPokemon={this.state.trainersPokemon}/>
    }
    else {
      return <Trainer trainer={this.props.trainer}/>
    }
  }

  handleClick = (ev) => {
    console.log(ev.target.name)
    this.setState({
      selected: ev.target.name
    })
  }

  render() {
    return (
      <div className="container">
        <div className=" row justify-content-center align-items-center first-home-box">
          <h4 className="row justify-content-center align-items-center">
            Welcome {this.state.trainer.name} from {this.state.trainer.hometown}
            !
          </h4>
          {this.displayContent()}
          <br></br>
          <PokedexButtons handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default Home;
