import React from 'react'
import VtdUseState from './components/VtdUseState'
import VtdUseStateListObject from './components/VtdUseStateListObject'
import VtdUseEffect1 from './components/VtdUseEffect1'

export default function VtdApp() {
  return (
    <div className='container border mt-3'>
      <h1>React Hook</h1>
      <VtdUseState />
      <hr />
      <VtdUseStateListObject />
      <hr />
      <VtdUseEffect1 />
    </div>
  )
}
