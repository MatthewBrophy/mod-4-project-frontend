import React, { Component } from "react";

class Battle extends Component {
  constructor(){
    super()

    this.state = {
      
    }
  }

  getRandom(){
    let randomNum = Math.floor(Math.random() * 101);
    let randPokemon = this.props.allPokemon[randomNum]
    console.log(randPokemon)
  }


  render() {
    return (
      <div className="card">
        <div>
          <h2>Wild Pokemon Name</h2>
          <p>HP:</p>
          <div> HP graphic </div>
          <img src="enemy pokemon" alt="enemy pokemon"/>
        </div>
        <div>
          <img src="current pokemon" alt="current pokemon"/>
          <h2>Current Pokemon Name</h2>
          <p>HP:</p>
          <div> HP graphic </div>
        </div>
        <div>
          Text about attacks
        </div>
      </div>
    );
  }
}

export default Battle;
