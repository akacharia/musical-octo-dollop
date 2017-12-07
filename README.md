Link to the video: https://youtu.be/ithY4og5oTU

QuickNotes is a note-taking app that allows users, after registering and logging in, write, edit, and delete their reminders.

First, install node.js:  https://nodejs.org/en/

Then, download the repository by running the following command in the terminal:  
```
git clone https://github.com/akacharia/quickNotes.git
```
After that, we're going to get two of the main components of the app: react-router and Firebase.

For react-router, run the following line in the terminal:
```
npm install --save react-router
```
Now, we're going to configure firebase. Go to https://firebase.google.com/ and create a new project.

One you've done that, click "Add Firebase to your web app" and go to src/configure/fire.js and paste your api key, authDomain, and database url. It should look something like this:

```
  apiKey: "AIzrEBKdqckeEDHIqhcuqewRXcBUHH7KhPmN1E4geYUHGw",
  authDomain: "quickNotes-12345.firebaseapp.com",
  databaseURL: "https://quickNotes-12345.firebaseio.com",
```
Now, after cd-ing into the project directory, if you want to in terminal, run:
```
cd quickNotes
npm install -g firebase-tools
firebase init
```
When you run firebase init, select database. Do the default for everything else.

```
npm install
npm start
```
