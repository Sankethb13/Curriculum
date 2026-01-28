const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Please enter message</title></head>');
        res.write('<body><form action ="/message" method ="post"><input type="text" name="message"><button type="submit">Submit</button></form</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // this event is fired multiple times as data chunks are received
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            // this event is fired after parsing the incoming request data
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302; // 302 status code indicates a redirection
                res.setHeader('Location', '/'); // redirecting the user back to the root URL
                return res.end();
            });
        });
        return;
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
// exporting the requestHandler function to be used in other files