import React from 'react'

 function VtdFuncComp(props) {
  return (
    <div>
        <h1>Demo: function components props</h1>
        <p>Lấy Dữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Address: {props.address}</p>
        <p>Note: {props.note}</p>
    </div>
  )
}
export default VtdFuncComp;