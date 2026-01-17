// console.log("Hello, World! This is my first Node.js application.");

const fs = require('fs'); // Import the File System module

fs.writeFile('hello.txt', 'Hello, World! This is my first Node.js application.', (err) => {
    if (err) throw err;
    console.log('File has been created successfully.');
});