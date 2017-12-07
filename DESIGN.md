I just want to preface my design doc my commenting on the immense amount of time I spent on this project; I think I did end up spending at least 1/3 or more of my time doing general CS50 work on this project.
The main reason for that was because of the languages and tools I used: quickNotes is a web app that was created primarily with Javascript: it uses Node.js backend, JS (with React) frontend, and Firebase. My text-editor was Atom, but that decision was more arbitrary.  

Some context (from other people) into the difficulty of learning React; some find it hard, some don’t but it’s good for a fairly non-cherrypicked sampling:  https://www.quora.com/Can-a-beginner-learn-ReactJS
This is just the first search result but, while some people do recommend it and do say that beginners (like myself) can learn react, many also do point out that it is hard—

“However if you’re a beginner, I’d offer a word of caution. If you’ve got the spine for it, press onward and learn the big-boy tools. Otherwise, you may want to consider learning something less conceptually complex like jQuery or Angular first. Get to React as soon as you’re ready.”

Essentially, I think the reason why I spent so much time on this project and the reason I found learning and more importantly, implementing this project very time consuming was because it required a host of other knowledge that, as someone who has only been programming for 3 months, I had no clue about. Also, React is pretty different from much of what we had covered in CS50.
To be fair though, I did specifically choose this project because of my desire to learn React and I did accomplish that goal.

However, React is very beginner-unfriendly to an extent that I did not fully realize before stating this project. Many of the websites that I began learning react on recommended that I actually be pretty well-versed (like 6 months of experience minimum) in JS, but, again, I had really wanted to learn React.

Also, React is fairly new, and while many people like it, it does not have the same type of support as jquery/python/the other alternatives. Also, because I started a web-app from scratch rather than basing it off something that was pre-existing, working, and a project I had experience with, making my app actually work also took a significant amount of setup time. I had to make much of the functionality, like the login/register and the multi-page ability myself in a language I was not entirely familiar with which also took time and research.

There were many, many things that I needed to learn/understand fairly well to use react with the right build configuration like babel/some JS compilation like webpack (though I ended up using facebook-incubator so I didn’t end up using some of these). Also, the React docs (and the React-router docs— many people, including myself, seem to actually be using different commands than what the docs themselves state) are not particularity beginner-friendly, and, on Stack Overflow, there is a giant jumble of people using different styling-- ES5,6 & 7--that is also very confusing for a beginner.

I struggled a bit with understanding props vs state and when to use which, and figuring out how to deal with the state as I navigate between pages (for login) also took a lot time to figure out; the last point was especially important for the authentication and private routes. I was exposed to entirely new concepts and ideas like lifecycle methods and binding. Learning about component lifecycle methods was honestly very challenging and integrated lots of other new challenges like async.

Another reason why I needed to spend so long on this is, I think, React really isn't used independently: you start learning it, and then you realize you need to research into fie other areas-- configuration, like I mentioned previously, flux architecture, etc.

I also had to go over the virtual DOM and DOM in general, because we didn’t really cover that to the greatest extent in class.
But though I tried to initially jump right in, I realized that I needed to do some actual online coursework to better understand what react was: over thanksgiving break, in addition to my general research on react/react-router/flux/general build config,  I did codeacadamy’s Learn React.js Part I (https://www.codecademy.com/learn/react-101), Part II  (https://www.codecademy.com/learn/react-102) and the tutorial (https://reactjs.org/tutorial/tutorial.html). I did have a basic understanding of what react was, but the information on mounting and the lifestyle methods, in particular, was quite sparse.

Essentially, one of the most important design decisions I made was choosing to learn more about and implement Node, React, and Firebase, none of which I had any experience with. Again, I made the decision to try these out, rather than to stay with what I was more familiar with (Flask, SQL, Python, Cloud9), for two reasons: I both wanted to acquire new skillsets to supplement those that I had already developed throughout the course of CS50 and to use languages and software that I felt would be useful
and relevant to any bigger future projects I might pursue. I also chose Firebase over SQL because it contains many other capabilities such as hosting and analytics.

---------------------------

In src/configure, fire.js initializes Firebase and configures the Firebase JavaScript SDK; essentially, the information that you put in connects to web app to your Firebase project online. Putting it in one place makes it easy to export to other files. Also, I chose to only integrate the relevant capabilities (auth, database, hosting) rather than to include all the capabilities (firestore, storage, messaging) so as reduce the amount of code in my app.

In src/functions, helpers.js includes most of the firebase-specific functionality related with authentication-- registering, logging in, and logging out. Another design decision I made was the was registering was implemented: I could have also attempted to to integrate phone, Google, Facebook, Twitter, and Github login, but I chose to use email/password because it would be signifigantly more convinient for testing purposes.

src/parts consists of all the main components of the app. One of the major decisions I made was to use react-router rather than attempting to use booleans or other checks in terms of my Shown and Hidden (private/public routes). I chose this way because I felt it was more clean and concise; more importantly, with much help from the internet, I managed to actually get the routes to work with react-router.

src/parts/hidden/reminderComponent includes another design decision: essentially, I chose to implement my search function using an editable box rather than redirecting to a different page (the credit for this idea goes to my TA Ethan).
Also, the fact that the database is updated immediately after the user updates it was another design decision I made because I really liked the idea of real-time updating and how it adds to general user experience; I weighed this against the
(very true) assumption that the website would never be processing a giant influx of data.

A quick note to dispel any confusion: the word "note" and "reminder" are used interchangeably within the code.

Also, a decent amount of the more important resources I used are commented within the code because I often referred back to them.
