import React from 'react';

export default function VtdProductList({ vtdProductList }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-primary text-white">Danh Sách Sản Phẩm</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>vtdpID</th>
              <th>vtdpName</th>
              <th>vtdpQuantity</th>
              <th>vtdpPrice</th>
            </tr>
          </thead>
          <tbody>
            {vtdProductList.map((vtdItem) => (
              <tr key={vtdItem.vtdpId}>
                <td>{vtdItem.vtdpId}</td>
                <td>{vtdItem.vtdpName}</td>
                <td>{vtdItem.vtdpQuantity}</td>
                <td>{vtdItem.vtdpPrice.toLocaleString()}</td> {/* Added number formatting */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
