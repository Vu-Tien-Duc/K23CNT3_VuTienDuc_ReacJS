import React from 'react'

export default function VtdRenderArray() {
    const vtdNumber = [11,22,33,44,55]
    const vtdElement = vtdNumber.map((item) => {
       return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
      {vtdElement}
    </div>
  )
}
