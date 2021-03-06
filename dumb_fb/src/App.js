import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import axios from './config/axios'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Nav from './Nav';
import lucy from './users/lucy.jpg'
import damien from './users/damien.jpg'
import lucyCover from './users/lucy-cover.jpg'
import sunset from './users/sunset.jpg'
import boat from './users/boat.jpeg'
import 'antd/dist/antd.css'
class App extends Component {
  state ={
    profile:{name:'Lucy Sun',pic:damien,coverpic:boat,gender:'female'},
    posts:[{image:lucyCover,comment:'With my bestie in this beautiful place',postOwnerImg:damien,name:'Lucy Sun'}]
  }
  // componentDidMount = () => {
  //   axios.get('localhost:8000/users/login').then(res => console.log(res))
  // }
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' render={() => <Profile states={this.state}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
