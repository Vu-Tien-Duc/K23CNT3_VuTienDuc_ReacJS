import React, { Component } from 'react'

export default class VtdComp extends Component {
    constructor(props){
        super(props);
        this.state={
            Information: "Trình bày thông tin cá nhân",
            name: "Vu duc",
            age: "19",
            date: "10/11/2055",
        };
    }

  render() {
    return (
      <div>{this.state.Information} {this.state.name} {this.state.age} {this.state.date} </div>
    )
  }
}
