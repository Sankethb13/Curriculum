const path = require('path');
const express = require('express');
const route = express.Router();

route.get('/admin/add-product', (req, res, next) => {
    // res.send('<form action = "/admin/product" method = "POST"><input type = "text" name = "product"><button type = "submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});
route.post('/admin/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); // redirecting the user back to the root URL
});

module.exports = route; // this can exported to other files