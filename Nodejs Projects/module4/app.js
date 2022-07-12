//===================================CREATING NODE SERVER,===================================//
const http = require('http');
const routes = require('./routes');  //importing from routes. js to connect routes.js and app.js
const fs=require('fs');   //to deal with files
console.log(routes.someText);

const server= http.createServer(routes.handler);

server.listen(3000);