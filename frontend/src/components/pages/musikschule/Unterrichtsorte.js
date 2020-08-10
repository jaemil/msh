import React, { Component } from "react";
import { Table } from "reactstrap";
import { FiMap } from "react-icons/fi";

export default class Unterrichtsorte extends Component {
  render() {
    return (
      <div>
        <h2 className="b">Unterrichtsorte</h2>
        <div
          className="blackContainer"
          style={{
            display: "grid",
            gridTemplateColumns: "0fr 1fr",
            gridTemplateRows: "repeat(3, 1fr)",
            color: "white",
            backgroundColor: "black",
            gridRowGap: "10px",
            gridColumnGap: "15px",
            fontSize: "20px",
            fontWeight: "bold",
            paddingBottom: "20px",
          }}
        >
          <div style={{ backgroundColor: "black" }}>
            <a
              className="MapIcon"
              href="https://www.google.com/maps?ll=48.647301,9.451152&z=18&t=m&hl=de&gl=DE&mapclient=embed&cid=9261458053759526257"
              target="_blank"
            >
              <FiMap style={{ backgroundColor: "black" }}>Karte</FiMap>
            </a>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <a>Marktstraße 38, 73230 Kirchheim unter Teck</a>
          </div>

          <div style={{ backgroundColor: "black" }}>
            <a
              className="MapIcon"
              href="https://goo.gl/maps/vUW8Dew1Rod4DAiJ8"
              target="_blank"
            >
              <FiMap style={{ backgroundColor: "black" }}>Karte</FiMap>
            </a>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <a>
              Paulinenstraße 2, 73230 Kirchheim unter Teck (Schlagzeug
              Unterricht)
            </a>
          </div>

          <div style={{ backgroundColor: "black" }}>
            <a
              className="MapIcon"
              href="https://goo.gl/maps/Y5ffFHdscFSCawjB9"
              target="_blank"
            >
              <FiMap
                style={{ backgroundColor: "black", textDecoration: "none" }}
              >
                Karte
              </FiMap>
            </a>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <a>Vordere Straße 48 (Altes Rathaus), 73266 Bissingen unter Teck</a>
          </div>
        </div>
      </div>
    );
  }
}
