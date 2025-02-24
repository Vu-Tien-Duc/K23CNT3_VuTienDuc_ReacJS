import React, { Component } from 'react'

export default class VtdClassCompEventPostData extends Component {
    constructor(props){
        super(props);

    }
    // hàm sử lý sự kiện
    vtdHandleClick = ()=>{
        // Chuyển dự liêu lên app thông qua props
        this.props.onVtdDataToApp("Lesson05 Event; Dữ liệu từ conponents con  - VtdClassCompEventPostData ")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary'
        onClick={this.vtdHandleClick}> Button 1 - Chuyển dữ liệu lên App</button>
      </div>
    )
  }
}
