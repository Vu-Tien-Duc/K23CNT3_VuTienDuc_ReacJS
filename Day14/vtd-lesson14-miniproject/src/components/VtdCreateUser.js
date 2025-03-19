import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function VtdCreateUser() {
    // Khởi tạo state
    const [vtd_name, setVtd_name] = useState('');
    const [vtd_email, setVtd_email] = useState('');
    const [vtd_phone, setVtd_phone] = useState('');
    const [vtd_active, setVtd_active] = useState(true);

    // api post
    const vtdCreateUser = "https://67da684535c87309f52c47da.mockapi.io/vtd_users/vtd_user";

    // submit form
    const vtdHandleSubmit = (ev) => {
        ev.preventDefault(); // Ngăn form gửi tự động

        let vtdNewUser = { vtd_name, vtd_email, vtd_phone, vtd_active };

        // Gửi dữ liệu lên API
        axios
            .post(vtdCreateUser, vtdNewUser)
            .then((vtd_response) => {
                console.log(vtd_response.data);
            })
            .catch((error) => {
                console.log("Lỗi", error);
            });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={vtdHandleSubmit}>
                <h2>Thêm Mới User</h2>

                <div className="mb-3">
                    <label htmlFor="vtd_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="vtd_name"
                        id="vtd_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_name(ev.target.value)}
                        value={vtd_name}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vtd_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="vtd_email"
                        id="vtd_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_email(ev.target.value)}
                        value={vtd_email}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vtd_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="vtd_phone"
                        id="vtd_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setVtd_phone(ev.target.value)}
                        value={vtd_phone}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtd_active"
                            id="vtd_active_hd"
                            value="true"
                            checked={vtd_active === true}
                            onChange={() => setVtd_active(true)} // Cập nhật state khi chọn "Hoạt Động"
                        
                        />
                        <label className="form-check-label" htmlFor="vtd_active_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtd_active"
                            id="vtd_active_kh"
                            value="false"
                            checked={vtd_active === false}
                            onChange={() => setVtd_active(false)} // Cập nhật state khi chọn "Khóa"
                        />
                        <label className="form-check-label" htmlFor="vtd_active_kh">Khóa</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
                <Link to={'/list-user'} >
                <button type="submit" className="btn btn-info">Back</button>
                </Link>
            </form>
        </div>
    );
}
