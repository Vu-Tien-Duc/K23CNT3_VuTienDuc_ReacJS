import React from 'react'
import VtdHome from './VtdHome'
import {Link} from 'react-router-dom'
export default function VtdNavBar() {
  return (
    <div>
        <nav>
            <Link to='/' >Home</Link>   |
            <Link to='/vtd-list-user'>List User</Link>  |
            <Link to='/vtd-create-user' >Create User</Link>

        </nav>
    </div>
  )
}
