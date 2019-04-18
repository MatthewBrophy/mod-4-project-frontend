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

  componentDidMount(){
    this.placePokemon()
  }

  placePokemon = () => {
    var div = document.getElementById("map");
    let boundaries = div.getBoundingClientRect();
    console.log("boundaries", boundaries)
    this.state.pokemon.forEach((poke) => {
      let randomX = Math.floor((Math.random() * boundaries.height) + boundaries.top)
      let randomY = Math.floor((Math.random() * boundaries.width) + boundaries.left)
      console.log("x", randomX)
      console.log("y", randomY)

      let pokeStyle = {
        top: `${randomX}px`,
        left: `${randomY}px`,
        margin: '10px',
        height: '10px'
      };
      let img = document.createElement('img')
      img.src = poke.front_img
      img.style.height = "80px"
      img.style.position = "absolute"
      img.style.top = `${randomX}px`
      img.style.left = `${randomY}px`
      img.alt = poke.name
      //img.addEventListener("click", this.setWildPokemon(poke))
      //let img = onClick={() => this.props.setWildPokemon(poke)}/>
      div.appendChild(img)
    })
  }

  getFiveRandomPokemon = () => {
    let pokemon = []
    for (let i = 0; i < 5; i ++){
      let poke = this.props.pokedex[Math.floor(Math.random() * 151)]
      console.log(poke)
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
        <div name="map" id="map" className="map">
        </div>
      </div>
    );
  }
}

export default PokeMap;

//<img src="https://vignette.wikia.nocookie.net/pokemoncrater/images/b/bc/Grass_Type.jpg/revision/latest?cb=20100315205316" alt="map" />
