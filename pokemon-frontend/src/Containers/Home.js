import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: this.props.trainer
    };
  }
  render() {
    return <div>{console.log(this.state.trainer)}</div>;
  }
}

export default Home;
