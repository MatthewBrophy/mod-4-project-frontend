import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.trainer.name}</h1>
        <div className="row col-8">
          <p>You are {this.props.trainer.age} years old</p>
          <p>You're enemy is {this.props.trainer.enemy} :(</p>
          <img src={this.props.trainer.image} alt="trainer" />
        </div>
        <button onClick={() => this.props.editClick()}>edit trainer</button>
        <button onClick={() => this.props.deleteTrainer()}>
          delete trainer
        </button>
      </Fragment>
    );
  }
}
export default EditTrainer;
