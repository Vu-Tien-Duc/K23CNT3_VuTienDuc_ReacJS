import React, { Component } from 'react'

export default class VtdStudent extends Component {
    constructor(props){
        super(props);
    }
    vtdHandleView = (vtdStudent) =>{
        // chuyển liên VtdStudentList
        this.props.onVtdHandleView(vtdStudent);
    }
    render() {
        // lấy đối tượng dữ liệu chuyển thì VtdStudentList
        let {renderVtdStudent,key} = this.props;
        console.log("Student:" , renderVtdStudent);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderVtdStudent.vtdId}</td>
                    <td>{renderVtdStudent.vtdStudentName}</td>
                    <td>{renderVtdStudent.vtdAge}</td>
                    <td>{renderVtdStudent.vtdGender}</td>
                   
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            onClick={()=>this.vtdHandleView(renderVtdStudent)}>
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
