import React, { Component } from "react";
import Pdf from "../../../img/Ummeldeformular.pdf";

export default class Ummeldung extends Component {
  render() {
    return (
      <div>
        <h2 className="r">Ummeldung</h2>
        <br />
        <div className="blackContainer">
          <p>
            Für die Ummeldung die beiligende PDF Datei ausfüllen und per Email,
            Post zusenden oder persönlich vorbei bringen.
          </p>
          <p>
            <a href={Pdf} target="_blank">
              Ummeldeformular
            </a>
          </p>
        </div>
      </div>
    );
  }
}
