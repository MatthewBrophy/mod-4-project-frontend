import React, { Component } from 'react';

class Nav extends Component {
  constructor(props){
    super(props)
  }

  startBattle = () => {
    console.log("Battle")
  }

  kys = () => {
    console.log("kys")
  }

  render(){
    return(
      <div>
        <button name="battle" onClick={() => this.startBattle()}>Battle</button>
        <button name="kys" onClick={() => this.kys()}>KYS</button>
      </div>
    )
  }
}

export default Nav;
