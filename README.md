# Timer


### Our Mission

We'll be using `setTimeout` (note the spelling and case!)--a built-in function in most JavaScript environments--to make a timer application in the terminal. We'll use callbacks to pass functions and times to `setTimeout`, saying, essentially, "Call this function after this time has passed!"

When we're done, we'll have a timer application that can run in the background and ping us after our time's up. And it will handle multiple timers. Pretty cool for what will ultimately be a short bit of code!


### Setup

You've got one line of code in `main.js`. It's a `console.log`, but a special one: it should make your terminal beep! Pretty cool, huh? It provides a nice audible indication that a timer is going off, but it's up to you whether you want that!

If that's NOT pretty cool, either because you hate it or can't get it to work, you can comment the line out and never use it. If you do want to use it, copy and paste it to wherever you want to use a timer beep! 


### Steps

0. We have a commented-out line of code for Version 0. Uncomment it and run `node main.js`. You should get a little beep in your terminal. (If you don't, there's probably something in your terminal's settings.) It's not a bad idea for this beep to stay in, as feedback that the app is running, and as feedback when testing to make sure that your app is running. It could get annoying, for sure, but we recommend leaving it in for now!

  If you DO take it out, leave it commented out rather than deleting it. It's good to have audible feedback that your timer's working, so we'll re-use the line later.

1. Version 1 - A Hard-Coded Timer

  In our first version of this app, we'll use setTimeout to make that beep and a message occur after a certain time has passed.

  `setTimeout` takes in two arguments, a function and a time.
  
  * The function will be called by `setTimeout`. We can use a named function we declare above, or use an inline anonymous function (the much more common pattern). Don't forget that we don't call this function ourselves (that would pass in the _return value_ of our function), but simply pass in the value of the function itself (the function's code) and `setTimeout` will call it for us when the time is right.
  * The time is a number, and needs to be in milliseconds. What's a millisecond? It's 1/1000th of a second. So if you want your function to be called in 1 second, you can pass in 1000. You get used to that conversion pretty quickly in programming, as milliseconds is a common unit of measurement for computers.
  
  So what are we trying to do in this case? Let's run a simple timer that beeps after 3 seconds and **tells us that 3 seconds has passed**. Call `setTimeout` in the global code, pass in a function (anonymous or named) as the first argument, and 3000 as the second. (This can look pretty weird with an inline function at first, since after the function's end, you have a comma. But you'll get used to this syntax soon enough!) Inside the function, console.log two things: the `\u0007` that makes a beep happen, and a message that says that 3 seconds has passed.
  
  Now run `node main.js`. After 3 seconds, you should get a beep and a message!
  
  If that didn't work for you, your friendly neighborhood search engine no doubt has many examples of basic calls to `setTimeout`. Let's get the syntax down right; we'll be playing with it all day!
  
  **An important aside.**
  
  If you made a mistake and typed in `30000` and have a 30 second timer, do you have to wait 30 seconds before trying again? Heck no! Just hit Ctrl-C to exit out of almost any terminal program, including the ones you'll write today. Then fix your code and try again!
  
  We'll learn more tricks like this to make our code pause or run in the background in the next assignment!

2. Version 2 - User Input

  The time that we pass to `setTimeout` is a number, but it doesn't have to be a hard-coded one. Take in the user's input through `process.argv`, so that they can type in `node main.js 2` and get a beep 2 seconds later.
  
  In your function call, don't forget to make your message about how much time has passed *dynamic*. That is, if they said `node main.js 2`, you should now send them a message like, `2 seconds have passed!` or `Here is your 2-second timer!`. But if they type in `5` instead of `2`, that should be in the message. Don't forget, it's there in your `process.argv`. (Or somewhere else if you've saved it as a variable!)

  Don't forget that `process.argv` is an array, and we can look at the index after `node` and `main.js` to get the time they wrote in!
  
  **Even easier to forget**: their time will come in in seconds, but `setTimeout` is expecting _milliseconds_. You'll have to convert seconds to milliseconds. Hint: it's NOT division you want.
  
3. Version 3 - Multiple Timers

  What if we have multiple timers? What if the user wants a 5-second timer and a 10-second one? Well, if they typed in `node main.js 5 10`, it should be faaaaairly easy to give them both. Or many? IT'S LOOP TIME.
  
  Remember that `process.argv` is an array? (We JUST reminded you! Come on now...) We can `slice` that array to get every argument they wrote after `node main.js`, and then we'll have an array of times for our timers.
  
  Loop through that array and, for each time the user wanted, set a timeout to run our helper function. Because we'll want access to each time within our helper function (to tell the user which timer it was), an inline function is the easiest helper function format.  You'll do your standard thing in that helper function--beep if you want, but definitely tell them what timer just went off.
  
  If you did it right, you should be able to type in `node main.js 2 5 10` and get something like `Your 2-second timer just went off!` for each of those times.
  

### Stretch Goal Versions

Coming soon!
