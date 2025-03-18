import React from 'react'
import VtdReadApiLocal from './components/VtdReadApiLocal'
import VtdReadMockAPI from './components/VtdReadMockAPI'
import VtdCreateMockAPI from './components/VtdCreateMockAPI'

export default function VtdApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>ReactJS -API - Vũ Tiến Đức</h1>
    <VtdReadApiLocal />
    <hr/>
    <h2>Đọc dữ liệu từ MockApi (mocapi.io)</h2>
    <VtdReadMockAPI />

    <VtdCreateMockAPI />
    </div>
  )
}
