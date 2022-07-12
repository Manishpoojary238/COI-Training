//==============admin routing middleware=============//
const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

// admin-page/add-product  ==>GET
router.get('/add-product', (req , res , next) => {     //routes to add-product
    //console.log('Inside another middleware.......');
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin-page/add-product' }); 
});   

// admin-page/add-product  ==>POST
router.post('/add-product', (req , res , next) => {     //this middleware will execute only for post request (if we dont use post key word then this will always execute)
    products.push({ title: req.body.title });
    res.redirect('/');
});  

exports.routes = router;
exports.products = products;
