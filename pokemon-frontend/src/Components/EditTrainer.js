import React, { Component, Fragment } from "react";

class EditTrainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hometown: this.props.trainer.hometown,
      age: this.props.trainer.age,
      rival: this.props.trainer.rival,
      image: this.props.trainer.image
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1 className="edit-trainer-heading">Edit Trainer Info!</h1>
          </div>
          <div className="row col-8">
            <form
              onSubmit={ev => this.props.updateTrainer(ev)}
              className="form-horizontal text-right edit-trainer-form"
            >
              <label>Hometown:</label>
              <input
                className="edit-trainer-input"
                name="hometown"
                type="text"
                value={this.state.hometown}
                onChange={ev => this.handleChange(ev)}
              />
              <br />
              <label>Age:</label>
              <input
                className="edit-trainer-input"
                name="age"
                type="text"
                value={this.state.age}
                onChange={ev => this.handleChange(ev)}
              />
              <br />
              <label>Rival:</label>
              <input
                className="edit-trainer-input"
                name="rival"
                type="text"
                value={this.state.rival}
                onChange={ev => this.handleChange(ev)}
              />
              <br />
              <label>Image:</label>
              <input
                className="edit-trainer-input"
                name="image"
                type="text"
                value={this.state.image}
                onChange={ev => this.handleChange(ev)}
              />
              <input type="submit" className="edit-submit-button" />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default EditTrainer;
