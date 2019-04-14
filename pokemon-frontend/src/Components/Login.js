import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Ash from "../images/ash.png";
import Home from "../Containers/Home";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trainer: {},
      redirect: false
    }
  }

  getTrainer = () => {
    let url = "http://localhost:3000/api/v1/trainers/";
    fetch(url)
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
      <Redirect to="/Home" />
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

export default Login;
