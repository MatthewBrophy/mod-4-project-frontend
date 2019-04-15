import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Ash from "../images/ash.png";
import Home from "../Containers/Home";

class ChooseStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_pokemon: {},
      redirect: false,
      starters: [
        {
        back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        hp: 39,
        id: 4,
        name: "charmander",
        weight: 85
      },
      {
        back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        hp: 45,
        id: 1,
        name: "bulbasaur",
        weight: 69
      },
      {
        back_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
        front_img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        hp: 44,
        id: 7,
        name: "squirtle",
        weight: 90
      }]
    };

    console.log(this.state.starters)
  }

  submitForm = ev => {
    ev.preventDefault();
    this.setState({ redirect: true });
    //this.props.setTeam(this.state.starters[this.state.pokemon_index]);
  };

  handleChange = ev => {
    this.setState({
      selected_pokemon: this.state.starters[ev.target.value]
    });
    console.log(this.state.selected_pokemon)
  };

  render() {
    return this.state.redirect === true ? (
      <Redirect to="/Home" />
    ) : (
      <div>
        <form onSubmit={ev => this.submitForm(ev)}>
          <label>Name:</label>
          <div>
           <img src={this.state.starters[0].front_img} />
             <input
              onChange={(ev) => this.handleChange(ev)}
               name="starters"
               type="radio"
               value="0"
             />
         </div>
         <div>
          <img src={this.state.starters[1].front_img} />
            <input
              onChange={(ev) => this.handleChange(ev)}
              name="starters"
              type="radio"
              value="1"
            />
        </div>
        <div>
         <img src={this.state.starters[2].front_img} />
           <input
            onChange={(ev) => this.handleChange(ev)}
             name="starters"
             type="radio"
             value="2"
           />
       </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ChooseStarter;
