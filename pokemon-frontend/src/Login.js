import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      name: "n/a",
      hometown: "n/a",
      age: 0,
      image: "n/a",
      enemy: "n/a"
    }
  }

  submit = (ev) => {
    console.log(ev.target.value)
    console.log(ev.target.name)
    this.setState({
      [ev.target.name] = ev.target.value
    })
  }

  render(){
    return(
      <div>
        <div>
          <label>Name</label>
          <form onSubmit={() => this.submit()}>
            <input name="name" type='text' />
            <input type='submit' />
          </form>
          <label>Hometown</label>
          <form onSubmit={() => this.submit()}>
            <input name="hometown" type='text' />
            <input type='submit' />
          </form>
          <label>Age</label>
          <form onSubmit={() => this.submit()}>
            <input name="age" type='text' />
            <input type='submit' />
          </form>
          <label>image</label>
          <form onSubmit={() => this.submit()}>
            <input name="image" type='text' />
            <input type='submit' />
          </form>
          <label>Enemy</label>
          <form onSubmit={() => this.submit()}>
            <input name="enemy" type='text' />
            <input type='submit' />
          </form>
        </div>
        <div>
          <p>text goes here</p>
        </div>
        <div>
          <img src="/images/ash.png" />
        </div>
      </div>
    )
  }
}

export default Login;
