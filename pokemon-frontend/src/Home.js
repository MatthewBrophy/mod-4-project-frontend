import React, { Component } from 'react';
import Pokedex from './Pokedex'
import Nav from './Nav'

class Home extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div >
        <Pokedex allPokemon={this.props.allPokemon} team={this.props.team} trainer={this.props.trainer}/>
        <Nav />
      </div>
    );
  }
}

export default Home;
