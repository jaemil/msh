var mysql = require("mysql");

module.exports = con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "msh",
  multipleStatements: true,
});

module.exports = function sqlCon() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected");
  });
};
