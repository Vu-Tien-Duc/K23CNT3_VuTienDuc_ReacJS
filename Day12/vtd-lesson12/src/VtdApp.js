import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import VtdNavNar from './components/VtdNavNar'
import VtdHome from './components/VtdHome'
import VtdAbout from './components/VtdAbout'
import VtdContact from './components/VtdContact'
import VtdListUser from './components/VtdListUser'
import VtdFormUser from './components/VtdFormUser'
export default function VtdApp() {

  const listUsers = [
    {id:"SV001", vtdFullName:"Vuc Tiến Đức", vtdUserName:"VuDuc", vtdPass:"ducyb"},
    {id:"SV002", vtdFullName:"Vuc Đức", vtdUserName:"VuDuc1", vtdPass:"ducyb"},
    {id:"SV003", vtdFullName:"Vuc Tiến ", vtdUserName:"tienduc", vtdPass:"ducyb"},
  ]

  const [vtdUsers, setVtdUsers] = useState(listUsers)

  // Hàm sử lý sự kiẹn thêm mới
  const vtdHandleAdd = (vtdParam) => {
    console.log("vtdHandleAdd:", vtdParam);
    
    setVtdUsers(prev =>{
       return[
      ...prev,
      vtdParam
    ]
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Route Dom - Demo - [Vũ Tiến Đức - K23CNT3]</h1>
      <hr />
    <Router>
      <VtdNavNar />
      <Routes>
        <Route path='/' element={<VtdHome/>} />
        <Route path='/about' element={<VtdAbout/>} />
        <Route path='/contact' element={<VtdContact/>} />
        <Route path='/list-user' element={<VtdListUser renderVtdUsers={vtdUsers}/>} />
        <Route path='/create-user' element={<VtdFormUser onVtdAddNew={vtdHandleAdd}/>} />
      </Routes>
    </Router>
    </div>
  )
}
