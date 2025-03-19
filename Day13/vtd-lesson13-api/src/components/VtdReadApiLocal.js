import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function VtdReadApiLocal() {
    // khởi tạo
    const [vtdListUser, setVtdListUser] = useState([])
    // đọc dữ liệu từ API local và set cho vtdListUser
    const apoUrl= "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apoUrl)
            .then((vtdResponse)=>{
                setVtdListUser(vtdResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
                
            })
    },[])
  return (
    <div>
            <h2>ĐỌc dữ liệu API</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {vtdListUser.map((vtdItem,index)=>{
                        return (
                            <tr>
                                <td>{vtdItem.fullName}</td>
                                <td>{vtdItem.age}</td>
                                <td>{vtdItem.class}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  )
}
