import React from 'react'

export default function VtdListUser({ renderVtdUsers }) {

    const vtdElements = renderVtdUsers.map((vtdItem, index) => {
        return(
        <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{vtdItem.id}</td>
                <td>{vtdItem.vtdFullName}</td>
                <td>{vtdItem.vtdUserName}</td>
                <td>{vtdItem.vtdPass}</td>
            </tr>
        </>)
    })
    return (
        <div>
            <h2>Danh sách tài Khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {vtdElements}
                </tbody>
            </table>
        </div>
    )
}
