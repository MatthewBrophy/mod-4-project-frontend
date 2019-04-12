import React, { Component } from "react";

class Team extends Component {
  displayPokemon = () => {
    return this.props.team.map(pokemon => {
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
