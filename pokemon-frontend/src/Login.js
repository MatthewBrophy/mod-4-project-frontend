import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      hometown: "",
      age: 0,
      image: "",
      enemy: "",
      input: ['name', 'hometown', 'age', 'image', 'enemy'],
      index: 0,
      questions: ["First, what is your name?",
      "Second, what is your hometown?",
      "Third, what is your age?",
      "Fourth, give me a url for your image?",
      "Fifth, what is your enemy?"]
    }
  }

  submitForm = (ev) => {
    ev.preventDefault()

    // if () { login to already create user
    //  redirect to home
    // }
    // else {
    // continue
    // }
    this.setState({
      [ev.target.name]: ev.target.value
    })
    this.setState((prevState) => ({
      index: prevState.index + 1
    }))

    console.log(this.state)
  }

  handleChange = (ev) => {
    this.setState({
     [ev.target.name]: ev.target.value
   });
  }

  render(){
    return(
      <div>
        <label>{this.state.input[this.state.index]}</label>
        <form onSubmit={(ev) => this.submitForm(ev)}>
          <input onChange={(ev) => this.handleChange(ev)} name={this.state.input[this.state.index]} type='text' />
          <input type='submit' />
        </form>
        <div>
          <p>{this.state.questions[this.state.index]}</p>
        </div>
        <div>
          <img src="/images/ash.png" />
        </div>
      </div>
    )
  }
}

export default Login;
