import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Containers/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: {}
    };
  }

  setTrainer = newTrainer => {
    this.setState({ trainer: newTrainer });
  };

  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={() => <LandingPage />} />
              <Route
                path="/sign-up"
                component={() => <SignUp setTrainer={this.setTrainer} />}
              />
              <Route path="/login" component={() => <Login />} />
              <Route
                path="/home"
                component={() => <Home trainer={this.state.trainer} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
