import React, { useState } from 'react'

export default function VtdUseState() {
    // Khởi Tạo state 
    const [vtdCount, setVtdCount] = useState(0);

    // Khởi tạo state là 1 mảng
    const vtdArr = [1, 2, 3, 4, 5, 6];
    const [vtdArray, setVtdArray] = useState(vtdArr);
    
    // Khởi Tạo state với mảng object
    const vtdStudents = [
        { vtdId: "SV001", vtdName: "Vũ Đức", vtdAge: 20 },
        { vtdId: "SV002", vtdName: "Phạm Quân", vtdAge: 23 },
    ];
    const [vtdStudentList, setVtdStudentList] = useState(vtdStudents);

    // Hmaf xử lý sự kiện khi thêm mới phần tử vào mảng
   const vtdHandleAddList=()=>{
       setVtdArray([
         ...vtdArray,
        parseInt(Math.random()*100),
       ]) 
    }

    // hàm sử lý sk sinh viên
    const vtdHnadleAddNewStudent=()=>{
        let vtdStudent = {
            vtdId:"SV003",
            vtdName:"Vũ Nguyễn",
            vtdAge:30,
        };
        // thêm vào state vtdStudentList
        setVtdStudentList([
            ...vtdStudentList,
            vtdStudent
        ])
    }
    return (
        <div className='alert alert-danger'>
            <h2>UseState Demo</h2>
            <hr />
            <div>
                <h3>Count: {vtdCount}</h3>
                <button onClick={()=>setVtdCount(vtdCount + 1)}>Tăng +</button>
                <button onClick={()=>setVtdCount(vtdCount - 1)}>Giảm -</button>
            </div>
                <hr/>
            <div>
                <h3>Array: {vtdArray.toString()}</h3>
                <button onClick={vtdHandleAddList}>Thêm Phần tử +</button>
            </div>
            <hr/>
            <div >
                <h3>Danh sách sinh viên: </h3>
                <table className='table table-bordered '> 
                    <thead className='bg-white'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            vtdStudentList.map((vtdStudent, index) => {
                                return <>
                                    <tr>
                                        <td>{vtdStudent.vtdId}</td>
                                        <td>{vtdStudent.vtdName}</td>
                                        <td>{vtdStudent.vtdAge}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={vtdHnadleAddNewStudent}>Thêm mới sinh viên</button>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
