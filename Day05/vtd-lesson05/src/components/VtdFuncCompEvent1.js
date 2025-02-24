import React from 'react'

export default function VtdFuncCompEvent1() {
    // hàm xữ lý sự kiện
    const vtdEventButton1Click = ()=>{
        alert('button 1 - Clicked')
    }
    
const vtdEventButton2Click = ()=>{
    alert('buttom 2 - Clicked')
}

    const vtdEventButton3Click = (name) => {
        alert("Name:" + name)
    }
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={vtdEventButton1Click()}>Button1</button> */}
        <button className='btn btn-success mx-1' onClick={vtdEventButton2Click}>Button2</button>
        <button className='btn btn-success mx-1' onClick={()=>vtdEventButton3Click("Vũ Đức")}>Button3</button>
        {/* <button className='btn btn-success' onClick={vtdEventButton3Click("Vũ Đức")}>Button4</button> */}


    </div>
  )
}
