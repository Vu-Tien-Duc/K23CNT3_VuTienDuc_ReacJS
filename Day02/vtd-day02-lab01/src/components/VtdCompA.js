
import React, { Component } from 'react'

export default class VtdCompA extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "vũ Đức",
        };
    }
  render() {
    return (
      <div>
        <h2>VtdCompA</h2>
        <p>Dữ liệu:{this.state.name}</p>
        <h3>Hiển thị dữ liệu từ props:</h3>
        <p>Name: {this.props.vtdName}</p>
        <p>Address: {this.props.vtdAddress}</p>
        </div>
    )
  }
}
