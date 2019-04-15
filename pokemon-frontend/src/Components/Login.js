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
      status: 0
    }
  }

  getTrainer = () => {
    let url = `http://localhost:3000/api/v1/trainers/name/${this.state.name}`;
    fetch(url)
      .then(res => {
        this.setState({ status: res.status })
        if (res.status !== 200){
          //console.log("bad")
          alert("Username does not exist!")

        } else {
        return res.json()
        }
      })
      .then(
        foundTrainer => (
          //console.log(foundTrainer),
          this.setState({ trainer: foundTrainer}),
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
