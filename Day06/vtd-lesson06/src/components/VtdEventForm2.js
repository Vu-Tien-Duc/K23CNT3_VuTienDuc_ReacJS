import React, { Component } from 'react'

export default class VtdEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdCourse: 'CSS3'
        }
    }
    vtdHandleChage = (event)=>{
        this.setState({
            vtdCourse:event.target.value
        })
    }
    vtdHandleSubmit = (ev) =>{
        alert('Khóa Học Đã Chọn Khi Submit:' + this.state.vtdCourse)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-danger'>
       <h2>Form Select</h2>
            <form onSubmit={this.vtdHandleSubmit}>
                <label>
                    Chọn khóa học:
                    <select name='vtdCourse' id='vtdCourse'
                     value={this.state.vtdCourse} onChange={this.vtdHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}

