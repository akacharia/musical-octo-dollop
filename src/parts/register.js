// This allows the user to register and her/his information to be added to the
// Firebase user database

import React, { Component } from 'react'
import { newUser } from '../functions/helpers'

// If anything goes wrong, the error is "catched" and the user recieves an
// error message
function ErrorMessage(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }

  // Uses the imported helpers to add a new user (auth table)
  handleSubmit = (e) => {
    e.preventDefault()
    newUser(this.email.value, this.password.value)
      .catch(e => this.setState(ErrorMessage(e)))
  }
  render () {
    return (

        <form id="container" className="input" onSubmit={this.handleSubmit}>
          <div class="login">

            <h1> Register! </h1>
              {/* Email input */}
              <input class="text-line"
                placeholder= "type email here"
                ref={(email) => this.email = email}/>
                {/* Password input */}
              <input class="text-line"
                placeholder= "type password here"
                type="password"
                ref={(password) => this.password = password}/>
                {/* Inline funct that happens if there is an error */}
            {
              this.state.registerError &&
              <div role="alert">
                <span>Error:</span>
                &nbsp;{this.state.registerError}
              </div>
            }
            {/* Submit registration */}
            <br/><button className= "submit" type="submit">Register</button>
          </div>
        </form>

    )
  }
}
