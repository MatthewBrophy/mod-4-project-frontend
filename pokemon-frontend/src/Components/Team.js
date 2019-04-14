import React, { Component } from "react";

class Team extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }

  displayPokemon = () => {
    return this.props.trainersPokemon.map(pokemon => {
      return <li onClick={() => this.handleClick()}> pokemon </li>;
    });
  };

  handleClick = () => {
    console.log("supposed to go to pokemon show page");
  };

  render() {
    return (
      <div>
        <h1> Your Pokemon! </h1>

        {this.displayPokemon()}
      </div>
    );
  }
}

export default Team;
