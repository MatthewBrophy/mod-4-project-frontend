import React, { Component } from "react";
import MainImage from "./images/maxresdefault.jpg";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./Login";
import App from "./App";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        <img src={MainImage} alt="" />
        <br />

        <Link to="/login">Login!</Link>
        <Route exact path="/login" component={() => <Login />} />
      </div>
    );
  }
}

export default LandingPage;
