import React, { Component } from 'react';
import "./reminders.css"
var ContentEditable = require("react-contenteditable");

export default class ReminderComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
          html: props.reminderContent
        }

        this.reminderId = props.reminderId;
        this.handleRemoveReminder = this.handleRemoveReminder.bind(this);
        this.handleEditReminder = this.handleEditReminder.bind(this);
    }

    handleRemoveReminder(id) {
      this.props.removeReminder(id);
    }

    handleEditReminder(id, evt){
      this.props.updateReminder(id, evt.target.value);
    };

    render () {
      return(
        <div class="box">

        <li>
            {<button onClick={() => this.handleRemoveReminder(this.reminderId)}>X</button>}
        </li>
          <li>
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
