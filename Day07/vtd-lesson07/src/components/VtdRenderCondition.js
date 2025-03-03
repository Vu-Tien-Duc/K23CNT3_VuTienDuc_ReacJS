import React, { Component } from 'react'
import VtdLoginControl from './VtdLoginControl';

export default class VtdRenderCondition extends Component {
constructor(props)
{
  super(props);
  this.state={
    isLogIn: false
  }
}
// hàm xử lý sk login
vtdHandleLogin = ()=>{
  this.setState({
    isLogIn:true
  })
}
vtdHandleLogout = ()=>{
  this.setState({
    isLogIn:false
  })
}

  render() {
    let flag = this.state.isLogIn
    return (
      <div className='alert alert-danger'>
            <h2>Render Condition</h2>
            <hr/>
            <VtdLoginControl isLogIn={flag} />
            <hr/>
            {
              flag?<button onClick={this.vtdHandleLogout}>Logout</button>:<button onClick={this.vtdHandleLogin}>Login</button>
            }
      </div>
    )
  }
}
