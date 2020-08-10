var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

var sendMail = require("./script/mail");
var sqlCon = require("./script/sql");

const pdf = require("html-pdf");
const pdfTemplate = require("./documents/");

const adminRoute = require("./route/adminRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
sqlCon();

app.post("/neu", function (req, res) {
  console.log(req.body.state.schuelerVorname);
  res.send("Hello World");
  let countRow;
  verifyID = Math.floor(Math.random() * 100000000);
  con.query(`SELECT COUNT(*) FROM schueler`, function (err, result, fields) {
    if (err) throw err;
    countRow = result[0]["COUNT(*)"];

    //Add new Student
    // let sql = `INSERT INTO schueler(ID, showMore, verifyID, verify, signed, schuelerVorname, schuelerNachname, schuelerGeburtstagTag, schuelerGeburtstagMonat, schuelerGeburtstagJahr, schuelerNichtVollmuendig, erziehungsberechtigterVorname, erziehungsberechtigterNachname, schuelerStrasse, schuelerHausnummer, schuelerPostleitzahl, schuelerOrt, vollmuendigTelefon, vollmuendigMobil, vollmuendigEmail, aktiveFamilieneMitglieder, schueler1, schueler2, schueler3, unterrichtsFach, unterrichtsDauer, unterrichtsTurnus, unterrichtsEinheit, moeglicheUnterrichtszeiten, montagVon, montagBis, dienstagVon, dienstagBis, mittwochVon, mittwochBis, donnerstagVon, donnerstagBis, freitagVon, freitagBis, benoetigtInstrument, leihInstrument, sonstigeAnmerkung, anmerkung, radioAnrede, sepaVorname, sepaNachname, sepaStraße, sepaHausnummer, sepaPostleitzahl, sepaOrt, sepaTelefon, sepaEmail, sepaKreditinstitut, sepaIBAN, sepaBIC)
    // VALUES('${countRow}', '0', '${verifyID}', '0', '0', '${req.body.state.schuelerVorname}', '${req.body.state.schuelerNachname}', '${req.body.state.schuelerGeburtstagTag}', '${req.body.state.schuelerGeburtstagMonat}', '${req.body.state.schuelerGeburtstagJahr}', '${req.body.state.schuelerNichtVollmuendig}', '${req.body.state.erziehungsberechtigterVorname}', '${req.body.state.erziehungsberechtigterNachname}', '${req.body.state.schuelerStrasse}', '${req.body.state.schuelerHausnummer}', '${req.body.state.schuelerPostleitzahl}', '${req.body.state.schuelerOrt}', '${req.body.state.vollmuendigTelefon}', '${req.body.state.vollmuendigMobil}', '${req.body.state.vollmuendigEmail}', '${req.body.state.aktiveFamilieneMitglieder}', '${req.body.state.schueler1}', '${req.body.state.schueler2}', '${req.body.state.schueler3}', '${req.body.state.unterrichtsFach}', '${req.body.state.unterrichtsDauer}', '${req.body.state.unterrichtsTurnus}', '${req.body.state.unterrichtsEinheit}', '${req.body.state.moeglicheUnterrichtszeiten}', '${req.body.state.montagVon}', '${req.body.state.montagBis}', '${req.body.state.dienstagVon}', '${req.body.state.dienstagBis}', '${req.body.state.mittwochVon}', '${req.body.state.mittwochBis}', '${req.body.state.donnerstagVon}', '${req.body.state.donnerstagBis}', '${req.body.state.freitagVon}', '${req.body.state.freitagBis}', '${req.body.state.benoetigtInstrument}', '${req.body.state.leihInstrument}', '${req.body.state.sonstigeAnmerkung}', '${req.body.state.schuelerNachname}', '${req.body.state.anmerkung}', '${req.body.state.radioAnrede}', '${req.body.state.sepaVorname}', '${req.body.state.sepaNachname}', '${req.body.state.sepaStraße}', '${req.body.state.sepaHausnummer}', '${req.body.state.sepaPostleitzahl}', '${req.body.state.sepaOrt}', '${req.body.state.sepaTelefon}', '${req.body.state.sepaEmail}', '${req.body.state.sepaKreditinstitut}', '${req.body.state.sepaIBAN}', '${req.body.state.sepaBIC}')`;
    let sql = `INSERT INTO schueler VALUES('${countRow}', '0', '${verifyID}', '0', '0', '${req.body.state.schuelerVorname}', '${req.body.state.schuelerNachname}', '${req.body.state.schuelerGeburtstagTag}', '${req.body.state.schuelerGeburtstagMonat}', '${req.body.state.schuelerGeburtstagJahr}', '${req.body.state.schuelerNichtVollmuendig}', '${req.body.state.erziehungsberechtigterVorname}', '${req.body.state.erziehungsberechtigterNachname}', '${req.body.state.schuelerStrasse}', '${req.body.state.schuelerHausnummer}', '${req.body.state.schuelerPostleitzahl}', '${req.body.state.schuelerOrt}', '${req.body.state.vollmuendigTelefon}', '${req.body.state.vollmuendigMobil}', '${req.body.state.vollmuendigEmail}', '${req.body.state.aktiveFamilieneMitglieder}', '${req.body.state.schueler1}', '${req.body.state.schueler2}', '${req.body.state.schueler3}', '${req.body.state.unterrichtsFach}', '${req.body.state.unterrichtsDauer}', '${req.body.state.unterrichtsTurnus}', '${req.body.state.unterrichtsEinheit}', '${req.body.state.moeglicheUnterrichtszeiten}', '${req.body.state.montagVon}', '${req.body.state.montagBis}', '${req.body.state.dienstagVon}', '${req.body.state.dienstagBis}', '${req.body.state.mittwochVon}', '${req.body.state.mittwochBis}', '${req.body.state.donnerstagVon}', '${req.body.state.donnerstagBis}', '${req.body.state.freitagVon}', '${req.body.state.freitagBis}', '${req.body.state.benoetigtInstrument}', '${req.body.state.leihInstrument}', '${req.body.state.sonstigeAnmerkung}', '${req.body.state.anmerkung}', '${req.body.state.radioAnrede}', '${req.body.state.sepaVorname}', '${req.body.state.sepaNachname}', '${req.body.state.sepaStraße}', '${req.body.state.sepaHausnummer}', '${req.body.state.sepaPostleitzahl}', '${req.body.state.sepaOrt}', '${req.body.state.sepaTelefon}', '${req.body.state.sepaEmail}', '${req.body.state.sepaKreditinstitut}', '${req.body.state.sepaIBAN}', '${req.body.state.sepaBIC}')`;
    con.query(sql);

    //Update ID Count
    let updateRow = `SET @position:=0; update schueler set ID=@position:=@position+1`;
    con.query(updateRow);

    sendMail(
      req.body.state.sepaEmail,
      req.body.state.schuelerVorname + " " + req.body.state.schuelerNachname,
      verifyID
    );
  });
});

app.post("/verify", function (req, res) {
  con.query(`SELECT verifyID FROM schueler`, function (err, result, fields) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      if (result[i].verifyID == req.query.ID) {
        //DB für schueler i verify setzen
        console.log(result[i].verifyID, i);
        let updateVerify = `Update schueler set verify=1 WHERE ID = ${i + 1}`;
        con.query(updateVerify);
        break;
      }
    }
  });
  con.query(
    `SELECT * FROM schueler WHERE verifyID = ${req.query.ID}`,
    function (err, result, fields) {
      if (err) throw err;
      res.send(result[i]);
    }
  );
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.use(adminRoute);

app.listen(4000, function () {
  console.log("Localhost/4000");
});
