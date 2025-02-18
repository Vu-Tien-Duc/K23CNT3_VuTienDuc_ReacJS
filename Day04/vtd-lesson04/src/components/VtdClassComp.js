import React, { Component } from 'react'

 class VtdClassComp extends Component {
  constructor(props){
    super(props);
    this.state={
      fullName:"VŨ ĐỨC",
      Phone:"02445214",
      age:22
    }
  }

  // hàm xử lý sự kiện
  ChangeInfo = (ev)=>{
    // cập nhập state
    this.setState({
      fullName:"Vũ Tiến Đ",
      Phone:"0396705599",
      age:24
    })
  }
  render() { 
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>Info State (fullName): {this.state.fullName} </p>
        <p>Info State (age): {this.state.age} </p>
        <p>Info State (Phone): {this.state.Phone} </p>

        <hr/>
        <button className='btn btn-primary' onClick={this.ChangeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ props</h3>

        <p>Name: {this.props.rendername}</p>
        <p>FullName: {this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
         <p>age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:'null'}</p> 
      </div>
    )
  }
}
export default VtdClassComp;
