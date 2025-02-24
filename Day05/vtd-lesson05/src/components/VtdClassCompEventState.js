import React, { Component } from 'react'

export default class VtdClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            vtdFullName:"Vũ Tiến Đức",
            vtdAge:20
        }
    }
    // hàm xử lý sự kiện
    vtdEventHandleClick1 = ()=>{
        // lấy dữ lieuj trong state
        alert('FullName=' + this.state.vtdFullName + '\n Age' + this.state.vtdAge)
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.vtdEventHandleClick1}>Button1 - Dữ liệu trong state</button>
    
      </div>
    )
  }
}
