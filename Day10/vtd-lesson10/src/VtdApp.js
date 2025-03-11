import React from 'react'
import VtdUseState from './components/VtdUseState'
import VtdUseEffect from './components/VtdUseEffect'

export default function VtdApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <VtdUseState />
        <VtdUseEffect />
    </div>
  )
}
