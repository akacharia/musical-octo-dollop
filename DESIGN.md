
A "design document" for your project in the form of a file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did. Your design document should be at least several paragraphs in length. Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.

Many of the resources I used are commented within the code because I often referred
back to them.

quickNotes is a web app that was created primarily with javascript: Node.js
backend and JS (with React) frontend. The database that I chose to learn about
and integrate is Firebase.

Some of the more important design choices that I made were choosing to learn and
use React and Firebase. I chose to try React over jQuery because  when researching
what languages I wanted to learn more about I read that John Resig, who created
jQuery, said that he does a majority of his work in React.

I chose to learn more about firebase because I felt like it had more capabilities than sql:
firebase, once one learns more about it, has specific ways for authtification with not
just email, but google, facebook, and phone. It also, like heroku, is pretty big on hosting websites and there is a whole section on analytics and growth.

Essentially, I chose what I did as opposed to software I was more familiar with because
not only did I want to learn something new, but I wanted that somethig new to
be incredibly useful and applicable if I wanted to pursue a bigger project in the
future.

The react app has no build configuration because it was bootstrapped of https://github.com/facebookincubator/create-react-app. All the relevant files that I
worked on are in the src folder. In src/configure, fire.js helps integrate firebase to
the wb app.

hidden has the private routes.

One of my decisions was to user react router for the authentication; I could have made provate
pages by a simple boolean method instead

Another design decision was the login functionality

Another design decision was how to implement the edit note; the idea for that can be credited to my TA Ethan
