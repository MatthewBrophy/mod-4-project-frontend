import React, { Component } from "react";
import Ash from "./images/ash.png";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hometown: "",
      age: 0,
      image: "",
      enemy: "",
      input: ["name", "hometown", "age", "image", "enemy"],
      index: 0,
      questions: [
        "First, what is your name?",
        "Second, what is your hometown?",
        "Third, what is your age?",
        "Fourth, give me a url for your image?",
        "Fifth, what is your enemy?"
      ]
    };
  }

  createTrainer = () => {
    let url = "http://localhost:3000/api/v1/trainers"
    fetch(url, {
      method: "POST",
      headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            hometown: this.state.hometown,
            age: this.state.age,
            enemy: this.state.enemy,
            image: this.state.image
        })
      })
      .then((res) => res.json())
      .then((json) => {
          console.log(json)
      });
  }

  submitForm = ev => {
    ev.preventDefault();

    if (this.state.input[this.state.index] === 'enemy') {
      this.createTrainer()
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
          <input type="submit" />
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
