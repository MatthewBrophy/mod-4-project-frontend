import React, { Component, Fragment } from "react";

class Nickname extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.createTeam(this.props.wildPokemon)
  }

  render(){
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            <h4> You have caught {this.props.wildPokemon.name}! </h4>
            <h4> Give it a nickname. </h4>
          </div>
          <div className="row">
            <form onSubmit={(ev) => this.props.updateTrainer(ev)} className="form-horizontal">
              <input name="nickname" type="text" ></input>
              <input type="submit" className="button" onSubmit={(ev) => this.handleSubmit(ev)}></input>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Nickname;
