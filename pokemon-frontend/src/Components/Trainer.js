import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import EditTrainer from './EditTrainer'
import DisplayTrainer from './DisplayTrainer'

class Trainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      display: "none"
    }
  }

  editClick = () => {
    this.setState({display: "edit"})
  }

  deleteClick = () => {
    console.log("delete trainer")
  }

  deleteTrainer = () => {
    let url = `http://localhost:3000/api/v1/trainers/${this.props.trainer.id}`
    fetch(url, {
      method: "DELETE"
    })

  }

  updateTrainer = (ev) => {
    ev.preventDefault()
    console.log(this.props.trainer.id)
    let url = `http://localhost:3000/api/v1/trainers/${this.props.trainer.id}`
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.props.trainer.id,
        age: ev.target.elements['age'].value,
        enemy: ev.target.elements['enemy'].value,
        image: ev.target.elements['image'].value,
        hometown: ev.target.elements['hometown'].value
      })
    })
    .then(res => res.json())
    .then(updatedTrainer => {
      this.props.setTrainer(updatedTrainer)
    })
    this.setState({display: "none"})

  }

  displayTrainer = () => {
    if (this.state.display === 'edit') {
      return <EditTrainer trainer={this.props.trainer} updateTrainer={this.updateTrainer}/>
    } else {
      return <DisplayTrainer trainer={this.props.trainer}/>
    }
  }


  render(){
    return(
      <Fragment>
        {this.displayTrainer()}
        <button onClick={() => this.editClick()}>edit trainer</button>
        <button onClick={() => this.deleteTrainer()}>delete trainer</button>
      </Fragment>
    )
  }
}
export default Trainer;
