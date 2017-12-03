//https://www.youtube.com/watch?v=-RtJroTMDf4&feature=youtu.be
import React, { Component } from 'react';

export default class ReminderInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newReminderinfo: '',
        };

        this.handleReminder = this.handleReminder.bind(this);
        this.writeReminder = this.writeReminder.bind(this);
    }

    handleReminder(e){
        this.setState({
            newReminderinfo: e.target.value, // the value of the text input
        })
    }

    writeReminder(){
        this.props.addReminder(this.state.newReminderinfo);
        this.setState({
            newReminderinfo: '',
        })
    }

    render(){
        return(
            <div>
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
