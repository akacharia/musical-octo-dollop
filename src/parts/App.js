// public/private: https://reacttraining.com/react-router/web/example/auth-workflow
// https://tylermcginnis.com/react-router-protected-routes-authentication/

import React, { Component } from 'react'
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

import Login from './login'
import Register from './register'
import Home from './homepage'

import Reminders from './hidden/reminders.js'
import { logout } from '../functions/helpers'
import { firebaseAuth } from '../configure/fire'

import 'semantic-ui-react';
import './App.css';

function Hidden ({component: Component, loggedIn, ...rest}) {
  return (
    <Route {...rest} render={(props) => loggedIn === true?
      <Component {...props} />
      :<Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function Shown ({component: Component, loggedIn, ...rest}) {
  return (
    <Route {...rest} render={(props) => loggedIn === false?
      <Component {...props} />
      :<Redirect to='/reminders' />}
    />
  )
}

export default class App extends Component {
  state = {
    loggedIn: false,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,

        })
      } else {
        this.setState({
          loggedIn: false,
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <Router>
        <ul class="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reminders">Reminders</Link></li>
          {this.state.loggedIn?
               <button className="logout" onClick={() => {logout()}}>Logout</button>
            : <span>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </span>}

              <Switch>
                <Route path='/' exact component={Home} />
                <Shown loggedIn={this.state.loggedIn} path='/login' component={Login} />
                <Shown loggedIn={this.state.loggedIn} path='/register' component={Register} />
                <Hidden loggedIn={this.state.loggedIn} path='/reminders' component={Reminders} />
                <Route render={() => <p>not a valid path</p>} />
              </Switch>

        </ul>
      </Router>
    );
  }
}
