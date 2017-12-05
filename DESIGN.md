A quick note to dispel any confusion: the word "note" and "reminder" are used
interchangeably within the code.

Also, a decent amount of the more important resources I used are commented within
the code because I often referred back to them.

quickNotes is a web app that was created primarily with javascript: it uses
Node.js backend, JS (with React) frontend, and Firebase. My text-editor was Atom,
but that decision was more arbitrary.  

One of the most important design decisions I made was choosing to learn more
about and implement Node, React, and Firebase, none of which I had any experience
with. I made the decision to try these out, rather than to stay with what I was more
familiar with (Flask, SQL, Python, Cloud9), for two reasons: I both wanted to
acquire new skillsets to supplement those that I had already developed throughout
the course of CS50 and to use languages and software that I felt would be useful
and relevant to any bigger future projects I might pursue.

Despite online comments that mentioned React's fairly steep learning curve and
beginner-unfriendly nature, I chose to try React over jQuery because in my
preliminary research I found that John Resig, who created jQuery, recently
tweeted that he did a majority of his work in React. I also chose Firebase over
SQL because it contains many other capabilities such as hosting and analytics.

Setting up the project itself took time and research, but eventually I ended up
finding https://github.com/facebookincubator/create-react-app which let me
get started and skip the build configuration.

In src/configure, fire.js initializes Firebase and configures the Firebase
JavaScript SDK; essentially, the information that you put in connects to web app
to your Firebase project online. Putting it in one place makes it easy to export
to other files. Also, I chose to only integrate the relevant capabilities (auth,
database, hosting) rather than to include all the capabilities (firestore,
storage, messaging) so as reduce the amount of code in my app.

In src/functions, helpers.js includes most of the firebase-specific functionality
related with authentication-- registering, logging in, and logging out. Another
design decision I made was the was registering was implemented: Firebase makes
it fairly convenient to integrate phone, Google, Facebook, Twitter, and Github login.
I chose to use email/password because as someone just learning, I wanted to start
with basic and functional.

src/parts consists of all the main components of the app. One of the major
decisions I made was to use react-router rather than attempting to use booleans
or other checks in terms of my Shown and Hidden (private/public routes). I chose
this way because I felt it was more clean and concise; more importantly, with
much help from the internet, I managed to actually get the routes to work with
react-router.

src/parts/hidden/reminderComponent includes another design decision: essentially,
I chose to implement my search function using an editable box rather than
redirecting to a different page (the credit for this idea goes to my TA Ethan).
Also, the fact that the database is updated immediately after the user updates it
was another design decision I made because I really liked the idea of real-time
updating and how it adds to general user experience; I weighed this against the
(very true) assumption that the website would never be processing a giant influx
of data.
