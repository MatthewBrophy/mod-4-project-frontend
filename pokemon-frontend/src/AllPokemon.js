import React, { Component } from 'react';
import Pokemon from './Pokemon'

class AllPokemon extends Component {
  constructor(props){
    super(props)
  }

  displayPokemon = () => {
    return this.props.allPokemon.map( pokemon => {
      return <li onClick={() => console.log("go to pokemon show page")}>{pokemon.name}</li>
    })
  }

  handleClick = () => {
    console.log("supposed to go to pokemon show page")
  }

  render(){
    return(
      <div>
        <h1> All Pokemon! </h1>
        <ul>
          {this.displayPokemon()}
        </ul>
      </div>
    )
  }
}

export default AllPokemon;
