const express = require("express");
const Auth = require("../middleware/auth");
var sqlCon = require("../script/sql");
var bodyParser = require("body-parser");
var cors = require("cors");

require("dotenv").config();

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

var nightwatch = require("nightwatch");

router.post("/nightwatch", (req, res) => {
  nightwatch.cli(function (argv) {
    argv.config = "nightwatch.conf.js";
    argv.verbose = true;
    console.log("---------------------" + argv.config);
    let sql = `SELECT * FROM schueler WHERE ID = ${req.body.ID}`;

    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result[0].schuelerVorname);

      process.env.schuelerVorname = result[0].schuelerVorname;
      process.env.schuelerNachname = result[0].schuelerNachname;
      process.env.schuelerGeburtstagTag = result[0].schuelerGeburtstagTag;
      process.env.schuelerGeburtstagMonat = result[0].schuelerGeburtstagMonat;
      process.env.schuelerGeburtstagJahr = result[0].schuelerGeburtstagJahr;
      process.env.schuelerNichtVollmuendig = result[0].schuelerNichtVollmuendig;
      process.env.erziehungsberechtigterVorname =
        result[0].erziehungsberechtigterVorname;
      process.env.erziehungsberechtigterNachname =
        result[0].erziehungsberechtigterNachname;
      process.env.schuelerStrasse = result[0].schuelerStrasse;
      process.env.schuelerHausnummer = result[0].schuelerHausnummer;
      process.env.schuelerPostleitzahl = result[0].schuelerPostleitzahl;
      process.env.schuelerOrt = result[0].schuelerOrt;
      process.env.vollmuendigTelefon = result[0].vollmuendigTelefon;
      process.env.vollmuendigMobil = result[0].vollmuendigMobil;
      process.env.vollmuendigEmail = result[0].vollmuendigEmail;
      process.env.schueler1 = result[0].schueler1;
      process.env.schueler2 = result[0].schueler2;
      process.env.schueler3 = result[0].schueler3;
      process.env.unterrichtsFach = result[0].unterrichtsFach;
      process.env.unterrichtsDauer = result[0].unterrichtsDauer;
      process.env.unterrichtsTurnus = result[0].unterrichtsTurnus;
      process.env.unterrichtsEinheit = result[0].unterrichtsEinheit;

      process.env.montagVon = result[0].montagVon;
      process.env.montagBis = result[0].montagBis;
      process.env.dienstagVon = result[0].dienstagVon;
      process.env.dienstagBis = result[0].dienstagBis;
      process.env.mittwochVon = result[0].mittwochVon;
      process.env.mittwochBis = result[0].mittwochBis;
      process.env.donnerstagVon = result[0].donnerstagVon;
      process.env.donnerstagBis = result[0].donnerstagBis;
      process.env.freitagVon = result[0].freitagVon;
      process.env.freitagBis = result[0].freitagBis;

      process.env.benoetigtInstrument = result[0].benoetigtInstrument;
      process.env.leihInstrument = result[0].leihInstrument;
      process.env.sonstigeAnmerkung = result[0].sonstigeAnmerkung;
      process.env.anmerkung = result[0].anmerkung;
      process.env.radio = result[0].radio;
      process.env.radioAnrede = result[0].radioAnrede;

      process.env.sepaVorname = result[0].sepaVorname;
      process.env.sepaNachname = result[0].sepaNachname;
      process.env.sepaStraße = result[0].sepaStraße;
      process.env.sepaHausnummer = result[0].sepaHausnummer;
      process.env.sepaPostleitzahl = result[0].sepaPostleitzahl;
      process.env.sepaOrt = result[0].sepaOrt;
      process.env.sepaTelefon = result[0].sepaTelefon;
      process.env.sepaEmail = result[0].sepaEmail;
      process.env.sepaKreditinstitut = result[0].sepaKreditinstitut;
      process.env.sepaIBAN = result[0].sepaIBAN;
      process.env.sepaBIC = result[0].sepaBIC;

      const runner = nightwatch.CliRunner(argv);
      runner
        .setup()
        .startWebDriver()
        .catch((err) => {
          console.error(err);
          throw err;
        })
        .then(() => {
          return runner.runTests();
        })
        .catch((err) => {
          console.error(err);
          runner.processListener.setExitCode(10);
        })
        .then(() => {
          return runner.stopWebDriver();
        })
        .then(() => {
          res.send(true);
          //process.exit(0);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  });
});

module.exports = router;
