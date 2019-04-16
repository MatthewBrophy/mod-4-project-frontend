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
      status: 0
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
      .then(res => {
        this.setState({ status: res.status });
        if (res.status !== 200) {
          //console.log("bad")
          alert("Username already exists!");
        } else {
          return res.json();
        }
      })
      .then(
        newTrainer => (
          this.setState({ trainer: newTrainer }),
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
    return this.state.status === 200 ? (
      <Redirect to="/choose-starter" />
    ) : (
      <div>
        <div className="container login-sign-up-margin">
          <div className="row justify-content-center align-items-center">
            <div className="row justify-content-center">
              <form
                onSubmit={ev => this.submitForm(ev)}
                className="form-horizontal text-right col-12"
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

                <input type="submit" className="button" />
              </form>
            </div>
            <br />
            <div className="col-4 sign-up-image-container">
              <img className="sign-up-image" src={Ash} />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 textBox">
              <p>Tell me about yourself!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
