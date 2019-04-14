import React, { Component } from 'react';

class Trainer extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }

  handleClick = () => {
    console.log("edit trainer")
  }

  render(){
    return(
      <div className="row col-8" id="pokedex">
        <div>
          <p>You are {this.props.trainer.age} years old</p>
          <p>You're enemy is {this.props.trainer.enemy} :(</p>
        </div>
        <img
          className="trainer-image"
          src={this.props.trainer.image}
          alt=""
        />
      </div>
    )
  }
}
export default Trainer;
