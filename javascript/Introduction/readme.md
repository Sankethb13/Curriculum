## Introduction to Javascript:
- When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

- Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

- Google debuted its Chrome browser in 2008, introducing the V8 JavaScript engine that was at the time much faster than its competition.

- The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

- Different engines have different “codenames”. For example:
   V8 in Chrome, Opera and Edge.
   SpiderMonkey in Firefox.
   SquirrelFish for Safari, etc.  

### How do engines work?
 Engines are complicated, just focus on basics
 - Engines which run in the browser parses the script(JS code)
 - Then it compiles into machine level language
 - Then the machine code runs fast
The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.


### What can in-browser JavaScript do?
 - Modern JS are safe, they do not provide low level access to the computer memory. They just manipulate the userActions on the browser.
 - JS capabilities depend on the env it is running, If it is running on a node. It supports functions that allow JS to read/write arbitrary files, perform network requests, etc.
 - In-browser JavaScript is able to:
    Add new HTML to the page, change the existing content, modify styles.
    React to user actions, run on mouse clicks, pointer movements, key presses.
    Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
    Get and set cookies, ask questions to the visitor, show messages.
    Remember the data on the client-side (“local storage”).

### What CAN’T in-browser JavaScript do?
 - JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.
 - Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).
 - This limitation is, again, for the user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com, for example, and steal information from there.
 

 When JS runs on the server we do not have such limitations

 ### What makes JavaScript unique?
 Supported by all major browsers
 Full integration with CSS and HTML
 It is widespread tool for creating browser interfaces.
 Js can be used to create serves, Mobile application

