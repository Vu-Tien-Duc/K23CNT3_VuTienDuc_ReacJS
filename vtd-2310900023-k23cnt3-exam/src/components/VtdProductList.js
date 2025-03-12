import React from 'react';

export default function VtdProductList({ vtdProductList }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded border-primary">
        <h3 className="card-header text-center bg-gradient text-black py-3">Danh Sách Sản Phẩm</h3>
        <table className="table table-hover table-striped table-bordered table-responsive">
          <thead className="table-dark text-center">
            <tr>
              <th>vtdpID</th>
              <th>vtdpName</th>
              <th>vtdpQuantity</th>
              <th>vtdpPrice</th>
            </tr>
          </thead>
          <tbody>
            {vtdProductList.map((vtdItem) => (
              <tr key={vtdItem.vtdpId} className="text-center">
                <td>{vtdItem.vtdpId}</td>
                <td>{vtdItem.vtdpName}</td>
                <td>{vtdItem.vtdpQuantity}</td>
                <td>{vtdItem.vtdpPrice.toLocaleString()}₫</td> {/*Thêm ký hiệu tiền tệ */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
