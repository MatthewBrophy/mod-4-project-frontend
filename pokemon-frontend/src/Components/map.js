import React, { Component, NavLink} from "react";
import MapCSS from "../map.css";
import { Redirect } from "react-router-dom";
import Catch from "../Containers/Catch";

class PokeMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: this.getFiveRandomPokemon(),
      selectedPokemon: null,
      redirect: false
    };
  }

  componentDidMount() {
    this.placePokemon();
  }

  placePokemon = () => {
    var div = document.getElementById("map");
    let boundaries = div.getBoundingClientRect();
    console.log("boundaries", boundaries);
    this.state.pokemon.forEach(poke => {
      let randomX = Math.floor(
        Math.random() * (boundaries.height - 100) + boundaries.top + 20
      );
      let randomY = Math.floor(
        Math.random() * (boundaries.width - 100) + boundaries.left + 20
      );
      console.log(poke.name);
      console.log("x", randomX);
      console.log("y", randomY);

      let img = document.createElement("img");
      img.src = poke.front_img;
      img.style.height = "80px";
      img.style.position = "absolute";
      img.style.top = `${randomX}px`;
      img.style.left = `${randomY}px`;
      img.alt = poke.name;
      img.addEventListener("click", () => {
        this.setWildPokemon(poke);
      });
      div.appendChild(img);
    });
  };

  getFiveRandomPokemon = () => {
    let pokemon = [];
    for (let i = 0; i < 5; i++) {
      let poke = this.props.pokedex[Math.floor(Math.random() * 151)];
      console.log(poke);
      pokemon.push(poke);
    }
    return pokemon;
  };

  setWildPokemon = pokemon => {
    this.setState({ selectedPokemon: pokemon, redirect: true });
  };

  decideRedirect = () => {
    if (this.state.selectedPokemon !== null) {
      return <Catch
        wildPokemon={this.state.selectedPokemon}
        trainer={this.props.trainer}
        createTeam={this.props.createTeam}
      />
    } else {
      return <Redirect to="/home" />
    }
  }

  handleClick = () => {
    this.setState({redirect: true})
  }

  render() {
    return (this.state.redirect === true) ? (
      this.decideRedirect()
    ) : (
      <div className="container">
      <div className="row justify-content-center login-sign-up-margin">
        <div name="map" id="map" className="map" />
      </div>
      <div className="row justify-content-center">
        <button className="button" onClick={()=> this.handleClick()}>Run Away</button>
      </div>
    </div>
  );
  }
}

export default PokeMap;
