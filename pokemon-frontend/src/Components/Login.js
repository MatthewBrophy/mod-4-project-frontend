import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Ash from "../images/ash.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trainer: {},
      status: 0
    };
  }

  getTrainer = () => {
    let url = `http://localhost:3000/api/v1/trainers/name/${this.state.name}`;
    fetch(url)
      .then(res => {
        this.setState({ status: res.status });
        if (res.status !== 200) {
          alert("Username does not exist!");
        } else {
          return res.json();
        }
      })
      .then(
        foundTrainer => (
          this.setState({ trainer: foundTrainer }),
          this.props.setTrainer(foundTrainer)
        )
      );
  };

  submitForm = ev => {
    ev.preventDefault();
    this.getTrainer();
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return this.state.status === 200 ? (
      <Redirect to="/home" />
    ) : (
      <div className="container login-sign-up-margin">
        <div className="row  justify-content-center align-items-center">
          <div className="col-4 textBox">
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
              <input type="submit" className="button" />
            </form>
          </div>
          <div className="col-3">
            <img src={Ash} alt="ash" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-7 textBox">
            <p>First, What is your name?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
