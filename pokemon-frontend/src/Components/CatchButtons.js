import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="justify-content-center align-items-center">
          <button
            className="table battle-button"
            name="pokeball"
            onClick={ev => this.props.throwPokeball(ev)}
          >
            throw pokeball
          </button>
          <br />
          <button
            className="table battle-button"
            name="run"
            onClick={() => this.props.run()}
          >
            run
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
