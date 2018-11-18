
const http = require('http');

const hostName = 'localhost';

const port = 3000;

const server = http.createServer((req,res) =>{

    //write head

    res.writeHead(200,{
        "Content-Type" : "text/plain"
    });
    

    // res.statusCode = 200;

    // res.setHeader('Content-Type','text/plain');

    res.end('Hello world\n');

});


server.listen(port,hostName, () => {
    console.log(`server running at ${hostName} and ${port}`);
});
