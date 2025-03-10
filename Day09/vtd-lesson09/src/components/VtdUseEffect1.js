import React, { useEffect, useState } from 'react'

export default function VtdUseEffect1() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("useEffect: (callback)");
        
    })
    useEffect(()=>{
        console.log("useEffect: (callback),[]; chi 1 lan duy nhat (reonly)");
        
    },[])

    useEffect(()=>{
        console.log("Count has changed:",count);
        
    })
  return (
    <div>
        <h2 className='alert alert-danger'>useEffect (callback)</h2>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
