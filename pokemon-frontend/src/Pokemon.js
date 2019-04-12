import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pokemon.front_img} alt={this.props.pokemon.name} />
        <div>
          <h5>{this.props.pokemon.name}</h5>
          <p>
            HP: {this.props.pokemon.hp}
            <br />
            Weight: {this.props.pokemon.weight}
          </p>
        </div>
      </div>
    );
  }
}

export default Pokemon;

// t.string "name"
// t.string "front_img"
// t.string "back_img"
// t.integer "weight"
// t.integer "hp"

{
  /* <div>
  <h1>{this.props.pokemon.name}</h1>
  <img src={this.props.pokemon.front_img} alt={this.props.pokemon.name} />
  <p>HP: {this.props.pokemon.hp}</p>
  <p>Weight: {this.props.pokemon.weight}</p>
</div>; */
}
