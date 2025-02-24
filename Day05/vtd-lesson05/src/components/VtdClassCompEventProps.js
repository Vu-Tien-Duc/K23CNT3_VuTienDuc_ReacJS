import React, { Component } from 'react'

export default class VtdClassCompEventProps extends Component {
   vtdEventHandleClick1 = ()=>{
    // lấy dữ liệu props từ App.js
    alert('Hello...' + this.props.vtdRenderTitle)
   }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.vtdEventHandleClick1}>Button1</button>
      </div>
    )
  }
}
