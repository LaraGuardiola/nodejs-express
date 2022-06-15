import { IncomingMessage, ServerResponse } from 'http';

const http = require('http');
 
const port = 5000;
 
const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end('Hello world!');
});

server.on('error',(e: Error)=>{
    console.log(e)
})
 
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});