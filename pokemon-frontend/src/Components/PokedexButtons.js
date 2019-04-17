import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: ""
    };
  }

  selectionSelector = ev => {
    if (ev.target.name === "pokedex") {
      this.setState({ currentSelection: "All Pokemon" });
    } else if (ev.target.name === "trainer") {
      this.setState({ currentSelection: "Trainer Info" });
    } else if (ev.target.name === "team") {
      this.setState({ currentSelection: "Your Team" });
    }

    console.log(this.state.currentSelection);
  };

  removeSelector = ev => {
    this.setState({ currentSelection: "" });
  };

  render() {
    return (
      <div className="button-container">
        <div className="justify-content-center align-items-center">
          <p className="pokedex-current-display">
            {this.state.currentSelection}
          </p>
          <button
            className="table first-button"
            name="pokedex"
            onClick={ev => this.props.handleClick(ev)}
            onMouseOver={ev => this.selectionSelector(ev)}
            onMouseLeave={ev => this.removeSelector(ev)}
          >
            All Pokemon
          </button>
          <br />
          <button
            className="table pokedex-button"
            name="trainer"
            onClick={ev => this.props.handleClick(ev)}
            onMouseOver={ev => this.selectionSelector(ev)}
            onMouseLeave={ev => this.removeSelector(ev)}
          >
            Trainer Info
          </button>
          <br />
          <button
            className="table pokedex-button"
            name="team"
            onClick={ev => this.props.handleClick(ev)}
            onMouseOver={ev => this.selectionSelector(ev)}
            onMouseLeave={ev => this.removeSelector(ev)}
          >
            Team
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;
