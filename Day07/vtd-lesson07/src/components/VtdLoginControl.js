import React from 'react'
import VtdLoginCom from './VtdLoginCom';
import VtdLogoutCom from './VtdLogoutCom';

export default function VtdLoginControl(props) {
    var isLogIn = props.isLogIn;
    var vtdLoginControl = isLogIn? <VtdLoginCom />: <VtdLogoutCom/>;
  return (
    
    <div>
        {vtdLoginControl}
    </div>
  )
}
