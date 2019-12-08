const http = require('http');
const handlers = require('./handlers');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)

  if (req.url.startsWith("/add")) {
    handlers.add(req, res);
  } else if (req.url.startsWith("/multiply")) {
    handlers.multiply(req, res);
  } else if (req.url.startsWith("/subtract")) {
    handlers.subtract(req, res);
  } else if (req.url = ("/")) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home \n');

  }



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});