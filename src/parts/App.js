// Userful sources:
// public/private: https://reacttraining.com/react-router/web/example/auth-workflow
// https://tylermcginnis.com/react-router-protected-routes-authentication/

// This page sets up the navigation bar that allows the user to access all the
// other relevant pages

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

// React protected routes (react router), that allow users to acsess only if
// logged in
function Hidden ({component: Component, loggedIn, ...rest}) {
  return (
    // Checks if logged in, and if logged in the page displays. If not logged in,
    // the page redirects to the login page
    <Route {...rest} render={(props) => loggedIn === true?
      <Component {...props} />

      :<Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

// React unprotected routes so users can't acsess login/register when logged in
function Shown ({component: Component, loggedIn, ...rest}) {
  return (
    // Checks if not logged in, and if not logged in the page displays. If not
    // logged in, the page redirects to the remainder page
    <Route {...rest} render={(props) => loggedIn === false?
      <Component {...props} />
      :<Redirect to='/quickNotes' />}
    />
  )
}

export default class App extends Component {
  // Used to check if logged in for protected routes
  state = {
    loggedIn: false,
  }

  // Happens before the page renders (mounts on to DOM), checking if the user
  //is authed against fitrebase
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        })
      }

      else {
        this.setState({
          loggedIn: false,
        })
      }
    })
  }

  // Happens before component stops being rendered (is taken off DOM)
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      // React router to navigate between pages
      <Router>
        <ul class="nav">
          {/*  Link to Home and Reminders will always be present */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quickNotes">QuickNotes</Link></li>

          {/* Inline function to check if someone is logged in so it will know
          whether to display logout or login/register */}
          {this.state.loggedIn?
               <button className="logout" onClick={() => {logout()}}>Logout</button>
            : <span>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </span>}

              {/* Setting up the paths for the links using react router */}
              <Switch>
                <Route path='/' exact component={Home} />
                <Shown loggedIn={this.state.loggedIn} path='/login' component={Login} />
                <Shown loggedIn={this.state.loggedIn} path='/register' component={Register} />
                <Hidden loggedIn={this.state.loggedIn} path='/quickNotes' component={Reminders} />
                <Route render={() => <p class="home"> 404!!! This page does not exist! </p>} />
              </Switch>

        </ul>
      </Router>
    );
  }
}
