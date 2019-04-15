import React, { Component } from "react";
import Ash from "../images/ash.png";
import Home from "../Containers/Home";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hometown: "",
      age: 0,
      image: "",
      enemy: "",
      trainer: {},
      redirect: false
    };
  }

  createTrainer = () => {
    let url = "http://localhost:3000/api/v1/trainers";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        hometown: this.state.hometown,
        age: this.state.age,
        enemy: this.state.enemy,
        image: this.state.image
      })
    })
      .then(res => res.json())
      .then(
        newTrainer => (
          this.setState({ trainer: newTrainer, redirect: true }),
          this.props.setTrainer(newTrainer)
        )
      );
  };

  submitForm = ev => {
    ev.preventDefault();
    this.createTrainer();
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return this.state.redirect === true ? (
      <Redirect to="/choose-starter" />
    ) : (
      <div>
        <div className="row justify-content-center align-items-center">
          <label>Tell me about yourself!</label>
        </div>
        <div className="row justify-content-center">
          <form
            onSubmit={ev => this.submitForm(ev)}
            className="form-horizontal text-right"
          >
            <label>Name:</label>
            <input
              onChange={ev => this.handleChange(ev)}
              name="name"
              type="text"
            />
            <br />
            <label>Age:</label>
            <input
              onChange={ev => this.handleChange(ev)}
              name="age"
              type="text"
            />
            <br />
            <label>Hometown:</label>
            <input
              onChange={ev => this.handleChange(ev)}
              name="hometown"
              type="text"
            />
            <br />
            <label>Enemy:</label>
            <input
              onChange={ev => this.handleChange(ev)}
              name="enemy"
              type="text"
            />
            <br />
            <label>Image:</label>
            <input
              onChange={ev => this.handleChange(ev)}
              name="image"
              type="text"
            />
            <br />

            <input type="submit" />
          </form>
        </div>
        <br />
        <div className="row justify-content-center align-items-center">
          <img src={Ash} />
        </div>
      </div>
    );
  }
}

export default SignUp;
