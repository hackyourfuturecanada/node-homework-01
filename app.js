const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");

const http = require("http");

const url = '/?num1=10&num2=5'
const hostname = "127.0.0.1";
const port = 4000;


const server = http.createServer((req, res) => {
 console.log(req.url);
 if (req.url === "/") {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/plain");
   res.end("This is main page\n");

 } else if (req.url.startsWith('/add')) {
  add.addHandler(req,res);

 
} else if (req.url.startsWith('/subtract')) {
  subtract.subtractHandler(req,res);

 }else if (req.url.startsWith('/multiply')) {
  multiply.multiplyHandler(req,res);
 }


});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });