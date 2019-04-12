import React, { Component } from "react";
import Ash from "./images/ash.png";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      input: ["name"],
      index: 0,
      questions: ["First, what is your name?"]
    };

    console.log(this.props)
  }

  findTrainer = () => {
    let url = `http://localhost:3000/api/v1/trainers/name/${this.state.name}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.props.setTrainer(json)
      });
  };

  submitForm = ev => {
    ev.preventDefault();

    if (this.state.input[this.state.index] === "password") {
      this.findTrainer();
    }
    this.setState({
      [ev.target.name]: ev.target.value
    });
    this.setState(prevState => ({
      index: prevState.index + 1
    }));

    console.log(this.state);
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <label>{this.state.input[this.state.index]}</label>
        <form onSubmit={ev => this.submitForm(ev)}>
          <input
            onChange={ev => this.handleChange(ev)}
            name={this.state.input[this.state.index]}
            type="text"
          />
        <Link to="/home"><input type="submit" /></Link>
        <Route exact path="/home" component={() => <Home />} />
        </form>
        <div>
          <p>{this.state.questions[this.state.index]}</p>
        </div>
        <div>
          <img src={Ash} />
        </div>
      </div>
    );
  }
}

export default Login;
