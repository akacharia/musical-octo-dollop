import firebase from 'firebase'

// Initializing Firebase with unique keys; this can be found after creating a new project
// Insert your own keys here
const config = {
  apiKey: "AIzenflwkeflwAp7KhPmN1E4GGw",
  authDomain: "quickNotes-1234.firebaseapp.com",
  databaseURL: "https://quickNotes-1234.firebaseio.com",
  };

firebase.initializeApp(config);

// Exporting consts for the Firebase database and the (user) authentification
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
