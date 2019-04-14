import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return(
      <div>
        <button name="pokedex" onClick={(ev) => this.props.handleClick(ev)}>All Pokemon</button>
        <button name="trainer" onClick={(ev) => this.props.handleClick(ev)}>trainer info</button>
        <button name="team" onClick={(ev) => this.props.handleClick(ev)}>team</button>
      </div>
    )
  }
}

export default Nav;
