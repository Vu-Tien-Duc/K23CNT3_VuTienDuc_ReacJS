import React, { Component } from 'react'

export default class VtdEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdGioiTinh: "Nam"
        }
    }
    vtdHanleChange = (event)=>
    {
        this.setState({
            vtdGioiTinh:event.target.value
        })
    }

    // Hmaf xử lý sự kiện submit form
    vtdHandleSubmit = (event)=>{
        event.preventDefault()
        alert('Giới tính của bạn là:' + this.state.vtdGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
            <h2>Form Input - Radio</h2>
            <form>
                <div>
                    <label htmlFor=''>Giới tính:</label>
                    <input type='radio' name='vtdGioiTinh'  id='vtdNam' className='mx-2'
                     value="Nam" checked={this.state.vtdGioiTinh === 'Nam'} onChange={this.vtdHanleChange}/> 
                        <label htmlFor='vtdNam'>Nam</label>
                    <input type='radio' name='vtdGioiTinh'  id='vtdNu' className='mx-2'
                    value="Nữ" checked={this.state.vtdGioiTinh === 'Nữ'} onChange={this.vtdHanleChange}/> 
                        <label htmlFor='vtdNu'>Nữ</label>
                    <input type='radio' name='vtdGioiTinh'   id='vtdKhac' className='mx-2'
                    value="Khác" checked={this.state.vtdGioiTinh === 'Khác'} onChange={this.vtdHanleChange}/> 
                        <label htmlFor='vtdKhac'>Khác</label>
                  
                </div>
                <button onClick={this.vtdHandleSubmit} className='btn btn-success mt-3'> SubMit </button>
            </form>
      </div>
    )
  }
}
