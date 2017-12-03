//https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseAuth
//https://firebase.google.com/docs/reference/android/com/google/firebase/auth/FirebaseUser
//import firebase from 'firebase'
//import Auth from 'firebase'

import { ref, firebaseAuth, } from '../configure/fire'

export function newUser (email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
    .then(infoTab)
}

function infoTab (user) {

  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}


export function login (email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function logout () {
  return firebaseAuth().signOut()
}

// export function addRecipie(recipieName) {
//   var user = firebase.auth().currentUser.uid;
//   console.log(user);
//
// }
