import React, { Component } from 'react'

export default class appp extends Component {
    constructor(props){
        super(props);
        this.state={
            Information: "Trình bày thông tin cá nhân",
        };
    }
      render() {
    return (
      <div>
        {this.state.Information}
      </div>
    )
  }
}
