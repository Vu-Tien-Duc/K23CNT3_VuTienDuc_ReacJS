import React, { useState } from 'react';
import VtdProductList from './components/VtdProductList';
import VtdProductAdd from './components/VtdProductAdd';

export default function VtdApp() {
  const vtdProduct = [
    { vtdpId: "2310900023", vtdpName: "Vũ Tiến Đức", vtdpQuantity: 20, vtdpPrice: 20000 },
    { vtdpId: "SP001", vtdpName: "Cây Tài Lộc", vtdpQuantity: 100, vtdpPrice: 835113 },
    { vtdpId: "SP002", vtdpName: "Cây Phong Thủy", vtdpQuantity: 345, vtdpPrice: 664864 },
    { vtdpId: "SP003", vtdpName: "Cây Cảnh", vtdpQuantity: 720, vtdpPrice: 1648653 },
  ];
  
  const [vtdProductList, setVtdProductList] = useState(vtdProduct);

  // Function to add a new product
  const vtdAddNewProduct = (vtdNewProduct) => {
    setVtdProductList((vtdPrevProducts) => [...vtdPrevProducts, vtdNewProduct]);
  };

  return (
    <div className="container-fluid">
      <VtdProductAdd vtdAddNewProduct={vtdAddNewProduct} />
      <VtdProductList vtdProductList={vtdProductList} />
    </div>
  );
}
