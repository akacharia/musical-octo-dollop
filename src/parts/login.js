import React, { Component } from 'react'
import { login } from '../functions/helpers'

// If the username/password are incorect, this function sets the error message
// to reflect that
function ErrorAlert(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }

  // If submitted, use the login function (from helpers)
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.password.value)
      // if there's a
      .catch((error) => {
          // If the username/password can't be found, changing login method state
          this.setState(ErrorAlert('Incorrect username/password.'))
        })
  }

  render () {
    return (
        <form id="container" className="input" onSubmit={this.handleSubmit}>
          <div class="login">
            <h1> Login! </h1>

              // Email input box
              <input class="text-line"
                placeholder= "type email here"
                // Setting ref so it can be saved
                ref={(email) => this.email = email}/>

              <br/>

              // Password input box
              <input class="text-line"
                placeholder= "type password here"
                type="password"
                ref={(password) => this.password = password} />

              // Displays error message if login is incorrect (funct)
              {
                this.state.loginMessage &&
                <div>
                  <span>Error:</span>
                  &nbsp;{this.state.loginMessage}
                </div>
              }

            <br/>
            // Login button
            <button className="submit" type="submit">Login</button>
          </div>
        </form>

    )
  }
}
