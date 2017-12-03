import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAprEBKRXcBKPbsyYefmCP7KhPmN1E4GGw",
    authDomain: "my-app-8449f.firebaseapp.com",
    databaseURL: "https://my-app-8449f.firebaseio.com",
  };

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
