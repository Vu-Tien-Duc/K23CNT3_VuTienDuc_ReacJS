import React from 'react'

export default function VtdFuncCompObj(props) {
  return (
    <div>
        <h2>Props is Object</h2>
        <p><b>Info</b></p>
        <p>fullName: {props.renderInfo.fullName}</p>
        <p>age: {props.renderInfo.age}</p>
        <p>Phone: {props.renderInfo.phone}</p>
    </div>
  )
}
