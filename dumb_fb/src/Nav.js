import React from 'react'
import { NavLink } from 'react-router-dom'
import LocalStorageService from './services/localStorageService'
import {notification} from 'antd'

function Nav() {
  const logOut = () => {
    LocalStorageService.removeToken()
    LocalStorageService.removeUserName()
    notification.info({message:'You are now logged out'})
    window.location.replace('/')
  }
  return (
    <nav>
      <div className="navLeft">
        <li>
          <NavLink exact to='/' activeStyle={{ backgroundColor: '#1c263a' }}>Login</NavLink>
        </li>
        <li>
          <NavLink exact to='/register' activeStyle={{ backgroundColor: '#1c263a' }}>Register</NavLink>
        </li>
        <li>
          <NavLink exact to='/profile' activeStyle={{ backgroundColor: '#1c263a' }}>Profile</NavLink>
        </li>
      </div>
      <div className="navRight">
        <li>
        <NavLink exact to='/' activeStyle={{ backgroundColor: '#1c263a' }} onClick={logOut}>LogOut</NavLink>
        </li>
      </div>
    </nav>
  )
}

export default Nav
