import React, { Component } from "react";
import Pokedex from "./Pokedex";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        <Pokedex team={this.props.team}/>
        <Nav />
      </div>
    );
  }
}

export default Home;
