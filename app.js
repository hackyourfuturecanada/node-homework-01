const http = require("http");
const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");

const hostname = "localhost";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith("/add")) {
    add.handleAdd(req, res);
    res.writeHeader(200, { "Content-Type": "text/html" });
  } else if (req.url.startsWith("/subtract")) {
    subtract.handleSubtract(req, res);
    res.writeHeader(200, { "Content-Type": "text/html" });
  } else if (req.url.startsWith("/multiply")) {
    multiply.handleMultiply(req, res);
    res.writeHeader(200, { "Content-Type": "text/html" });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Operation is not recognized\n");
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
