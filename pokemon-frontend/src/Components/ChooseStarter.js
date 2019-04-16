import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ChooseStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPokemon: {},
      redirect: false,
      starters: [
        {
          back_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
          front_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          hp: 39,
          id: 4,
          name: "charmander",
          weight: 85
        },
        {
          back_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          front_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          hp: 45,
          id: 1,
          name: "bulbasaur",
          weight: 69
        },
        {
          back_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          front_img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          hp: 44,
          id: 7,
          name: "squirtle",
          weight: 90
        }
      ]
    };
  }

  submitForm = ev => {
    ev.preventDefault();
    this.props.selectStarter(this.state.selectedPokemon);
  };

  handleChange = ev => {
    this.setState({
      selectedPokemon: this.state.starters[ev.target.value]
    });
  };

  render() {
    return this.props.trainersPokemon.length > 0 ? (
      <Redirect to="/home" />
    ) : (
      <div className="container">
        <div className="row justify-content-center align-items-center col-14">
          <form
            onSubmit={ev => this.submitForm(ev)}
            className="form-check-inline"
          >
            <div className="choose-pokemon-box">
              <h4>{this.state.starters[0].name}</h4>
              <img
                className="choose-pokemon-pic"
                src={this.state.starters[0].front_img}
                alt={this.state.starters[0].name}
              />
              <input
                onChange={ev => this.handleChange(ev)}
                name="starters"
                type="radio"
                value="0"
              />
            </div>
            <div className="choose-pokemon-box">
              <h4>{this.state.starters[1].name}</h4>
              <img
                className="choose-pokemon-pic"
                src={this.state.starters[1].front_img}
                alt={this.state.starters[1].name}
              />
              <input
                onChange={ev => this.handleChange(ev)}
                name="starters"
                type="radio"
                value="1"
              />
            </div>
            <div className="choose-pokemon-box">
              <h4>{this.state.starters[2].name}</h4>
              <img
                className="choose-pokemon-pic"
                src={this.state.starters[2].front_img}
                alt={this.state.starters[2].name}
              />
              <input
                onChange={ev => this.handleChange(ev)}
                name="starters"
                type="radio"
                value="2"
              />
            </div>

            <input type="submit" className="choose-submit-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default ChooseStarter;
