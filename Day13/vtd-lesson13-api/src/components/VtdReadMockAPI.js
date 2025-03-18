import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function VtdReadMockAPI() {
    // khởi tạo state
    const [vtdListUser, setVtdListUser] = useState([])
    // api
    const vtdApiOnline = "https://67d8d4b300348dd3e2a85cf3.mockapi.io/k23cnt3_vutienduc/vtd_user"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(vtdApiOnline)
            .then((vtd_reponse)=>{
                setVtdListUser(vtd_reponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
                
            })
    },[])

    // view data
    const vtdElementUser = vtdListUser.map((vtdItem,index)=>{
        return (
            <tr>
                <td>{vtdItem.vtdId}</td>
                <td>{vtdItem.vtdFullName}</td>
                <td>{vtdItem.vtdAge}</td>
                <td>{vtdItem.vtdActive?"Hoạt động": "Khóa"}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered bg-white'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vtdElementUser}
            </tbody>
        </table>
    </div>
  )
}
