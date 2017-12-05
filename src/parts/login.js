// Provides the app's login functionality. Passes the user input and using
// helpers.js uploads the info to the database

import React, { Component } from 'react'
import { login } from '../functions/helpers'
import { changePass } from '../functions/helpers'

// If the username/password are incorect, this function sets the error message
// to reflect that
function ErrorAlert(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }

  changePass = () => {
      changePass(this.email.value)
        .then(() => this.setState(ErrorAlert(`Reset info sent to ${this.email.value}.`)))
        .catch((error) => this.setState(ErrorAlert(`bad email`)))
    }

  // If submitted, use the login function (from helpers)
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.password.value)
      // if there's a
      .catch((error) => {
          // If the username/password can't be found, changing login method state
          this.setState(ErrorAlert('bad username/password.'))
        })
  }

  render () {
    return (
        <form id="container" className="input" onSubmit={this.handleSubmit}>
          <div class="login">
            <h1> Login! </h1>

            {
              this.state.loginMessage &&
              <div className= "error-alert">
                <span>Error:</span>
                &nbsp;{this.state.loginMessage}
                <br/>
                <a href="#" onClick={this.changePass}> change your password? </a>
              </div>
            }

              {/* Email input box */}
              <input class="text-line"
                placeholder= "type email here"
                 // Setting ref so it can be saved
                ref={(email) => this.email = email}/>

              <br/>

              {/* Password input box */}
              <input class="text-line"
                placeholder= "type password here"
                type="password"
                ref={(password) => this.password = password} />

              {/* Displays error message if login is incorrect (funct) */}


            <br/>
            {/* Login button */}
            <button className="submit" type="submit">Login</button>
          </div>
        </form>

    )
  }
}
