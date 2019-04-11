import React, { Component } from 'react'
import Team from './Team'
import AllPokemon from './AllPokemon'
import Trainer from './Trainer'

class Pokedex extends Component {
  constructor(props){
    super(props)

    this.state = {
      selected: 'team'
    }

    //this.displayContent()
  }

  displayContent = () => {
    if (this.state.selected === 'team') {
      return <Team team={this.props.team}/>
      //return <h1>Team</h1>
    }
    else if (this.state.selected === 'all'){
      return <AllPokemon allPokemon={this.props.allPokemon} />
      //return <h1>All</h1>
    }
    else {
      return <Trainer trainer={this.props.trainer}/>
      //return <h1>Trainer</h1>
    }
  }

  handleClick = (ev) => {
    //console.log(ev.target.name)
    this.setState({
      selected: ev.target.name
    })
  }

  render(){
    return(
      <div>
        <div>
        {this.displayContent()}
        </div>
        <div>
          <label>Team</label>
          <button name="team" onClick={(ev) => this.handleClick(ev)}></button>
          <label>All</label>
          <button name="all" onClick={(ev) => this.handleClick(ev)}></button>
          <label>Trainer</label>
          <button name="trainer" onClick={(ev) => this.handleClick(ev)}></button>
        </div>
      </div>
    )
  }
}
export default Pokedex;
