import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      name: "n/a",
      hometown: "n/a",
      age: 0,
      image: "n/a",
      enemy: "n/a",
      input: 'name',
      index: 0,
      questions: ["First, what is your name?",
      "Second, what is your hometown?",
      "Third, what is your age?",
      "Fourth, give me a url for your image?",
      "Fifth, what is your enemy?"]
    }
  }

  submit = (ev) => {
    console.log(ev.target.value)
    console.log(ev.target.name)
    this.setState({
      [ev.target.name]: ev.target.value
    })
    this.setState((prevState) => ({
      index: prevState.index + 1
    }))
  }

  displayContent = () => {

  }

  render(){
    return(
      <div>
        <label>{this.state.question}</label>
        <form onSubmit={() => this.submit()}>
          <input name={this.state.question} type='text' />
          <input type='submit' />
        </form>
        <div>
          <p>{this.state.question[this.state.index]}</p>
        </div>
        <div>
          <img src="/images/ash.png" />
        </div>
      </div>
    )
  }
}

export default Login;
