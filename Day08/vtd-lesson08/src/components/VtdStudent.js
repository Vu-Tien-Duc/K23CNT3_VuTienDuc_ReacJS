import React, { Component } from 'react';

export default class VtdStudent extends Component {
  render() {
    let { renderVtdStudent, VtdIndex, onVtdHandleView, onVtdHandleEdit, onVtdHandleDelete } = this.props;

    return (
      <tr>
        <td>{VtdIndex}</td>
        <td>{renderVtdStudent.VtdID}</td>
        <td>{renderVtdStudent.VtdStudentName}</td>
        <td>{renderVtdStudent.VtdAge}</td>
        <td>{renderVtdStudent.VtdGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onVtdHandleView(renderVtdStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onVtdHandleEdit(renderVtdStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onVtdHandleDelete(renderVtdStudent.VtdID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}