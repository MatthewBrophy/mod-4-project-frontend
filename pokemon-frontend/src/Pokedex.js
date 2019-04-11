import React, { Component } from 'react'

class Pokedex extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: 'team'
    }

    displayContent()
  }

  displayContent = () => {
    if (this.state.selected === 'team') {
      return <Team />
    }
    else if (this.state.selected === 'all'){
      return <AllPokemon />
    }
    else {
      return <Trainer />
    }
  }



  render(){
    return(
      <div>
        <div>
        {this.displayContent()}
        </div>
        <div>
          <button name="team"></button>
          <button name="all"></button>
          <button name="trainer"></button>
        </div>
      </div>
    )
  }
}
export default Pokedex;
