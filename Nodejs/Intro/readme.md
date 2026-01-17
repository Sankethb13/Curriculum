Introduction to Node Js:
-  What is Nodejs? It is a Javascript run time - Basically Node helps to run javascript in the browser or any machine - It allows JS to run on a server.
* Node helps JS to run outside of the browser. 

   -> Node js uses V8 engine to run JS on the browser.
   -> V8 is C++ code maintained by google.
   -> V8 takes JS code and compiles it to machine code.
   -> Node takes V8 C++ code to run Javascript and provides features like using the file system(opening file, deleting file). Nodejs adds this features.
   -> Disadvantage: JS when running on browser can interact to DOM(Document object model) to interact with HTML elements. But by using Nodejs to run JS we cannot utilize these features.

Official site for Node js:
https://nodejs.org/en/

To get version:
node -v 

require will import the node functionalities to JS code.
Ex: require('fs'); // Import the File System module

- Nodejs in web development:
  Run server, create server and listen to incoming requests.
  Connect to dataBase, validate inputs and handle requests
  Return responses.

