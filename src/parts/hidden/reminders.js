import React, { Component } from 'react'
import ReminderComponent from './ReminderComponent';
import ReminderInput from './ReminderInput';
import { ref } from '../../configure/fire'
import firebase from 'firebase'
import 'firebase/database'

import 'semantic-ui-react';

export default class Reminders extends Component {
////////making REMINDERS!!!!

  constructor(props){
    super(props);
    //binding methods to props
    this.addReminder = this.addReminder.bind(this);

    //defining the path to push info to
    this.db = ref.child(`users/${firebase.auth().currentUser.uid}/reminders`);

    // reminders array being dispayed on page
    this.state = {
      reminders:[]
    }
  }

  // upodating the ui to match the database
  componentWillMount() {
    const pastReminders = this.state.reminders;
    //https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot
    // data snapshot object passed to callbacks
    this.db.on('child_added', snap => {
      //pushing location and content to pastReminders
      pastReminders.push({
        id: snap.key,
        reminderContent: snap.val().reminderContent,
      })
      // update entire ui array
      this.setState({
        reminders: pastReminders
      })
    })

    //checking the array unit with the right key as the id of the unit being removed
    this.db.on('child_removed', snap => {
      for (var i = 0; i <pastReminders.length; i++) {
        if(pastReminders[i].id === snap.key){
          pastReminders.splice(i,1);
        }
      }
      // update entire ui array
      this.setState({
        reminders: pastReminders
      })
    })

  }

  // removing reminder from firebase by its id
  removeReminder(id) {
   ref.child(`users/${firebase.auth().currentUser.uid}/reminders/${id}`).remove();
  }

  updateReminder(id, content) {
    console.log(id);
    console.log(content);
    ref.child(`users/${firebase.auth().currentUser.uid}/reminders/${id}`).update({reminderContent: content});
  }

  // adding reminder to firebase
  addReminder(reminder) {
    this.db.push().set({reminderContent: reminder})
  }

  render () {
    return (

        <div className="reminderinput">
        <div class="reminderlogin">
        {
          // callback funct w mapping https://www.w3schools.com/jsref/jsref_map.asp
          // array w content, id, key, remove method
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
        {/* adding reminder bar */}
        <ReminderInput addReminder={this.addReminder}/>

        </div>
        </div>


    );
  }
}
