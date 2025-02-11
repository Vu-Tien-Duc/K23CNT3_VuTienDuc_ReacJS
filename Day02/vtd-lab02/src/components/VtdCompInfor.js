import React, { Component } from 'react'

export default class VtdCompInfor extends Component {
  constructor(props){
    super(props);
    this.state={
        Information: "Trình bày thông tin cá nhân",
    };
}
  render() {
    return (
      <div>
        <p>{this.state.Information}</p>
        <p>Họ Và Tên: {this.props.vtdFullName}</p>
        <p>Mã Sinh Viên: {this.props.vtdKey}</p>
        <p>Ngày Sinh: {this.props.vtdDate}</p>
        <p>Điện Thoại: {this.props.vtdNumber}</p>
        <p>Tên Lớp: {this.props.vtdClass}</p>
      </div>
    )
  }
}
