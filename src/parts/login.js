import React, { Component } from 'react'
import { login } from '../functions/helpers'


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.password.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }

  render () {
    return (
        <form id="container" className="input" onSubmit={this.handleSubmit}>

          <div class="login">
          <h1> Login! </h1>

            <input class="text-line" placeholder= "type email here" ref={(email) => this.email = email}/>
            <br/>

            <input class="text-line" placeholder= "type password here" type="password" ref={(password) => this.password = password} />

            {
              this.state.loginMessage &&
              <div>
                <span>Error:</span>
                &nbsp;{this.state.loginMessage}
              </div>
            }
          <br/><button className="submit" type="submit">Login</button>
          </div>
        </form>

    )
  }
}
