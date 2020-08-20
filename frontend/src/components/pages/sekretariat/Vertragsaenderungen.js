import React from "react";
import Pdf from "../../../img/Vertragsänderungen.pdf";

export default function Vertragsaenderungen() {
  return (
    <div>
      <h2 className="r">Vertragsänderungen</h2>
      <br />
      <div className="blackContainer">
        <p>
          Für Vertragsänderungen die beiligende PDF Datei ausfüllen und per
          Email, Post zusenden oder persönlich vorbei bringen.
        </p>
        <p>
          <a href={Pdf} target="_blank">
            Vertragsänderung Formular
          </a>
        </p>
      </div>
    </div>
  );
}
