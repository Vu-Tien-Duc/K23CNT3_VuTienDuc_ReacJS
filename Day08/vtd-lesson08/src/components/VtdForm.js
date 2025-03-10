import React, { Component } from 'react';

export default class VtdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VtdID: '',
      VtdStudentName: '',
      VtdAge: '',
      VtdGender: 'Nam',
      VtdBirthday: '',
      VtdBirthPlace: 'HN',
      VtdAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderVtdStudent !== this.props.renderVtdStudent) {
      if (this.props.renderVtdStudent) {
        this.setState({ ...this.props.renderVtdStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          VtdID: '',
          VtdStudentName: '',
          VtdAge: '',
          VtdGender: 'Nam',
          VtdBirthday: '',
          VtdBirthPlace: 'HN',
          VtdAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { VtdID, ...otherState } = this.state;

    if (!VtdID || VtdID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (VtdID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onVtdHandleSaveNew({ VtdID, ...otherState });
    } else {
        this.props.onVtdHandleUpdate({ VtdID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="VtdID" value={this.state.VtdID} onChange={this.handleChange} required />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="VtdStudentName" value={this.state.VtdStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="VtdAge" value={this.state.VtdAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="VtdGender" value={this.state.VtdGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="VtdBirthday" value={this.state.VtdBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="VtdBirthPlace" value={this.state.VtdBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="VtdAddress" value={this.state.VtdAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}