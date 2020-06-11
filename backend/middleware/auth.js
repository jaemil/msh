var sqlCon = require("../script/sql");

module.exports = (req, res, next) => {
  const _username = req.body.username;
  const _password = req.body.password;
  console.log(req.body);
  let username, password;

  let sql = "SELECT * FROM login";
  con.query(sql, (err, result) => {
    if (err) throw err;
    username = result[0].username;
    password = result[0].password;

    if (username === _username && password === _password) {
      next();
    } else {
      return res.status(401).send({ error: "You must be logged in." });
    }

    console.log(username, password);
  });
};
