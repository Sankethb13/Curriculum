## Express:
    - Writing server side logic is very complex. 
    - Using plain Node.js, even a simple server looks messy
    - Manually handle URLs
    - Parse request bodies
    - Send responses
    - Handle errors
    - Route requests (/login, /users, etc.)
    - Express helps you build backend servers and APIs faster and cleaner using JavaScript.
    - Without Express → you write a LOT of low-level code
        With Express → you focus on business logic
    - What is a framework - It is like a helper function, which shares tools and rules to help us to build our application
    - What is express.js
        Express.js is a lightweight Node.js framework that simplifies backend development by providing routing, middleware support, and utilities to handle HTTP requests and responses. It is commonly used to build RESTful APIs and server-side applications.
    - why Express?”
        Express abstracts low-level Node.js HTTP handling and allows developers to focus on business logic instead of boilerplate code.
### How to install Express:
    - use command npm install --save express
    - We can import express framework like core features like http.
    - We can create a basic server by calling express instance and passing a arg for createServer function
### MiddleWare:
    - Express.js is all about middleware.
    - Incomming request is funneled by bunch of middleware functions
    - Middleware functions have access to the request, response, and next function. They are used for tasks like authentication, logging, validation, and error handling before sending a response.
    - middleware = functions that run between request and response
    - example: app.use((req, res, next) => {
                console.log(req.method);
                next();
                });
    - next() argument/function lets the request to pass to the other middleware below.
### Parsing Incomming request :
    - body-parser - npm install --save - body-parser
    - It register a middleware function 
    - It will do req body parsing, it will parse bodies send through the form in project-express
    - It cant parse a file or json's
    - No need to use splice and add code to parse the body of the input.
    - body-parser reads the incoming HTTP request body and makes it available on req.body in Express.
    - we need to create a middleware for using this body parser
        app.use(express.urlencoded({ extended: true }));
        extended: true → can parse nested objects
        extended: false → can parse only simple key-value pairs
    - we can use app.post, app.get for get and post requests.Then middleware will filter these kind of req
    //Task :
    // Task
        app.use('/users',(req,res,next) => {
            console.log('To Chikkadpally');
            return res.send('<h1>welcome to new home</h1>');
            
        });

        app.use('/',(req,res,next) => {
            console.log('To ASBL');
            return res.send('<h1>Hello, see your new home</h1><form action="/users" method="GET"><button type="submit">OK</button></form>')
        })