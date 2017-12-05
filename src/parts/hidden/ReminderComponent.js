// Some backround on binding: https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
// This makes up each individual note (each note in the list is it's own component)

import React, { Component } from 'react';
import "./reminders.css"
var ContentEditable = require("react-contenteditable");

export default class ReminderComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
          html: props.reminderContent
        }

        // Binding "this" for the instances of the object
        this.reminderId = props.reminderId;
        this.handleRemoveReminder = this.handleRemoveReminder.bind(this);
        this.handleEditReminder = this.handleEditReminder.bind(this);
    }

    // Method to remove note; function refers to removeRemider in App
    handleRemoveReminder(id) {
      this.props.removeReminder(id);
    }

    // Method to edit note; function refers to updateRemider in App
    handleEditReminder(id, evt){
      this.props.updateReminder(id, evt.target.value);
    };

    render () {
      return(
        <div class="box">

        <li>
            {/* Makes the x-button that can remove the note */}
            {<button onClick={() => this.handleRemoveReminder(this.reminderId)}>X</button>}
        </li>
          <li>
          {/* Makes the note editable */}
          <ContentEditable
            html={this.state.html}
            disabled={false}
            onChange={(e) => this.handleEditReminder(this.reminderId, e)}
          />
          </li>

            <br/>

        </div>
      )}
  }
