// The homepage (the only page that is acsessible to all regadless of auth state)
// If displays my cs50 video
import React, { Component } from 'react'

// Importing the youtube video
export default class Homepage extends Component {
  render () {
    return (
      <div>
      <p class="home">
      <iframe width="700" height="455" src="https://www.youtube.com/embed/ithY4og5oTU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </p>
      </div>

)
}
}
