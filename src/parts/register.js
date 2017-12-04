// This allows the user to register and her/his information to be added to the
// Firebase user database

import React, { Component } from 'react'
import { newUser } from '../functions/helpers'


function ErrorMessage(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }

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

              <input class="text-line"
                placeholder= "type email here"
                ref={(email) => this.email = email}/>

              <input class="text-line"
                placeholder= "type password here"
                type="password"
                ref={(password) => this.password = password}/>

            {
              this.state.registerError &&
              <div role="alert">
                <span>Error:</span>
                &nbsp;{this.state.registerError}
              </div>
            }
            <br/><button className= "submit" type="submit">Register</button>
          </div>
        </form>

    )
  }
}
