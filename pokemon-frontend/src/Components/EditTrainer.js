import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  constructor(props){
    super(props)

    console.log(props)
    this.state = {
      hometown: this.props.trainer.hometown,
      age: this.props.trainer.age,
      enemy: this.props.trainer.enemy,
      image: this.props.trainer.image
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <Fragment>
          <form onSubmit={(ev) => this.props.updateTrainer(ev)}>
            <label>Hometown:</label>
            <input name="hometown" type="text" value={this.state.hometown} onChange={(ev) => this.handleChange(ev)}></input>
            <label>Age:</label>
            <input name="age" type="text" value={this.state.age} onChange={(ev) => this.handleChange(ev)}></input>
            <label>Enemy:</label>
            <input name="enemy" type="text" value={this.state.enemy} onChange={(ev) => this.handleChange(ev)}></input>
            <label>Image:</label>
            <input name="image" type="text" value={this.state.image} onChange={(ev) => this.handleChange(ev)}></input>
            <input type="submit" ></input>
          </form>
      </Fragment>
    )
  }
}
export default EditTrainer;