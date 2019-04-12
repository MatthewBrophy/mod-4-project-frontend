import React, { Component } from "react";
import Ash from "./images/ash.png";
import Home from "./Home"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hometown: "",
      age: 0,
      image: "",
      enemy: ""
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
      .then(json => {
        this.props.setTrainer(json)
      });
  };

  submitForm = ev => {
    ev.preventDefault();
    console.log(this.state);
    this.createTrainer();

  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <label>Tell me about yourself!</label>
        <form onSubmit={ev => this.submitForm(ev)}>
          <label>Name:</label>
          <input
            onChange={ev => this.handleChange(ev)}
            name="name"
            type="text"
          />
        <br></br>
        <label>Age:</label>
          <input
            onChange={ev => this.handleChange(ev)}
            name="age"
            type="text"
          />
          <br></br>
          <label>Hometown:</label>
          <input
            onChange={ev => this.handleChange(ev)}
            name="hometown"
            type="text"
          />
        <br></br>
        <label>Enemy:</label>
          <input
            onChange={ev => this.handleChange(ev)}
            name="enemy"
            type="text"
          />
        <br></br>
        <label>Image:</label>
          <input
            onChange={ev => this.handleChange(ev)}
            name="image"
            type="text"
          />
        <br></br>
        <Link to="/home"><input type="submit" /></Link>
        <Route exact path="/home" component={() => <Home />} />
        </form>

        <div>
          <img src={Ash} />
        </div>
      </div>
    );
  }
}

export default SignUp;
