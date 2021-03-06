import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container trainer-display">
          <div className="row justify-content-center align-items-center">
            <div className="col-5 trainer-info">
              <p>You are {this.props.trainer.age} years old</p>
              <p>Your rival is {this.props.trainer.rival} :(</p>
            </div>
            <div className="col-3">
              <img
                src={this.props.trainer.image}
                alt="trainer"
                className="trainer-image"
              />
            </div>
          </div>
          <div className="row col-12 justify-content-center align-items-center">
            <button
              className="edit-trainer-button"
              onClick={() => this.props.editClick()}
            >
              Edit
            </button>
            <button
              className="delete-trainer-button"
              onClick={() => this.props.deleteTrainer()}
            >
              Delete
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default EditTrainer;
