import React, { Component } from 'react'
import VtdEventForm1 from './components/VtdEventForm1'
import VtdEventForm2 from './components/VtdEventForm2'
import VtdEventForm3 from './components/VtdEventForm3'
import VtdEventForm4 from './components/VtdEventForm4'
import VtdEventForm5 from './components/VtdEventForm5'


export default class VtdApp extends Component {
  // Hàm xử lý dữ liệu từ form student
  vtdHandleSubmitForm = (param)=>{
    console.log("Student:" ,param);
    
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <VtdEventForm1 />
          <VtdEventForm2 />
          <VtdEventForm3 />
          <VtdEventForm4 />
          <VtdEventForm5 onVtdHandleSubmit={this.vtdHandleSubmitForm} />
      </div>
    )
  }
}
