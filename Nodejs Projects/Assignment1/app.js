const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><h1>Good Morning</h1><br>');
    res.write('<ul><li>Manish</li>');
    res.write('<li>Rohan</li></ul><br/>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split('=')[1];
      console.log(name);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
    
  }
  
});

server.listen(3000);
