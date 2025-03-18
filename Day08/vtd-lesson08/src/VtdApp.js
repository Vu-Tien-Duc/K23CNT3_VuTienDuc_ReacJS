import React, { Component } from 'react';
import VtdControl from './components/VtdControl';
import VtdStudentList from './components/VtdStudentList';
import VtdForm from './components/VtdForm';
import VtdStudentDetail from './components/VtdStudentDetail'; 

class VtdApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VtdStudents: [ 
        { VtdID: "SV001", VtdStudentName: "Vũ Tiến Đức", VtdAge: 19, VtdGender: "Nam", VtdBirthday: "05/11/2005", VtdBirthPlace: "QN", VtdAddress: "Yên Xá" },
        { VtdID: "SV002", VtdStudentName: "Vũ Tiến Nam", VtdAge: 19, VtdGender: "Nam", VtdBirthday: "04/09/2005", VtdBirthPlace: "HN", VtdAddress: "Hai Bà Trưng" },
        { VtdID: "SV003", VtdStudentName: "Vũ Tiến Bắc", VtdAge: 19, VtdGender: "Nam", VtdBirthday: "04/09/2005", VtdBirthPlace: "HD", VtdAddress: "Hải Dương" },
        { VtdID: "SV004", VtdStudentName: "Vũ Tiến Tây", VtdAge: 20, VtdGender: "Nam", VtdBirthday: "13/01/2005", VtdBirthPlace: "HD", VtdAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.VtdStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onVtdHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { VtdStudents, searchKeyword } = this.state;
    const filtered = VtdStudents.filter(student =>
      student.VtdStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onVtdHandleView = (VtdStudent) => {
    this.setState({
      selectedStudent: VtdStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onVtdHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onVtdHandleEdit = (VtdStudent) => {
    this.setState({ selectedStudent: VtdStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onVtdHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.VtdStudents.filter(student => student.VtdID !== studentID);
      return { VtdStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onVtdHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.VtdStudents.map(student => 
        student.VtdID === updatedStudent.VtdID ? updatedStudent : student
      );
      return { VtdStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onVtdHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onVtdHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      VtdStudents: [...prevState.VtdStudents, newStudent],
      selectedStudent: null,
      isAddingNew: true
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Vũ Tiến Đức - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <VtdControl 
                  onVtdHandleAddNew={this.onVtdHandleAddNew} 
                  onVtdHandleSearch={this.onVtdHandleSearch} 
                />
                <VtdStudentList
                  renderVtdStudents={this.state.filteredStudents} 
                  onVtdHandleView={this.onVtdHandleView} 
                  onVtdHandleEdit={this.onVtdHandleEdit}
                  onVtdHandleDelete={this.onVtdHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <VtdStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onVtdHandleCloseDetail} 
                />
              ) : (
                <VtdForm 
                  renderVtdStudent={this.state.selectedStudent} 
                  onVtdHandleUpdate={this.onVtdHandleUpdate} 
                  onVtdHandleSaveNew={this.onVtdHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default VtdApp;