import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1>{this.props.trainer.name}</h1>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <p>You are {this.props.trainer.age} years old</p>
              <p>You're enemy is {this.props.trainer.enemy} :(</p>
            </div>
            <div className="col">
              <img src={this.props.trainer.image} alt="trainer" />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <button onClick={() => this.props.editClick()}>edit trainer</button>
            <button onClick={() => this.props.deleteTrainer()}>delete trainer</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default EditTrainer;
