import React, { Component } from "react";
import MapCSS from "../map.css";
import { Redirect } from "react-router-dom";
import Catch from "../Containers/Catch"

class PokeMap extends Component {
  constructor(props){
    super(props)

    this.state = {
      pokemon: this.getFiveRandomPokemon(),
      selectedPokemon: null
    }
  }

  getFiveRandomPokemon = () => {
    let pokemon = []
    let containerSize = 230
    for (let i = 0; i < 5; i ++){
      let poke = this.props.pokedex[Math.floor(Math.random() * 151)]
      console.log(poke)
      let randomX = Math.floor(Math.random() * containerSize)
      let randomY = Math.floor(Math.random() * containerSize)
      console.log("x", randomX)
      console.log("y", randomY)

      let pokeStyle = {
        position: 'relative',
        top: `${randomX}px`,
        left: `${randomY}px`,
        height: '50px'
      };
      poke.style = pokeStyle
      pokemon.push(poke)
    }
    return pokemon
  }

  setWildPokemon = (pokemon) => {
    this.setState({selectedPokemon: pokemon})
  }

  render() {
    return this.state.selectedPokemon !== null ? (
      <Catch wildPokemon={this.state.selectedPokemon} trainer={this.props.trainer} createTeam={this.props.createTeam}/>
    ) : (
      <div className="row justify-content-center login-sign-up-margin">
        <div className="map">
        {this.state.pokemon.map((poke, index) => {
          return (
            <div>
              <img src={poke.front_img} name={index} style={poke.style} onClick={(ev) => this.setWildPokemon(this.state.pokemon[ev.target.name])}/>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default PokeMap;

//<img src="https://vignette.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?cb=20100315205316" alt="map" />
