import { ref, firebaseAuth, } from '../configure/fire'


function infoTab (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function newUser (email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
    .then(infoTab)
}

// Login function
export function login (email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

// Logout function
export function logout () {
  return firebaseAuth().signOut()
}
