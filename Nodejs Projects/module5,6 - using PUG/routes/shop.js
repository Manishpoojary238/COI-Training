//===================shop routing middleware==================//
const path = require('path');

const express = require('express');
const adminData = require('./admin'); //one level up means go out of shop.js

const router = express.Router();

router.get('/', (req , res , next) => {     
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'}); //using pug, adding products array and shop string to shop view page.
});  

module.exports = router;
