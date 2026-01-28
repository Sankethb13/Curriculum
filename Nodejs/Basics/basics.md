## How the web works: 
    - user/client -> enters a page http//sanketh.com (it is not address it is an encoded address for human understanding) -> the browser sends a request to the respective server -> our code will hit the server to process -> here we are using NODE.js -> server responds to client with some response (it is mostly html or some message)
    - This req and response are transmitted through a protocol. We have to follow some to send req and res.
    - These are followed according to protocol they are http and https. 
    HTTP - hyper text transfer protocol - A protocol or trasferring data which is understood by browser and server 
    HTTPs - hyper text transfer protocol secure - Http and secure protocol - it is SSL encryption turned on - they are encrypted.

- Step 1: Browser (Client) ⇄ Internet ⇄ Server (Node.js)
    Example: we type https://www.google.com in your browser
- Step 2: Browser ask DNS what is the IPaddress of the website
    Example: example.com → 93.184.216.34 (Think of DNS as contact list for the internet)
- Step 3: Browser creates a TCP connection to the IP server
    user port 80 -> http
             443 -> https
- Step 4: Browser sends an HTTP request
- Step 5: Server (Node.js) Handles Request
    Your Node.js server:
        Receives the request
        Runs JavaScript logic
        Talks to DB / API
        Sends response back
- Step 6: Server responds with Response has:
    Status code → 200, 404, 500
    Headers
    Body
- Step 7: Browser Renders

### Creating Node Server:
    - There are few core Modules node js uses:
        http -> launch a server - send req
        https -> would be helpful to launch SSL server req
        fs -> to access file system
        path
        os
    - Refer project folder and app.js
    - Lifecyle of Node.js program:
    Step 1: node app.js
    Step 2: start script
    Step 3: parse code, registers variables and functions.
    Step 4: Important process in node.js is Event loop 
    - It keeps on running as long as event listener is registered.
    - All the code is managed by event loop
    - Node js uses event driven approach for all kinds of activities. 
    - It uses this pattern it actually executes single threaded JS. 
    - There are multiple actions performed to execute the code. Hence Node uses event loop to perform and execute the code. It does some multithreaded operations.
    - To unregister an event we need to do process.exit(), after receving an request.
### Parsing the request:
    - Streams and buffers: 
    Stream is on going process -> Req is read by node in multiple parts of chunks.
### Event Loop:
    Order of executing the code is not same as order of writing code.
    Need to check again for event loop
### Blocking and non Blocking code:
    - fs.writeFileSync: sync means synchronous, it is a spcl method where it will block the execution until file is created. Even new incoming req will not be handled until the file is created.
    - working with files can be done in two modes above is synchronous
    - For a huge file we use other mode, asynchrounous mode.
    - we use fs.writefile(path, data, (err) => {
        // has a call back function 
        // which returns a err response 
        // error can be utilized if there is an error
        // 
    })
    - Nodejs uses one single Javascript thread - means one process in os
    - Event loop automatically started by node when the program starts
    - Event loop is responsible for event call backs and handle them
    - fs operations are not done by event loop, they are taken care by worker pool - it has different threads and does heavy lifting
    - Event loop only handles the fast executing code in the call backs
    - Only connection for the worker pool to the event loop is it triggers the call back once the operation is done like writing/reading the file - Then nodejs runs the call back from event loop
### Event loop life cycle:
    - It has an order to execute the call backs - At the begining of each iteration eventloop checks for a setTimeOut or setInterval call backs to execute.
    - Then it checks for the event callbacks
    - Nodejs polls for new I/O events - to execute there call backs.
    - Then check for setImmediate call backs which are similar to setTimeout. But after call backs.
    - Then executes all the close event call backs 
    - Then we exit node js event loop when there are no open listeners
    - Internally nodejs has a counter refs, it is incremented after every event register or every call back.
    - Event loops untill the refs is 0
### Understanding NPM scripts:
    - Npm - node package manager- to initialize node project and some extra features to it. 
    - npm init - will create a configuration file and we can add details - package.json file is created.
### Installing 3rd party packages:
    - To parse or to add utlities we install third party packages.
    - Using npm we can install them
    - nodemon is a developement package - used for autorestarts - it is utility tool - it restarts the server when there are any changes
    - to install a package for dev env we use --save-dev then it will download from npm repo.
    - npm install nodemon - g will install globally.
    - package-lock.json - stores the version we installed of all the packages
### Global features vs core features vs thirdParty features:
    - Global Features vs Core Modules vs Third-Party Modules
    - The last lectures contained important concepts about available Node.js features and how to unlock them.
    - You can basically differentiate between:
        Global features: Keywords like const or function but also some global objects like process
        Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")
        Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way
    - Global features are always available, you don't need to import them into the files where you want to use them.
    - Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.
    Example:
    const fs = require('fs');
    - You can now use the fs object exported by the "fs" module.
    - Third-party Modules need to be installed (via npm install in the project folder) AND imported.
