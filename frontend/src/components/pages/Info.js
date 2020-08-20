import React, { Component } from "react";
import Collapsible from "react-collapsible";

import { Link } from "react-router-dom";

function Info() {
  return (
    <div>
      <h2 className="g">Info's</h2>

      <Collapsible
        trigger={
          <div className="img_text_hover" style={{ padding: "10px" }}>
            Wichtig!!! Was ist während der{" "}
            <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
              Corona-Zeit
            </a>{" "}
            in der Musikschule zu beachten:
          </div>
        }
      >
        <p>
          Weil uns unsere Erfahrung gelehrt hat, dass man innerhalb einer kurzen
          Zeit niemanden gerecht werden kann. Im Gitarrenunterricht z.B. lernt
          man in der ersten Stunde nur die richtige Sitz- / und Handhaltung.
          Auch zwischenmenschlich braucht es manchmal etwas Zeit...{" "}
        </p>
      </Collapsible>

      <Link to="/fragen_antworten">
        <div
          className="img_text_hover"
          style={{
            padding: "10px",
            color: "white",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Zeit sparen - schnelle{" "}
          <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
            Antworten
          </a>{" "}
          auf dringende{" "}
          <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
            Fragen
          </a>{" "}
          findest du hier:
        </div>
      </Link>

      <Link to="/anmeldung">
        <div
          className="img_text_hover"
          style={{
            padding: "10px",
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Für Schnellentschlossene - hier gehts direkt zur{" "}
          <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
            Online-Anmeldung
          </a>
          :
        </div>
      </Link>

      <Link to="/ferienkalender">
        <div
          className="img_text_hover"
          style={{
            padding: "10px",
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Wann findet immer Musikschulunterricht statt? Der{" "}
          <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
            Ferienkalender
          </a>{" "}
          lügt nicht 🙂!
        </div>
      </Link>

      <Link to="/musikschul_team">
        <div
          className="img_text_hover"
          style={{
            padding: "10px",
            color: "white",
            cursor: "pointer",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          Ein Blick auf uns{" "}
          <a style={{ fontWeight: "bold", color: "rgb(61, 192, 151)" }}>
            Lehrkräfte
          </a>
          :
        </div>
      </Link>
    </div>
  );
}

export default Info;
