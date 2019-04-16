import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  constructor(props){
    super(props)

    console.log(props)
  }

  handleChange = (ev) => {
    console.log(ev.target.name)
  }

  render(){
    return(
      <Fragment>
          <form onSubmit={(ev) => this.props.updateTrainer(ev)}>
            <label>Age:</label>
            <input name="age" type="text" value={this.props.trainer.age} onChange={(ev) => this.handleChange(ev)}></input>
            <label>Enemy:</label>
            <input name="enemy" type="text" value={this.props.trainer.enemy} onChange={(ev) => this.handleChange(ev)}></input>
            <label>Image:</label>
            <input name="image" type="text" value={this.props.trainer.image} onChange={(ev) => this.handleChange(ev)}></input>
            <input type="submit" onChange={(ev) => this.handleChange(ev)}></input>
          </form>
      </Fragment>
    )
  }
}
export default EditTrainer;
