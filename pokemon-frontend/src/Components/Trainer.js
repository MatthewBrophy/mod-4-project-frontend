import React, { Component, Fragment } from "react";

class Trainer extends Component {
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
        <br></br>
        <h1>Trainer!</h1>
        <div className="row col-8" >
            <p>You are {this.props.trainer.age} years old</p>
            <p>You're enemy is {this.props.trainer.enemy} :(</p>
            <img src={this.props.trainer.image} alt='trainer' />
        </div>
        <button onClick={() => this.editClick()}>edit trainer</button>
        <button onClick={() => this.deleteClick()}>delete trainer</button>
        <div>
          <form onSubmit={(ev) => this.handleSubmit(ev)}>
            <label>Age:</label>
            <input name="age" type="text" onChange={(ev) => this.handleChange(ev)}></input>
            <label>Enemy:</label>
            <input name="enemy" type="text" onChange={(ev) => this.handleChange(ev)}></input>
            <label>Image:</label>
            <input name="image" type="text" onChange={(ev) => this.handleChange(ev)}></input>
            <input type="submit" onChange={(ev) => this.handleChange(ev)}></input>
          </form>
        </div>
      </Fragment>
    )
  }
}
export default Trainer;
