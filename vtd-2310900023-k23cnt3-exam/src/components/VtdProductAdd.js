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
      <div className="card shadow-lg rounded border-info">
        <h3 className="card-header text-center bg-gradient text-black py-3">Thêm Sản Phẩm Mới</h3>
        <form onSubmit={vtdHandleSubmit}>
          <div className="card-body bg-light">
            <div className="mb-3">
              <label htmlFor="vtdpId" className="form-label text-primary">vtdpID:</label>
              <input
                type="text"
                className="form-control form-control-lg border-info"
                id="vtdpId"
                name="vtdpId"
                value={vtdProduct.vtdpId}
                onChange={vtdHandleChange}
                required
                placeholder="Nhập mã sản phẩm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpName" className="form-label text-primary">vtdpName:</label>
              <input
                type="text"
                className="form-control form-control-lg border-info"
                id="vtdpName"
                name="vtdpName"
                value={vtdProduct.vtdpName}
                onChange={vtdHandleChange}
                placeholder="Nhập tên sản phẩm"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpQuantity" className="form-label text-primary">vtdpQuantity:</label>
              <input
                type="number"
                className="form-control form-control-lg border-info"
                id="vtdpQuantity"
                name="vtdpQuantity"
                value={vtdProduct.vtdpQuantity}
                onChange={vtdHandleChange}
                placeholder="Nhập số lượng"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vtdpPrice" className="form-label text-primary">vtdpPrice:</label>
              <input
                type="number"
                className="form-control form-control-lg border-info"
                id="vtdpPrice"
                name="vtdpPrice"
                value={vtdProduct.vtdpPrice}
                onChange={vtdHandleChange}
                placeholder="Nhập giá sản phẩm"
              />
            </div>
            <button type="submit" className="btn btn-info btn-lg w-100">Thêm Sản Phẩm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
