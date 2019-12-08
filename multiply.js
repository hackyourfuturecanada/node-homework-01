const url = require("url");

function handleMultiply(req, res) {
  const query = url.parse(req.url, true).query;

  console.log(query);

  res.end(
    `${query.num1} x ${query.num2} = ${parseInt(query.num1) *
      parseInt(query.num2)}`
  );
}

module.exports = {
  handleMultiply: handleMultiply
};
