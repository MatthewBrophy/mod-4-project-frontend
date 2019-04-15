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
        <button >edit trainer</button>
        <form>
          <label>Age:</label>
          <input type="text"></input>
          <label>Enemy:</label>
          <input type="text"></input>
          <label>Image:</label>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </Fragment>
    )
  }
}
export default Trainer;
