import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VtdHome from './components/VtdHome';
import VtdNavBar from './components/VtdNavBar';
import VtdListUser from './components/VtdListUser';
import VtdCreateUser from './components/VtdCreateUser';
import VtdEditUser from './components/VtdEditUser';

export default function VtdApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MinniProject - [Vũ Tiến Đức - K23CNT3]</h1>
        <hr />
        <Router>
          <VtdNavBar /> 
          <Routes>
            <Route path="/" element={<VtdHome />} />
            <Route path="/list-user" element={<VtdListUser />} /> 
            <Route path="/create-user" element={<VtdCreateUser />} />
            <Route path="/edit-user/:id" element={<VtdEditUser />} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}
