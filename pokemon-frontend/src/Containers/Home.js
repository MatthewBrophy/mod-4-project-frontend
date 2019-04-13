import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{console.log(this.props.trainer)}</div>;
  }
}

export default Home;
