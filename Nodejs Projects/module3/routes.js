//=====================================Request&Response================================================

const fs=require('fs');   //to deal with files

const requestHandler = (req, res) => {
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');   //writing data to response
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();  //if we do not return 'res.end()' instead simply write res.end then 'res.write' outside this function will not be executed.
    
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {     
        console.log(chunk);
        body.push(chunk);       // adding all the chunks of request data to body[]
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();  //converting body to buffer
            const message = parsedBody.split('=')[1];   //now praseBody will be in the key value pair. we want only value. after splitting index [0]->key and index[1]->value.
            fs.writeFile('message.txt', message, err => { //writeFile is better than writeFileSync. bcz writeFileSync will not allow further code to execute until writing file is completed
                res.statusCode= 302;            // if no error then only this block will be executed. or else err will throw error message.
                res.setHeader('Location','/');
                return res.end();
            });   
    
            
        });
       
    }
    res.setHeader('Content-Type','text/html'); //setting response header
    res.write('<html>');   //writing data to response
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
}

//module.exports = requestHandler;  //exporting request handler(single thing) to connect routes.js and app.js 

                         //===OR====//

/*module.exports = {                  //exporting multiple things
    handler : requestHandler,
    someText : 'example of exporting multiple things'
};*/


                       //===OR=====//
/*module.exports.handler=requestHandler;
module.exports.someText= 'Another example of exporting multiple things'*/

                       //===OR=====//
exports.handler=requestHandler;
exports.someText= 'Another example of exporting multiple things'