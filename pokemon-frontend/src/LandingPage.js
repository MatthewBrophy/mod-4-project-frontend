import React, { Component } from "react";
import MainImage from "./images/maxresdefault.jpg";
import Home from "./Home";
import SignUp from "./SignUp";
import App from "./App";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    console.log(this.props)
  }

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        <img src={MainImage} alt="" />
        <br />

        <Link to="/sign-up">Sign Up!</Link>
        <Route exact path="/sign-up" component={() => <SignUp />} />
        <Link to="/login">Log In!</Link>
        <Route exact path="/login" component={() => <Login />} />
      </div>
    );
  }
}

export default LandingPage;
