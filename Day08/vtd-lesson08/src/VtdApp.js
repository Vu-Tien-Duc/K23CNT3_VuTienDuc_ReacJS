import React, { Component } from 'react'
import VtdControl from './components/VtdControl'
import VtdStudentList from './components/VtdStudentList'
import VtdForm from './components/VtdForm'

export default class VtdApp extends Component {
  constructor(props){
    super(props);
    this.state={
      vtdStudents:[
        {vtdId:"SV001",vtdStudentName:"Vũ Tiến Đức",vtdAge:20,vtdGender:"Nam",vtdBirthday:"10/11/2005",vtdBirthplace:"YB",vtdAddress:"Thôn 7,Thịnh Hưng"},
        {vtdId:"SV002",vtdStudentName:"Vũ Tiến Nam",vtdAge:22,vtdGender:"Nữ",vtdBirthday:"20/05/2003",vtdBirthplace:"HN",vtdAddress:"25 Vũ Ngọc Phan"},
        {vtdId:"SV003",vtdStudentName:"Vũ Tiến Bắc",vtdAge:33,vtdGender:"Nam",vtdBirthday:"14/07/1996",vtdBirthplace:"HCM",vtdAddress:"Thành Phố Hồ Chí Minh"},
        {vtdId:"SV004",vtdStudentName:"Vũ Tiến Tây",vtdAge:78,vtdGender:"Nữ",vtdBirthday:"09/09/1955",vtdBirthplace:"HD",vtdAddress:"Hải Dương"},
        {vtdId:"SV005",vtdStudentName:"Vũ Tiến Tây",vtdAge:78,vtdGender:"Nữ",vtdBirthday:"09/09/1955",vtdBirthplace:"HD",vtdAddress:"Hải Dương"},
      ],
      vtdStudent:"",
    }
  }

  // hàm sử lý sự kiện view student
   vtdHandleView = (vtdStudent)=>
    {
        this.setState({
          vtdStudent:vtdStudent,
        })
    }
  render() {
    // log
    console.log("View Student",this.state.vtdStudent);
    
    return (
      <div>
        <h1 style={{ textAlign: "center" }}  >
          Vũ Tiến Đức - K23CNT3 - Mini Project1
          </h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
               {/* Header */}
               <VtdControl />
               {/* Danh sách Sinh Viên  */}
               <VtdStudentList renderVtdStudents={this.state.vtdStudents} onVtdHandleView={this.vtdHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
            {/* form */}
            <VtdForm renderVtdStudent = {this.state.vtdStudent} />
            </div>
          </div>
        </section>

      </div>
    )
  }
}
