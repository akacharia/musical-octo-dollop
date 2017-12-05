import firebase from 'firebase'

// Initializing Firebase with unique keys; this can be found after creating a
// new project
const config = {
    apiKey: "paste api key",
    authDomain: "paste domain",
    databaseURL: "paste url",
  };

firebase.initializeApp(config);

// Exporting consts for the Firebase database and the (user) authentification
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
