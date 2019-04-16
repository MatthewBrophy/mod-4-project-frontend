import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="justify-content-center align-items-center">
          <button
            className="table first-button"
            name="pokedex"
            onClick={ev => this.props.handleClick(ev)}
          >
            All Pokemon
          </button>
          <br />
          <button
            className="table button"
            name="trainer"
            onClick={ev => this.props.handleClick(ev)}
          >
            trainer info
          </button>
          <br />
          <button
            className="table button"
            name="team"
            onClick={ev => this.props.handleClick(ev)}
          >
            team
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;
