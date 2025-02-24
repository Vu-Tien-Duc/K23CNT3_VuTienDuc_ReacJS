import React from 'react'

export default function VtdFuncCompEventProp(Vtdprops) {
    const vtdHandleButtonClick1 = ()=>{
        alert('Dữ liệu từ props:' + Vtdprops.vtdRenderName);
        console.log("Xin chào" + Vtdprops.vtdRenderName)
    }

    const vtdHandleButtonClick2 = (param)=>{
        alert('Dữ liệu từ props:' + Vtdprops.vtdRenderName);
      console.log('=================================');
      console.log('hi',param);
      console.log('=================================');
      
    }
  return ( 
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1 ' onClick={vtdHandleButtonClick1}>Button 1</button>
        <button className='btn btn-danger mx-1' onClick={() => vtdHandleButtonClick2('Button2')}>Button 2</button>
    </div>
  )
}
