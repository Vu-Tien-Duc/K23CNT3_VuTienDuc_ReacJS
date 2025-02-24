import React, { Component } from 'react'
import VtdFuncCompEvent1 from './components/VtdFuncCompEvent1'
import VtdClassCompEvent1 from './components/VtdClassCompEvent1'
import VtdFuncCompEventProp from './components/VtdFuncCompEventProp'
import VtdClassCompEventProps from './components/VtdClassCompEventProps'
import VtdClassCompEventState from './components/VtdClassCompEventState'
import VtdClassCompEventPostData from './components/VtdClassCompEventPostData'

export default class VtdApp extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdNoiDung:"Chưa có gì"
        }
    }
    // hàm xử lý sự kiện khi components con chuyển dữ liệu lên
    vtdHandleDataToApp = (content)=>{
        alert(content)
        this.setState({ vtdNoiDung: content });  // Cập nhật trạng thái với dữ liệu nhận được
    }
  render() {
    return (
      <div className='container border mt-3'>
            <h1 className='text-center alert-info my-2'>K23CNT3 Vũ Tiến Đức - Event and Form</h1>
            <hr/>
            <div>
                <h2> Function Components</h2>
            <VtdFuncCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Class Components</h2>
                <VtdClassCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Function Components - Event ;Props</h2>
                <VtdFuncCompEventProp  vtdRenderName="Vũ Tiến Đức" />
            </div>
            <hr/>
            <div>
                <h2> Class Components - Event ;Props</h2>
                <VtdClassCompEventProps vtdRenderTitle=" chào bạn"/>
            </div>
            <hr/>
            <div>
                <h2>Class Component - State</h2>
                <VtdClassCompEventState />
            </div>
            <hr/>
            <div>
                <h1>{this.state.vtdNoiDung}</h1>
                <h2>Class Component - Event; Post Data to app</h2>
                <VtdClassCompEventPostData onVtdDataToApp={this.vtdHandleDataToApp} />
            </div>
      </div>
    )
  }
}
