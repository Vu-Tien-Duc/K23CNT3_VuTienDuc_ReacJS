import React from 'react';

const VtdStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.VtdID}</p>
        <p><strong>Họ tên:</strong> {student.VtdStudentName}</p>
        <p><strong>Tuổi:</strong> {student.VtdAge}</p>
        <p><strong>Giới tính:</strong> {student.VtdGender}</p>
        <p><strong>Ngày sinh:</strong> {student.VtdBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.VtdBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.VtdAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default VtdStudentDetail;