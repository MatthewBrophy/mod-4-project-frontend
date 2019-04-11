import React, { Component } from 'react';

class Pokemon extends Component {

  render(){
    return(
      <div>
        <h1>Who's that Pokemon? It's {this.props.pokemon.name}</h1>
        <img src={this.props.pokemon.front_img} alt={this.props.pokemon.name} />

        <p>HP: {this.props.pokemon.hp}</p>
        <p>Weight: {this.props.pokemon.weight}</p>
      </div>
    )
  }
}

export default Pokemon;

// t.string "name"
// t.string "front_img"
// t.string "back_img"
// t.integer "weight"
// t.integer "hp"
