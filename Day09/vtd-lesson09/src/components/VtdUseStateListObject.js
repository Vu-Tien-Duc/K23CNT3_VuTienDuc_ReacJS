import React, { useEffect, useState } from 'react'

export default function VtdUseStateListObject() {
    // Mock data
    const listStudent = [
        { vtdId: 1, vtdName: "Vũ Tiến Đức", vtdAge: 20 },
        { vtdId: 2, vtdName: "Vũ Tiến ĐÔng", vtdAge: 22 },
        { vtdId: 3, vtdName: "Vũ Tiến Nam", vtdAge: 25 },
        { vtdId: 4, vtdName: "Vũ Tiến Bắc", vtdAge: 30 }
    ];

    // State hook for students
    const [VtdStudents, setVtdStudents] = useState(listStudent);
    
    // State hook for the student to edit
    const [editStudent, setEditStudent] = useState(null);

    // UseEffect to monitor the editStudent and update the list when editing
    useEffect(() => {
        if (editStudent) {
            const updatedStudents = VtdStudents.map(student => 
                student.vtdId === editStudent.vtdId 
                ? { ...student, vtdName: editStudent.vtdName, vtdAge: editStudent.vtdAge } // Update the name and age
                : student
            );
            setVtdStudents(updatedStudents);
        }
    }, [editStudent]); // This effect runs whenever editStudent changes

    // Function to handle the "Sửa" (Edit) button click
    const handleEdit = (student) => {
        const newName = prompt('Edit student name:', student.vtdName);
        const newAge = prompt('Edit student age:', student.vtdAge);

        if (newName && newAge) {
            setEditStudent({ ...student, vtdName: newName, vtdAge: newAge });
        }
    };

    // Render list of students with actions
    let vtdrenderElement = VtdStudents.map((vtdItem, index) => {
        return (
            <tr key={index}>
                <td>{vtdItem.vtdId}</td>
                <td>{vtdItem.vtdName}</td>
                <td>{vtdItem.vtdAge}</td>
                <td>
                    <button
                        className='btn btn-success mx-2'
                        onClick={() => handleEdit(vtdItem)}
                    >
                        Sửa
                    </button>
                    <button className='btn btn-danger mx-2'>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>VtdID</th>
                        <th>VtdName</th>
                        <th>VtdAge</th>
                        <th>VtdAction</th>
                    </tr>
                </thead>
                <tbody>
                    {vtdrenderElement}
                </tbody>
            </table>
        </div>
    );
}
