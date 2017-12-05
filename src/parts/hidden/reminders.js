// Displays all the notes in the database list and the reminder input-box itself
// Is one of the main connections (because mounting) between the information
// in the database and what the user can see and acsess.
// Includes the functions that add, edit, and delete notes to/from the database

import React, { Component } from 'react'
import ReminderComponent from './ReminderComponent';
import ReminderInput from './ReminderInput';
import { ref } from '../../configure/fire'
import firebase from 'firebase'
import 'firebase/database'

import 'semantic-ui-react';

export default class Reminders extends Component {
// Making NOTES!!!

  constructor(props){
    super(props);
    // Binding methods to props
    this.addReminder = this.addReminder.bind(this);

    // Defining the path to push info to
    this.db = ref.child(`users/${firebase.auth().currentUser.uid}/reminders`);

    // Reminders array being dispayed on page
    this.state = {
      reminders:[]
    }
  }

  // Upodating the ui to match the database
  componentWillMount() {
    const pastReminders = this.state.reminders;
    // https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot
    // Data snapshot object passed to callbacks
    this.db.on('child_added', snap => {
      // Pushing location and content to pastReminders
      pastReminders.push({
        id: snap.key,
        reminderContent: snap.val().reminderContent,
      })
      // Update entire ui array
      this.setState({
        reminders: pastReminders
      })
    })

    // Checking the array unit with the right key as the id of the unit being removed
    this.db.on('child_removed', snap => {
      for (var i = 0; i <pastReminders.length; i++) {
        if(pastReminders[i].id === snap.key){
          pastReminders.splice(i,1);
        }
      }
      // Update entire ui array
      this.setState({
        reminders: pastReminders
      })
    })

  }

  // Removing reminder from firebase by its id
  removeReminder(id) {
   ref.child(`users/${firebase.auth().currentUser.uid}/reminders/${id}`).remove();
  }

  // Allows user to update the note by going to it's id and rewriting the reminderContent
  // The fact that the note is updated real-time is a design choice
  updateReminder(id, content) {
    console.log(id);
    console.log(content);
    ref.child(`users/${firebase.auth().currentUser.uid}/reminders/${id}`).update({reminderContent: content});
  }

  // Adding reminder to firebase
  addReminder(reminder) {
    this.db.push().set({reminderContent: reminder})
  }

  render () {
    return (

        <div className="reminderinput">
        <div class="reminderlogin">
        {
          // Callback funct w mapping https://www.w3schools.com/jsref/jsref_map.asp
          // Array w content, id, key, remove method 
          this.state.reminders.map((reminder) => {
            return (
              <ReminderComponent updateReminder = {this.updateReminder} reminderContent={reminder.reminderContent}
              reminderId={reminder.id}
              key={reminder.id}
              removeReminder = {this.removeReminder}
              />

            )
          })
        }
        {/* Adding reminder bar */}
        <ReminderInput addReminder={this.addReminder}/>

        </div>
        </div>


    );
  }
}
