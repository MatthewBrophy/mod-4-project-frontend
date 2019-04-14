import React, { Component, Fragment } from "react";

class Trainer extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }


  render(){
    return(
      <Fragment>
        <br></br>
        <h1>Trainer!</h1>
        <div className="row col-8" >
            <p>You are {this.props.trainer.age} years old</p>
            <p>You're enemy is {this.props.trainer.enemy} :(</p>
            <img src={this.props.trainer.image} alt='trainer' />
        </div>
      </Fragment>
    )
  }
}
export default Trainer;
