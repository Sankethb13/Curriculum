const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
// importing the Express framework
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// creating a middleware to parse URL-encoded data

const app = express();
// creating an instance of an Express application
app.use(urlencodedParser);

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoute); // using the shop routes defined in routes/shop.js
app.use(adminRoute); // using the admin routes defined in routes/admin.js

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(3000);