import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route,NavLink } from 'react-router-dom';

import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <li>
              <NavLink exact to='/' activeStyle={{ backgroundColor: 'green' }}>Login</NavLink>
            </li>
            <li>
              <NavLink exact to='/register' activeStyle={{ backgroundColor: 'green' }}>Register</NavLink>
            </li>
            <li>
              <NavLink exact to='/profile' activeStyle={{ backgroundColor: 'green' }}>Profile</NavLink>
            </li>
          </nav>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register}/>
            <Route exact path='/profile' component={Profile}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
