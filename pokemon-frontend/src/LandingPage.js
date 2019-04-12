import React, { Component } from "react";
import MainImage from "./images/maxresdefault.jpg";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Login from "./Login";

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
        <Router>
          <div>
            <NavLink to="/login">Login</NavLink>
            <Route path="/login" render={() => <Login />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default LandingPage;
