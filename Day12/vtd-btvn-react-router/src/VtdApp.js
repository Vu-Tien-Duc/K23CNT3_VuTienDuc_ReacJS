import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VtdNavNar from './components/VtdNavNar';
import VtdHome from './components/VtdHome';
import VtdGioiThieu from './components/VtdGioiThieu';
import VtdSanPham from './components/VtdSanPham';
import VtdTinTuc from './components/VtdTinTuc';
import VtdLienHe from './components/VtdLienHe';
import VtdThemSanPham from './components/VtdThemSanPham';  // Import VtdThemSanPham

export default function VtdApp() {
  // Danh sách sản phẩm ban đầu
  const [vtdSanPhams, setVtdSanPhams] = useState([
    { vtdId: 'SP001', vtdNameProduct: 'Cây Cảnh', vtdQuantity: 22, vtdPrice: 3130130 },
    { vtdId: 'SP002', vtdNameProduct: 'Cây Phong Thủy', vtdQuantity: 113, vtdPrice: 535353 },
    { vtdId: 'SP003', vtdNameProduct: 'Cây Thủy Sinh', vtdQuantity: 231, vtdPrice: 13123 }
  ]);

  // Hàm thêm sản phẩm mới
  const vtdHandleAddProduct = (product) => {
    setVtdSanPhams((prev) => [...prev, product]);
  };

  return (
    <div className="container border my-5 rounded shadow-lg p-4 bg-light">
      <h1 className="text-center text-primary mb-4">
        <span className="text-warning">React Router DOM</span> - BTVN -{' '}
        <span className="text-danger">[Vũ Tiến Đức - K23CNT3]</span>
      </h1>
      <hr />
      <Router>
        <VtdNavNar />
        <div className="bg-info p-3 rounded mb-4 shadow">
          <Routes>
            <Route path="/" element={<VtdHome />} />
            <Route path="/gioi-thieu" element={<VtdGioiThieu />} />
            <Route path="/san-pham" element={<VtdSanPham vtdSanPhams={vtdSanPhams} />} />
            <Route path="/them-san-pham" element={<VtdThemSanPham onAddProduct={vtdHandleAddProduct} />} />
            <Route path="/tin-tuc" element={<VtdTinTuc />} />
            <Route path="/lien-he" element={<VtdLienHe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
