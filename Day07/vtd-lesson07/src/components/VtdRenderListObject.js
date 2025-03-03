import React, { Component } from 'react'

export default class VtdRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdStudents : [
                {vtdId:1,vtdName:"Vũ Tiến Đức",vtdAge:20},
                {vtdId:2,vtdName:"Vũ Tiến ĐÔng",vtdAge:22},
                {vtdId:3,vtdName:"Vũ Tiến Nam",vtdAge:25},
                {vtdId:4,vtdName:"Vũ Tiến Bắc",vtdAge:30},
            ],
        }
    }



  render() {
        // hiển thị dữ liệu  
        let {vtdStudents} = this.state
        let vtdElement = vtdStudents.map((vtdItem)=>{
          return(
            <li>{vtdItem.vtdId} - {vtdItem.vtdName} - {vtdItem.vtdAge}</li>
          );
        })


        let vtdrenderElement = vtdStudents.map((vtdItem,index)=>{
            return(
                <tr key={index}>
                    <td>{vtdItem.vtdId}</td>
                    <td>{vtdItem.vtdName}</td>
                    <td>{vtdItem.vtdAge}</td>
                    <td>
                        <button className='btn btn-success mx-2'>Sửa</button>
                        <button className='btn btn-danger mx-2'>Xóa</button>
                    </td>
                </tr>
            )
        })
    return (
      <div>
        Danh sách sinh viên:
        {vtdElement}
        <h2> Change </h2>
        <table className='table table-border'>
            <thead>
                <tr>
                    <th>VTdID</th>
                    <th>VtdName</th>
                    <th>VtdAge</th>
                    <th>VtdAction</th>
                </tr>
            </thead>
            <tbody>
               {vtdrenderElement}
            </tbody>
        </table>
      </div>
    );
  }
}
