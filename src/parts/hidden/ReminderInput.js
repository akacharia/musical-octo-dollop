// This allows the user to write a note; it consists of a text-box and a button
// The note is then pushed to the user's database
//https://www.youtube.com/watch?v=-RtJroTMDf4&feature=youtu.be

import React, { Component } from 'react';

export default class ReminderInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newReminderinfo: '',
        };
        // Binding methods for reference
        this.handleReminder = this.handleReminder.bind(this);
        this.writeReminder = this.writeReminder.bind(this);
    }

    // Allows the user input to be saved as the state of the text box
    handleReminder(e){
        this.setState({
            newReminderinfo: e.target.value, // the value of the text input
        })
    }

    // Allows user to push note to the database
    writeReminder(){
        this.props.addReminder(this.state.newReminderinfo);
        // After note is pushed, reset state
        this.setState({
            newReminderinfo: '',
        })
    }

    render(){
        return(
            <div>
                {/* Creates the textbox and the submit button that allows user
                  to write notes to the list */}
                <input
                class="text-line"
                placeholder="Write a reminder..."
                value={this.state.newReminderinfo}
                onChange={this.handleReminder} />

                <button onClick={this.writeReminder}>Add</button>
            </div>
        )
    }
}
