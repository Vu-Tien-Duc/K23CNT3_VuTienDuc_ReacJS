import React, { Component } from 'react'

export default class VtdEventForm1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            vtdStudentName:"Đức Vũ"
        }
    }
    // Hàm sử lý sự kiện khi dữ liệu trên textbox vtdStudentName thay đổi
    vtdHandleChage = (event)=>{
        // cập nhập setstate
        this.setState({
            vtdStudentName:event.target.value
        })
    }
    // khi submit dỏm, lấy dữ liệu và hiển thị
    vtdHandleSubmit = (ev)=>{
        alert('Hello:' + ' ' + this.state.vtdStudentName)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>Form input</h2>
            <form onSubmit={this.vtdHandleSubmit}>
                <label htmlFor='vtdStudentName'>
                    <input type='text' name='vtdStudentName' id='vtdStudentName' value={this.state.vtdStudentName} 
                    onChange={this.vtdHandleChage} />
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}
