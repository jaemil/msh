import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";

export default function VerifyAnmeldung() {
  const location = useLocation().search;

  const [state, setState] = useState();

  function emailVerify() {
    axios.post("http://localhost:4000/verify" + location).then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }

  useEffect(() => {
    emailVerify();
  }, []);

  function downloadPdf() {
    axios
      .post("http://localhost:4000/create-pdf", {
        schuelerVorname: state.schuelerVorname,
        schuelerNachname: state.schuelerNachname,
        schuelerGeburtstagTag: state.schuelerGeburtstagTag,
        schuelerGeburtstagMonat: state.schuelerGeburtstagMonat,
        schuelerGeburtstagJahr: state.schuelerGeburtstagJahr,
        schuelerStrasse: state.schuelerStrasse,
        schuelerHausnummer: state.schuelerHausnummer,
        schuelerPostleitzahl: state.schuelerPostleitzahl,
        schuelerOrt: state.schuelerOrt,
        vollmuendigTelefon: state.vollmuendigTelefon,
        vollmuendigMobil: state.vollmuendigMobil,
        vollmuendigEmail: state.vollmuendigEmail,
        schueler1: state.schueler1,
        schueler2: state.schueler2,
        schueler3: state.schueler3,
        unterrichtsFach: state.unterrichtsFach,
        unterrichtsDauer: state.unterrichtsDauer,
        unterrichtsTurnus: state.unterrichtsTurnus,
        unterrichtsEinheit: state.unterrichtsEinheit,
        sepaVorname: state.sepaVorname,
        sepaNachname: state.sepaNachname,
        sepaStraße: state.sepaStraße,
        sepaHausnummer: state.sepaHausnummer,
        sepaPostleitzahl: state.sepaPostleitzahl,
        sepaOrt: state.sepaOrt,
        sepaKreditinstitut: state.sepaKreditinstitut,
        sepaIBAN: state.sepaIBAN,
        sepaBIC: state.sepaBIC,
      })
      .then(() =>
        axios.get("http://localhost:4000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  }

  return (
    <div
      className="blackContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          backgroundColor: "rgb(50,50,50)",
          borderRadius: "20px",
          border: "none",
          padding: "10px",
          color: "white",
          marginBottom: "10px",
        }}
        onClick={() => {
          downloadPdf();
        }}
      >
        Email bestätigen und PDF herunterladen
      </button>

      <p className="anmeldungInfoTextBold">
        PDF-Datei ausdrucken und unterschreiben:
      </p>
      <p>
        Während deine Anmeldung direkt hier bei uns ankommt solltest du die
        Anmeldung ausdrucken und unterschreiben. Die Anmeldung kannst du uns
        entweder per E-Mail oder per Post schicken. Natürlich kannst du die
        Anmeldung auch persönlich in der Musikschule unterschreiben.
      </p>
    </div>
  );
}
