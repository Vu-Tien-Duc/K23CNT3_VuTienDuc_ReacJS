import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function VtdListUser() {
    // state
    const [vtdListUser, setVtdListUser] = useState([])

    const vtdApi = "https://67da684535c87309f52c47da.mockapi.io/vtd_users/vtd_user"

    useEffect(() => {
        axios.get(vtdApi)
            .then(vtd_response => {
                console.log(vtd_response.data);
                setVtdListUser(vtd_response.data)
            })
            .catch(error => {
                console.log(error);

            });
    }, [])


    const vtdHandleDelete = async (id) => {
        if (window.confirm("bạn có chắc chắn muôn xóa không")) {
            await axios.delete(vtdApi + '/' + id)

            let vtdListUserDelete = vtdListUser.filter(x => x.id != id)
            setVtdListUser(vtdListUserDelete)
        }
    }
    const navigate = useNavigate();

    const vtdHandleEdit = (id) => {
        navigate(`/vtd-edit-user/${id}`);
    };


    // hiển thị danh sách user
    return (
        <div>
            <h2>Danh sách user</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vtdListUser.map((vtdItem, index) => {
                        return (
                            <tr>
                                <td>{vtdItem.id}</td>
                                <td>{vtdItem.vtd_name}</td>
                                <td>{vtdItem.vtd_email}</td>
                                <td>{vtdItem.vtd_phone}</td>
                                <td>
                                    {vtdItem.vtd_active ?
                                        <span className='badge text-bg-success'>Hoạt Động</span> :
                                        <span className='badge text-bg-danger'>Tạm Khóa</span>
                                    }
                                </td>

                                <td>
                                    <button onClick={(ev) => { vtdHandleEdit(vtdItem.id) }}>Edit</button>
                                    <button onClick={(ev) => { vtdHandleDelete(vtdItem.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

