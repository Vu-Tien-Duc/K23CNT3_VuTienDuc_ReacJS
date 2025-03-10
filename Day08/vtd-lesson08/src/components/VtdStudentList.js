import React, { Component } from 'react';
import VtdStudent from './VtdStudent';

export default class VtdStudentList extends Component {
  render() {
    let { renderVtdStudents, onVtdHandleView, onVtdHandleEdit, onVtdHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderVtdStudents.map((student, index) => (
            <VtdStudent 
              key={student.VtdID} 
              VtdIndex={index + 1} 
              renderVtdStudent={student} 
              onVtdHandleView={onVtdHandleView} 
              onVtdHandleEdit={onVtdHandleEdit}
              onVtdHandleDelete={onVtdHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}