import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function VtdListUser() {
    const [vtdListUser, setVtdListUser] = useState([]); // State để lưu danh sách người dùng

    // URL API lấy dữ liệu người dùng
    const vtdAPIOnline = "https://67da684535c87309f52c47da.mockapi.io/vtd_users/vtd_user";

    // Lấy dữ liệu từ API bằng axios
    useEffect(() => {
        axios
            .get(vtdAPIOnline) // Lấy dữ liệu người dùng từ API
            .then((vtd_response) => {
                setVtdListUser(vtd_response.data); // Lưu dữ liệu vào state
            })
            .catch((error) => {
                console.log("Lỗi", error); // Xử lý lỗi khi có sự cố
            });
    }, []); // useEffect chỉ chạy một lần khi component được render lần đầu tiên

    // Hàm xử lý xóa người dùng
    const handleDelete = (id) => {
        // Gửi yêu cầu DELETE đến API để xóa người dùng
        axios
            .delete(`${vtdAPIOnline}/${id}`)
            .then(() => {
                // Nếu xóa thành công, loại bỏ người dùng đã xóa khỏi state
                setVtdListUser(vtdListUser.filter(user => user.id !== id));
            })
            .catch((error) => {
                console.error("Có lỗi khi xóa người dùng!", error); // Xử lý lỗi khi có sự cố
            });
    };

    // Duyệt qua danh sách người dùng và render từng người dùng trong một dòng của bảng
    const vtdElementUser = vtdListUser.map((vtdItem) => {
        return (
            <tr key={vtdItem.id}>
                <td>{vtdItem.id}</td> {/* Hiển thị ID người dùng */}
                <td>{vtdItem.vtd_name}</td> {/* Hiển thị Tên người dùng */}
                <td>{vtdItem.vtd_email}</td> {/* Hiển thị Email người dùng */}
                <td>{vtdItem.vtd_phone}</td> {/* Hiển thị Số điện thoại người dùng */}
                <td>
                    {/* Hiển thị trạng thái hoạt động với badge */}
                    <span className={`badge ${vtdItem.vtd_active ? 'bg-success' : 'bg-danger'}`}>
                        {vtdItem.vtd_active ? 'Hoạt động' : 'Khóa'}
                    </span>
                </td>
                <td>
                    {/* Nút chỉnh sửa */}
                    <Link to={`/edit-user/${vtdItem.id}`}>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                    </Link>
                    {/* Nút xóa */}
                    <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => handleDelete(vtdItem.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-4">
            <div className="alert alert-info">
                <h2>Danh sách người dùng</h2> {/* Tiêu đề */}
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped bg-white">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th> {/* Cột ID */}
                            <th>Name</th> {/* Cột Tên */}
                            <th>Email</th> {/* Cột Email */}
                            <th>Phone</th> {/* Cột Phone */}
                            <th>Active</th> {/* Cột Trạng thái hoạt động */}
                            <th>Action</th> {/* Cột Hành động (Chỉnh sửa/Xóa) */}
                        </tr>
                    </thead>
                    <tbody>
                        {vtdElementUser} {/* Hiển thị danh sách người dùng */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
