import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <li>
              <NavLink exact to='/' activeStyle={{ backgroundColor: '#1c263a' }}>Login</NavLink>
            </li>
            <li>
              <NavLink exact to='/register' activeStyle={{ backgroundColor: '#1c263a' }}>Register</NavLink>
            </li>
            <li>
              <NavLink exact to='/profile' activeStyle={{ backgroundColor: '#1c263a' }}>Profile</NavLink>
            </li>
          </nav>
    )
}

export default Nav
