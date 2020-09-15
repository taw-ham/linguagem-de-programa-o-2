const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,resp) =>{
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end('Hello world');
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})