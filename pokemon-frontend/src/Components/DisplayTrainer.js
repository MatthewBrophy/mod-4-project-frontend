import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }

  editClick = () => {
    console.log("edit trainer")
  }

  deleteClick = () => {
    console.log("delete trainer")
  }

  handleChange = (ev) => {
    console.log(ev.target.name)
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("change trainer info")
  }


  render(){
    return(
      <Fragment>
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
export default EditTrainer;
