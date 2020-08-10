import React, { Component } from "react";
import { Table } from "reactstrap";
import Gallery from "react-grid-gallery";
import { isMobile } from "react-device-detect";
import Johannes from "../../../img/Lehrer/3_Johannes_05.jpg";
import Biggi from "../../../img/Lehrer/8_Biggi_08.jpg";

export default class Buero extends Component {
  render() {
    return (
      <div>
        <h2 className="r">Büro</h2>
        <br />

        <div
          className="blackContainer"
          style={
            isMobile
              ? {
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "0fr",
                  gridRowGap: "0px",
                  gridColumnGap: "0px",
                  color: "white",
                }
              : {
                  display: "grid",
                  gridTemplateColumns: "0.4fr 1fr",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gridRowGap: "20px",
                  gridColumnGap: "20px",
                  color: "white",
                }
          }
        >
          <div style={{ backgroundColor: "black" }}>
            <img
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                width: "100%",
                maxHeight: "100%",
                backgroundColor: "black",
              }}
              src={Biggi}
            ></img>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.5fr 1fr",
              gridTemplateRows: "repeat(5, 1fr)",
              backgroundColor: "black",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              Sekretärin:
            </div>
            <div style={{ backgroundColor: "black" }}>Birgit Ollhäuser</div>
            <div
              style={{ backgroundColor: "black", gridArea: "2 / 2 / 3 / 3" }}
            >
              Ist für euch da, wenn es um Bürokratie (Formelles, Finanzen,
              Einzüge etc.) oder um Informationen rund um die Musikschule geht.
            </div>
            <div
              style={{
                backgroundColor: "black",
                gridArea: "3 / 1 / 4 / 2",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              Bürozeiten:
            </div>
            <div
              style={{ backgroundColor: "black", gridArea: "3 / 2 / 4 / 3" }}
            >
              Montag und Dienstag 9.00 Uhr - 15.00 Uhr. In den Schulferien ist
              das Büro nur gelegentlich geöffnet.
            </div>
            <div
              style={{
                backgroundColor: "black",
                gridArea: "4 / 1 / 5 / 2",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              Telefon:
            </div>
            <div
              style={{ backgroundColor: "black", gridArea: "4 / 2 / 5 / 3" }}
            >
              {" "}
              07021 – 482 797
            </div>
            <div
              style={{
                backgroundColor: "black",
                gridArea: "5 / 1 / 6 / 2",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              E-Mail:
            </div>
            <div
              style={{ backgroundColor: "black", gridArea: "5 / 2 / 6 / 3" }}
            >
              info@musikschule-hopf.de
            </div>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <img
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                width: "100%",
                maxHeight: "100%",
              }}
              src={Johannes}
            ></img>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.5fr 1fr",
              gridTemplateRows: "repeat(5, 1fr)",
              backgroundColor: "black",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              Geschäftsführer:
            </div>
            <div
              style={{
                backgroundColor: "black",
              }}
            >
              Johannes Hopf
            </div>
            <div
              style={{
                backgroundColor: "black",
                color: "#E85648",
                fontWeight: "bold",
              }}
            >
              Bürozeiten:
            </div>
            <div
              style={{
                backgroundColor: "black",
              }}
            >
              Montag bis Donnerstag Vormittags spontan oder nach Absprache.
              Schnelle Kommunikation per Mail!!!
            </div>
            <div
              style={{ gridArea: "3 / 2 / 4 / 3", backgroundColor: "black" }}
            >
              Ist für euch da, wenn es um Informationen zum Unterricht
              (Lehrkräfte/Lehrkonzepte), Geschäftspartner-/ Patenschaften etc.
              und allgemeines über die Musikschule geht.
            </div>
          </div>
        </div>

        <hr className="horizontalHr"></hr>
      </div>
    );
  }
}
