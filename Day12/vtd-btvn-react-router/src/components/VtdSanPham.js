import React from 'react';
import { Link } from 'react-router-dom';

export default function VtdSanPham({ vtdSanPhams }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Danh sách Sản Phẩm</h2>

      {/* Table */}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {vtdSanPhams.map((product, index) => (
            <tr key={product.vtdId}>
              <td>{index + 1}</td>
              <td>{product.vtdId}</td>
              <td>{product.vtdNameProduct}</td>
              <td>{product.vtdQuantity}</td>
              <td>{product.vtdPrice.toLocaleString()}₫</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Nút thêm sản phẩm */}
      <div className="text-center">
        <Link to="/them-san-pham" className="btn btn-primary mt-4">
          Thêm Sản Phẩm
        </Link>
      </div>
    </div>
  );
}
