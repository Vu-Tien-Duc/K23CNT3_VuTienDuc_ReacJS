import React, { useState } from 'react'

export default function VtdAddTodo({dispatch}) {
    const [text ,setText] = useState("");

    const vtdHandleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim()) {
            dispatch({type: "ADD_TODO", payload: text});
            setText("");
        }
    };
  return (
    <div>
        <form onSubmit={vtdHandleSubmit}>  
            <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Nhập công việc...'
             />
             <button type='submit'>Thêm</button>
        </form>
    </div>
  )
}
