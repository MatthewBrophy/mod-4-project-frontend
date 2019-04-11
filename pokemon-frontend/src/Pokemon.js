import React, { Component } from 'react';

class Pokemon extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>  Pokemon! </h1>
        <ul>
          {this.displayPokemon()}
        </ul>
      </div>
    )
  }
}

export default Pokemon;
