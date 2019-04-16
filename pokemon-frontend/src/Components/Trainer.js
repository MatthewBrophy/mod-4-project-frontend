import React, { Component, Fragment } from "react";
import EditTrainer from './EditTrainer'
import DisplayTrainer from './DisplayTrainer'

class Trainer extends Component {
  constructor(props){
    super(props)

    console.log(props)

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

  updateTrainer = (ev) => {
    console.log(this.props.trainer.id)
    let url = `http://localhost:3000/api/v1/trainers/${this.props.trainer.id}`
    //console.log(ev.target.elements['age'].value)
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: ev.target.elements['age'].value,
        enemy: ev.target.elements['enemy'].value,
        image: ev.target.elements['image'].value
      })
    })
    .then(res => console.log(res.status))
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
        <button onClick={() => this.deleteClick()}>delete trainer</button>
      </Fragment>
    )
  }
}
export default Trainer;
