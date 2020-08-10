import React, { Component } from "react";

import { FiMap } from "react-icons/fi";

export default class Kontakt extends Component {
  render() {
    return (
      <div>
        <h2 className="o">Kontakt</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.5fr 1fr 0.2fr",
            gridTemplateRows: "repeat(4, 1fr)",
            gridRowGap: "10px",
            backgroundColor: "black",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            paddingBottom: "20px",
          }}
          className="blackContainer"
        >
          <div style={{ gridArea: "1 / 2 / 2 / 3", backgroundColor: "black" }}>
            Musikschule Hopf
          </div>
          <div style={{ gridArea: "2 / 1 / 3 / 2", backgroundColor: "black" }}>
            <a
              style={{
                color: "#E9B041",
                fontWeight: "normal",
              }}
            >
              Adresse:
            </a>
          </div>
          <div style={{ gridArea: "2 / 2 / 3 / 3", backgroundColor: "black" }}>
            <a style={{ fontWeight: "bold" }}>
              Marktstraße 38, 73230 Kirchheim unter Teck
            </a>
          </div>
          <div
            style={{
              gridArea: "2 / 3 / 3 / 4",
              backgroundColor: "black",
            }}
          >
            <a
              className="MapIcon"
              href="https://www.google.com/maps?ll=48.647301,9.451152&z=18&t=m&hl=de&gl=DE&mapclient=embed&cid=9261458053759526257"
              target="_blank"
            >
              <FiMap style={{ backgroundColor: "black" }}></FiMap>
            </a>
          </div>
          <div style={{ gridArea: "3 / 1 / 4 / 2", backgroundColor: "black" }}>
            <a
              style={{
                color: "#E9B041",
                fontWeight: "normal",
              }}
            >
              Telefon:
            </a>
          </div>
          <div style={{ gridArea: "3 / 2 / 4 / 3", backgroundColor: "black" }}>
            <a style={{ fontWeight: "bold" }}>07021 - 482 797</a>
          </div>
          <div style={{ gridArea: "4 / 1 / 5 / 2", backgroundColor: "black" }}>
            <a
              style={{
                color: "#E9B041",
                fontWeight: "normal",
              }}
            >
              E-Mail:
            </a>
          </div>
          <div style={{ gridArea: "4 / 2 / 5 / 3", backgroundColor: "black" }}>
            <a style={{ fontWeight: "bold" }}>info@musikschule-hopf.de</a>
          </div>
        </div>
      </div>
    );
  }
}
