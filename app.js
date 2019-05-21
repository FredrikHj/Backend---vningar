const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
        
    fs.readFile('./hello.txt', (err, data) => {
        res.write(data);
        res.end()
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});