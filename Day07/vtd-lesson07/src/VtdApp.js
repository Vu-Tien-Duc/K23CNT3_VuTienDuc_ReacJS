import React, { Component } from 'react'
import VtdEventFormUncontroller from './components/VtdEventFormUncontroller'
import VtdRenderCondition from './components/VtdRenderCondition'
import VtdRenderArray from './components/VtdRenderArray'
import VtdRenderListObject from './components/VtdRenderListObject'
import VtdRenderBT from './components/VtdRenderBT'

export default class VtdApp extends Component {
  render() {
    return (
      <div>
        <VtdEventFormUncontroller />
        <hr />
        <VtdRenderCondition />
        <hr />
        <VtdRenderArray />
        <hr/>
        <VtdRenderListObject />
        <hr style={{border:"20px solid black"}}/>
        <VtdRenderBT />
      </div>
    )
  }
}
