//===================================CREATING NODE SERVER using express.js===================================//
//const http = require('http');
//const routes = require('./routes');  //importing from routes. js to connect routes.js and app.js
//const fs=require('fs');   //to deal with files

const express = require('express'); //importing express.js

const app = express();   // running express

app.use((req , res , next) => {     //use is used to add middleware function. this function will be executed for every incomming request
    console.log('Inside the middleware');
    next();  //allows the request to go to the next middleware
});  

app.use((req , res , next) => {     //use is used to add middleware function. this function will be executed for every incomming request
    console.log('Inside another middleware.......');
    res.send('<h1>hello from express<h1>')
    
});  

app.listen(3000);      //if we are useing this then we dont need to import http
         //========OR========//
/*const server= http.createServer(app);  //creating server using express
server.listen(3000);*/