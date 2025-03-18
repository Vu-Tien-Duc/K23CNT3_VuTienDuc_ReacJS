import axios from 'axios';
import React, { useState } from 'react';

export default function VtdCreateMockAPI() {

    // Khởi tạo state
    const [vtdFullName, setVtdFullName] = useState('');
    const [vtdAge, setVtdAge] = useState(0);
    const [vtdActive, setVtdActive] = useState(true);

    // api post
    const vtdCreateUser = "https://67d8d4b300348dd3e2a85cf3.mockapi.io/k23cnt3_vutienduc/vtd_user";

    // khi submit form
    const vtdHandleSubmit = (event) => {
        event.preventDefault(); 
        let vtdNewUser = { vtdFullName, vtdAge, vtdActive };
        console.log(vtdNewUser);
        
        // ghi dữ liệu vào api
        axios
            .post(vtdCreateUser, vtdNewUser)
            .then((vtd_response) => {
                console.log(vtd_response.data);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error("There was an error creating the user!", error);
            });
    }

    return (
        <div className="alert alert-info">
            <h2>Thêm Mới Users</h2>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="vtdFullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="vtdFullName"
                        id="vtdFullName"
                        placeholder="Enter full name"
                        onChange={(ev) => setVtdFullName(ev.target.value)} // Keep the same as requested
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vtdAge" className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="vtdAge"
                        id="vtdAge"
                        placeholder="Enter age"
                        onChange={(ev) => setVtdAge(ev.target.value)} // Keep the same as requested
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtdActive"
                            id="vtdActive_hd"
                            value="true"
                            checked={vtdActive === true}
                            onChange={(ev) => setVtdActive(ev.target.value === 'true')} // Simplified as requested
                        />
                        <label className="form-check-label" htmlFor="vtdActive_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="vtdActive"
                            id="vtdActive_kh"
                            value="false"
                            checked={vtdActive === false}
                            onChange={(ev) => setVtdActive(ev.target.value === 'true')} // Simplified as requested
                        />
                        <label className="form-check-label" htmlFor="vtdActive_kh">Khóa</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={vtdHandleSubmit}>Create</button>
            </form>
        </div>
    )
}
