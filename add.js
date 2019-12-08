const url = require("url");

function handleAdd(req, res) {
  const query = url.parse(req.url, true).query;

  console.log(query);

  res.end(
    `${query.num1} + ${query.num2} = ${parseInt(query.num1) +
      parseInt(query.num2)}`
  );
}

module.exports = {
  handleAdd: handleAdd
};
