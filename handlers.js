
let addHandler = function (req, res) {
    var url = require('url');
    var query = url.parse(req.url,true).query;
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(` ${query.num1} + ${query.num2} = ${parseInt(query.num1)+parseInt(query.num2)}`)
  res.end();
};

let mulHandler = function (req, res) {
    var url = require('url');
    var query = url.parse(req.url,true).query;
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(` ${query.num1} * ${query.num2} = ${parseInt(query.num1)*parseInt(query.num2)}`)
  res.end();
};

let subHandler = function (req, res) {
    var url = require('url');
    var query = url.parse(req.url,true).query;
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(` ${query.num1} - ${query.num2} = ${parseInt(query.num1)-parseInt(query.num2)}`)
  res.end();
};

module.exports = {'add': addHandler, 'multiply':mulHandler, 'subtract':subHandler};