import React, { useState } from 'react';

export default function VtdProductAdd({ vtdAddNewProduct }) {
  const [vtdProduct, setVtdProduct] = useState({
    vtdpId: '',
    vtdpName: '',
    vtdpQuantity: '',
    vtdpPrice: '',
  });

  const vtdHandleChange = (e) => {
    const { name, value } = e.target;
    setVtdProduct({ ...vtdProduct, [name]: value });
  };

  const vtdHandleSubmit = (e) => {
    e.preventDefault();
    if (vtdProduct.vtdpId && vtdProduct.vtdpName && vtdProduct.vtdpQuantity && vtdProduct.vtdpPrice) {
        vtdAddNewProduct(vtdProduct);
      setVtdProduct({
        vtdpId: '',
        vtdpName: '',
        vtdpQuantity: '',
        vtdpPrice: '',
      });
    } else {
      alert('Vui Lòng Nhập Tất Cả Các Dữ Liệu');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-success text-white">Thêm Sản Phẩm Mới</h3>
        <form onSubmit={vtdHandleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="vtdpId" className="form-label">vtdpID</label>
              <input
                type="text"
                className="form-control"
                id="vtdpId"
                name="vtdpId"
                value={vtdProduct.vtdpId}
                onChange={vtdHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpName" className="form-label">vtdpName</label>
              <input
                type="text"
                className="form-control"
                id="vtdpName"
                name="vtdpName"
                value={vtdProduct.vtdpName}
                onChange={vtdHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpQuantity" className="form-label">vtdpQuantity</label>
              <input
                type="number"
                className="form-control"
                id="vtdpQuantity"
                name="vtdpQuantity"
                value={vtdProduct.vtdpQuantity}
                onChange={vtdHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpPrice" className="form-label">vtdpPrice</label>
              <input
                type="number"
                className="form-control"
                id="vtdpPrice"
                name="vtdpPrice"
                value={vtdProduct.vtdpPrice}
                onChange={vtdHandleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Thêm Sản Phẩm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
