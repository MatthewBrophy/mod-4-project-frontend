import React, { Component } from 'react';

class Trainer extends Component {
  constructor(props){
    super(props)
  }

  handleClick = () => {
    console.log("edit trainer")
  }

  render(){
    return(
      <div>
        <div>
          <h1> Hello {this.props.trainer.name} from {this.props.trainer.hometown}! </h1>
          <p>You are {this.props.trainer.age} years old</p>
          <p>You're enemy is {this.props.trainer.enemy} :(</p>
        </div>
        <img src="https://img.rankedboost.com/wp-content/plugins/ice/pokemon/Luxio-Pokemon-Go.png" />
      </div>
    )
  }
}

export default Trainer;
