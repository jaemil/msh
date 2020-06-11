const express = require("express");
const Auth = require("../middleware/auth");
var sqlCon = require("../script/sql");
var bodyParser = require("body-parser");
var cors = require("cors");
const pdf = require("html-pdf");
const pdfTemplate = require("../documents/");

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(Auth);

router.post("/schueler", function (req, res) {
  let sql = "SELECT * FROM schueler";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/schuelerByID", function (req, res) {
  console.log(req.body);
  let sql = `SELECT * FROM schueler WHERE ID = ${req.body.ID}`;

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/deleteStudent", (req, res) => {
  con.query(`DELETE FROM schueler WHERE ID = ${req.body.ID}`);

  let updateRow = `SET @position:=0; update schueler set ID=@position:=@position+1`;
  con.query(updateRow);

  res.send(`${req.body.ID}: Deleted`);
});

router.post("/setSigned", (req, res) => {
  console.log(req.body);
  //res.send(`${req.body.ID}: Deleted`);

  let updateSign = `Update schueler set signed = ${req.body.signed} WHERE ID = ${req.body.ID}`;
  con.query(updateSign);
  res.send(`${req.body.ID}`);
});

router.post("/showMore", (req, res) => {
  let updateMore = `Update schueler set showMore = ${req.body.showMore} WHERE ID = ${req.body.ID}`;
  con.query(updateMore);
  res.send(`${req.body.ID}`);
});

router.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

module.exports = router;
