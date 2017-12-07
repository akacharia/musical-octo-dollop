// This allows the user to write a note; it consists of a text-box and a button
// The note is then pushed to the user's database
// https://www.youtube.com/watch?v=-RtJroTMDf4&feature=youtu.be

import React, { Component } from 'react';

export default class ReminderInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newReminderinfo: '',
        };
        // Binding "this" for the instances of the object/ later reference
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
        // After note is pushed, reset state to null
        this.setState({
            newReminderinfo: '',
        })
    }

    render(){
        return(
            <div>
                {/* Creates the textbox; as the user types, the state of the
                  box is changed with the handler */}
                <input
                class="text-line"
                placeholder="Write a quickNote..."
                value={this.state.newReminderinfo}
                onChange={this.handleReminder} />
                {/* When the button is clicked, the content is pushed to the
                  addReminder function */}
                <button onClick={this.writeReminder}>Add</button>
            </div>
        )
    }
}
