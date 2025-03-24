import React from 'react'
import { BrowserRouter as VtdRouter, Route , Routes } from 'react-router-dom'
import VtdNavBar from './components/VtdNavBar'
import VtdHome from './components/VtdHome'
import VtdListUser from './components/VtdListUser'
import VtdEditUser from './components/VtdEditUser'
import VtdCreateUser from './components/VtdCreateUser'
export default function VtdApp() {
  return (
    <div className='container border my-3'>
        <h2 className='alert alert-info text-center'>Vux Duc </h2>
        <VtdRouter>
          <VtdNavBar/>
          <hr/>
          <Routes>
              <Route path='/' element={<VtdHome />} />
              <Route path='/vtd-list-user' element={<VtdListUser />} />
              <Route path='/vtd-edit-user/:id' element={<VtdEditUser />} />
              <Route path='/vtd-create-user' element={<VtdCreateUser />} />

          </Routes>
        </VtdRouter>
    </div>
  )
}
