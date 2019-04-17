import React, { Component, Fragment } from "react";

class Nickname extends Component {
  constructor(props){
    super(props)

    this.state = {
      nickname: ""
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.wildPokemon.nickname = this.state.nickname
    this.props.createTeam(this.props.wildPokemon)
    console.log("hi")
  }

  handleChange = (ev) => {
    console.log(ev.target.value)
    this.setState({nickname: ev.target.value})
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
            <form onSubmit={(ev) => this.handleSubmit(ev)} className="form-horizontal">
              <input name="nickname" type="text" onChange={(ev) => this.handleChange(ev)}></input>
              <input type="submit" className="button" ></input>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Nickname;
