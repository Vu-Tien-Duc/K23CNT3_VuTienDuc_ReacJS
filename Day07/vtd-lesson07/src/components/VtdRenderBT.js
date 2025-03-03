import React, { Component } from 'react'

export default class VtdRenderBT extends Component {
    constructor(props){
        super(props);
        this.state={
            vtdInitialState : [
                {
                    vtdProductId: "P001",
                    vtdProductName: "IPhone 11",
                    vtdQuantity: 15,
                    vtdPrice: 1000
                },
                {
                    vtdProductId: "P002",
                    vtdProductName: "IPhone 12",
                    vtdQuantity: 20,
                    vtdPrice: 1250
                },
                {
                    vtdProductId: "P003",
                    vtdProductName: "IPhone 13",
                    vtdQuantity: 10,
                    vtdPrice: 1500
                },
                {
                    vtdProductId: "P004",
                    vtdProductName: "IPhone 14",
                    vtdQuantity: 15,
                    vtdPrice: 2000
                }
            ],
            
        }
    }
  render() {
    // hiển thị danh sách sản phâme
    let vtdInitialState = this.state.vtdInitialState
    let vtdElement =  vtdInitialState.map((vtdItem)=>{
        return(
          <tr>
            <td>{vtdItem.vtdProductId}</td>
            <td>{vtdItem.vtdProductName}</td>
            <td>{vtdItem.vtdQuantity}</td>
            <td>{vtdItem.vtdPrice}</td>
            <td>
                    <button className='btn btn-success mx-2'>Sửa</button>
                     <button className='btn btn-danger mx-2'>Xóa</button>
            </td>
          </tr>
        )
    })
    return (
      <div>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Mã Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                   {vtdElement}
                </tbody>
            </table>
      </div>
    )
  }
}
