import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VtdThemSanPham({ onAddProduct }) {
  const [vtdId, setVtdId] = useState('');
  const [vtdNameProduct, setVtdNameProduct] = useState('');
  const [vtdQuantity, setVtdQuantity] = useState('');
  const [vtdPrice, setVtdPrice] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      vtdId,
      vtdNameProduct,
      vtdQuantity: parseInt(vtdQuantity),
      vtdPrice: parseInt(vtdPrice),
    };

    onAddProduct(newProduct);  // Gọi hàm thêm sản phẩm
    navigate('/san-pham');     // Quay lại trang sản phẩm sau khi thêm
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Thêm Sản Phẩm Mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="vtdId" className="form-label">ID Sản Phẩm</label>
          <input
            type="text"
            className="form-control"
            id="vtdId"
            value={vtdId}
            onChange={(e) => setVtdId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vtdNameProduct" className="form-label">Tên Sản Phẩm</label>
          <input
            type="text"
            className="form-control"
            id="vtdNameProduct"
            value={vtdNameProduct}
            onChange={(e) => setVtdNameProduct(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vtdQuantity" className="form-label">Số Lượng</label>
          <input
            type="number"
            className="form-control"
            id="vtdQuantity"
            value={vtdQuantity}
            onChange={(e) => setVtdQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vtdPrice" className="form-label">Giá</label>
          <input
            type="number"
            className="form-control"
            id="vtdPrice"
            value={vtdPrice}
            onChange={(e) => setVtdPrice(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success mt-4">Thêm Sản Phẩm</button>
        </div>
      </form>
    </div>
  );
}
