const http = require('http');
// require is like a import, it loads the built-in http module or third-party modules from NPM
const routes = require('./routes');
// importing the routes module which contains the requestHandler function
// fs module is used to interact with the file system, like reading and writing files
const server = http.createServer(routes);
// createServer method creates an HTTP server that listens for requests and sends responses
server.listen(3000);
// listen method makes the server listen on port 3000 for incoming requests