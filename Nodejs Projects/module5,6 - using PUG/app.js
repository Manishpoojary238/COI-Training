//========same as app-basic.js but this file is without old comment and Handling different routes=====//
const path = require('path');

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();  

app.set('view engine', 'pug');  //setting pug
app.set('views', 'views');      // in views folder we are using pug

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));   // request body parsing middleware
app.use(express.static(path.join(__dirname, 'public')));  //so that public folder contents can be accessible in root directory of this project

app.use('/admin-page',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'}); 
});

app.listen(3000); 