import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Ash from "../images/ash.png";
import Home from "../Containers/Home";

class ChooseStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon_index: 0,
      redirect: false,
      starters: []
    }

    let starters_id = [1,4,7]
    starters_id.forEach(starter => {
      this.getPokemon(starter)
    })
  }

  getPokemon = (starter) => {
    let url = `http://localhost:3000/api/v1/pokemons/${starter}`;
    fetch(url)
    .then(data => data.json())
      .then(
        foundPokemon => (
          this.setState((prevState) => ({
            starters: [foundPokemon, ...prevState.starters]
          }))
        )
      )
  };

  displayStarters = () => {
    return this.state.starters.map((pokemon, index) => {
      return (
      <div>
      <img src={pokemon.front_img} />
        <input
          onChange={ev => this.handleChange(ev)}
          name="starters"
          type="radio"
          value={index}
        />
      </div>
      )
    })
  }

  submitForm = ev => {
    ev.preventDefault();
    this.setState({
      redirect: true
    });
    this.props.setTeam(this.state.starters[this.state.pokemon_index]);
    console.log(this.state.redirect)
  };

  handleChange = ev => {
    this.setState({
      pokemon_index: ev.target.value
    });
  };

  render() {
    return this.state.redirect === true ? (
      <Redirect to="/Home" />
    ) : (
      <div>
        <div className="row justify-content-center">
        <label>Which Pokemon will you choose?</label>
          <form
            onSubmit={(ev) => this.submitForm(ev)}
            className="text-right"
          >
          {this.displayStarters()}
            <br />
            <input type="submit" />
          </form>
        </div>
        <br />
        <div className="row justify-content-center align-items-center">
          <img src={Ash} />
        </div>
      </div>
    );
  }
}

export default ChooseStarter;
