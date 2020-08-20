import React, { Component, useState, useEffect } from "react";
import { Table } from "reactstrap";
import Collapsible from "react-collapsible";
import css from "../../../css/Anmeldung.css";
import StudentList from "../admin/StudentList";
import axios from "axios";
import qs from "qs";
import IBAN from "iban";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const ibantools = require("ibantools");

function Anmeldung() {
  const radioGray = {
    color: "rgb(70,70,70)",
  };

  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const number5Format = /^[0-9][0-9][0-9][0-9][0-9]$/;
  const number4Format = /^[0-9][0-9][0-9][0-9]$/;
  const number2Format = /^[0-9][0-9]$/;
  const timeFormat = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  const style = {
    invalid: {
      borderColor: "rgb(232, 86, 72)",
      borderStyle: "solid",
    },
    valid: {
      borderColor: "rgb(61, 192, 151)",
      borderStyle: "solid",
    },
  };

  const [state, setState] = useState({
    id: 0,

    info: false,

    schuelerVorname: "",
    schuelerNachname: "",
    schuelerGeburtstagTag: "",
    schuelerGeburtstagMonat: "",
    schuelerGeburtstagJahr: "",

    schuelerNichtVollmuendig: false,
    erziehungsberechtigterVorname: "",
    erziehungsberechtigterNachname: "",

    schuelerStrasse: "",
    schuelerHausnummer: "",
    schuelerPostleitzahl: "",
    schuelerOrt: "",

    vollmuendigTelefon: "",
    vollmuendigMobil: "",
    vollmuendigEmail: "",

    aktiveFamilieneMitglieder: false,
    schueler1: "",
    schueler2: "",
    schueler3: "",

    unterrichtsFach: "",
    unterrichtsDauer: "",
    unterrichtsTurnus: "",
    unterrichtsEinheit: "",

    moeglicheUnterrichtszeiten: false,
    montagVon: "",
    montagBis: "",
    dienstagVon: "",
    dienstagBis: "",
    mittwochVon: "",
    mittwochBis: "",
    donnerstagVon: "",
    donnerstagBis: "",
    freitagVon: "",
    freitagBis: "",

    benoetigtInstrument: false,
    leihInstrument: "",

    sonstigeAnmerkung: false,
    anmerkung: "",

    radio: "",
    radioAnrede: "",

    sepaVorname: "",
    sepaNachname: "",
    sepaStraße: "",
    sepaHausnummer: "",
    sepaPostleitzahl: "",
    sepaOrt: "",
    sepaTelefon: "",
    sepaEmail: "",
    sepaKreditinstitut: "",
    sepaIBAN: "",
    sepaBIC: "",

    absenden: false,
  });

  function handleChange(event) {
    if (
      event.target.type == "text" ||
      event.target.type == "tel" ||
      event.target.type == "email"
    ) {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (event.target.type == "checkbox") {
      const { name, checked } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (event.target.type == "radio") {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      switch (value) {
        case "sepaErziehungsberechtigter": {
          setState((prevState) => ({
            ...prevState,
            sepaVorname: [state.erziehungsberechtigterVorname],
            sepaNachname: [state.erziehungsberechtigterNachname],
            sepaStraße: [state.schuelerStrasse],
            sepaHausnummer: [state.schuelerHausnummer],
            sepaPostleitzahl: [state.schuelerPostleitzahl],
            sepaOrt: [state.schuelerOrt],
            sepaTelefon: [state.vollmuendigTelefon],
            sepaEmail: [state.vollmuendigEmail],
          }));

          break;
        }
        case "sepaSchueler": {
          setState((prevState) => ({
            ...prevState,
            sepaVorname: [state.schuelerVorname],
            sepaNachname: [state.schuelerNachname],
            sepaStraße: [state.schuelerStrasse],
            sepaHausnummer: [state.schuelerHausnummer],
            sepaPostleitzahl: [state.schuelerPostleitzahl],
            sepaOrt: [state.schuelerOrt],
            sepaTelefon: [state.vollmuendigTelefon],
            sepaEmail: [state.vollmuendigEmail],
          }));

          break;
        }
        case "sepaAnderer": {
          setState((prevState) => ({
            ...prevState,
            sepaVorname: "",
            sepaNachname: "",
            sepaStraße: "",
            sepaHausnummer: "",
            sepaPostleitzahl: "",
            sepaOrt: "",
            sepaTelefon: "",
            sepaEmail: "",
          }));

          break;
        }
        default: {
          setState((prevState) => ({
            ...prevState,
          }));
        }
      }
    } else if (event.target.name == "anmerkung") {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(`http://localhost:4000/neu`, { state });
  }

  useEffect(() => {
    if (
      state.schuelerVorname.length > 0 &&
      state.schuelerNachname.length > 0 &&
      number2Format.test(state.schuelerGeburtstagTag) &&
      number2Format.test(state.schuelerGeburtstagMonat) &&
      number4Format.test(state.schuelerGeburtstagJahr) &&
      state.schuelerStrasse.length > 0 &&
      state.schuelerHausnummer.length > 0 &&
      number5Format.test(state.schuelerPostleitzahl) &&
      state.schuelerOrt.length > 0 &&
      state.vollmuendigTelefon.length > 0 &&
      //     state.vollmuendigMobil.length > 0 &&
      emailFormat.test(state.vollmuendigEmail) &&
      state.unterrichtsFach.length > 0 &&
      state.unterrichtsFach != "Bitte auswählen" &&
      state.unterrichtsDauer.length > 0 &&
      state.unterrichtsDauer != "Bitte auswählen" &&
      state.unterrichtsTurnus.length > 0 &&
      state.unterrichtsTurnus != "Bitte auswählen" &&
      state.unterrichtsEinheit.length > 0 &&
      state.unterrichtsEinheit != "Bitte auswählen" &&
      (state.radioAnrede == "sepaFrau" || state.radioAnrede == "sepaMann") &&
      state.sepaVorname.length > 0 &&
      state.sepaNachname.length > 0 &&
      state.sepaStraße.length > 0 &&
      state.sepaHausnummer.length > 0 &&
      number5Format.test(state.sepaPostleitzahl) &&
      state.sepaOrt.length > 0 &&
      state.sepaTelefon.length > 0 &&
      emailFormat.test(state.sepaEmail) &&
      state.sepaKreditinstitut.length > 0 &&
      IBAN.isValid(state.sepaIBAN) &&
      ibantools.isValidBIC(state.sepaBIC)
    ) {
      // if (
      //   state.schuelerNichtVollmuendig &&
      //   state.erziehungsberechtigterVorname.length > 0 &&
      //   state.erziehungsberechtigterNachname.length > 0
      // ) {
      // }

      // if (
      //   state.benoetigtInstrument &&
      //   state.leihInstrument.length > 0 &&
      //   state.leihInstrument != "Bitte auswählen"
      // ) {
      // }

      const timer = setTimeout(
        () => setState((prevState) => ({ ...prevState, absenden: true })),
        0
      );
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => setState((prevState) => ({ ...prevState, absenden: false })),
        0
      );
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div>
      <h2 className="r">Anmeldung</h2>
      <div className="blackContainer">
        <div
          id="registration-is-payer"
          style={{ cursor: "pointer", backgroundColor: "black" }}
        >
          <label className="anmeldungCheckboxText">
            <input
              checked={state.info}
              className="anmeldungCheckbox"
              onChange={handleChange}
              name="info"
              type="checkbox"
            />
            Infos zur Durchführung der Online-Anmeldung
          </label>
        </div>

        {state.info ? (
          <div className="anmeldungInfoText">
            <p>
              Hier kannst du dich für den Unterricht bei der Musikschule Hopf
              anmelden. Der Prozess ist ganz einfach, er besteht aus 3
              Schritten.
            </p>
            <p className="anmeldungInfoTextBold">
              1. Online Formular ausfüllen:
            </p>
            <p>
              Bitte fülle alle markierten Felder aus. Grüne Farbe heißt, dass
              die Eingabe stimmt! Sobald sich der 'Absenden' - Button aktiviert
              kannst du das Formular abschicken. Daraufhin bekommst du einen
              Link zu einer PDF-Datei an deine E-Mail Adresse gesendet.
            </p>
            <p className="anmeldungInfoTextBold">
              2. PDF-Datei ausdrucken und unterschreiben:
            </p>
            <p>
              Während deine Anmeldung direkt hier bei uns ankommt solltest du
              die Anmeldung ausdrucken und unterschreiben. Die Anmeldung kannst
              du uns entweder per E-Mail oder per Post schicken. Natürlich
              kannst du die Anmeldung auch persönlich in der Musikschule
              unterschreiben.
            </p>
            <p className="anmeldungInfoTextBold">3. Lehrer, Tag und Uhrzeit:</p>
            <p>
              Das wichtigste fehlt natürlich noch. An welchem Tag, zu welcher
              Zeit und bei welchem Lehrer wird dein Unterricht sein? Dazu werden
              wir dich per Telefon oder E-Mail kontaktieren. Natürlich bist du
              auch dabei gerne eingeladen persönlich bei uns vorbei zu kommen.
            </p>
            <p style={{ fontWeight: "bold" }}>
              Wichtig: Unterricht beginnt erst nach Eingang der unterschriebenen
              Anmeldung und der Bestätigung durch das Büro.
            </p>
            <p style={{ fontWeight: "bold" }}>
              Wenn du Fragen hast, dann melde dich doch einfach bei uns, oder
              komm vorbei!
            </p>

            <hr />
            <p style={{ fontWeight: "bold" }}>
              Bitte alle{" "}
              <span
                style={{ backgroundColor: "black", color: "rgb(232, 86, 72)" }}
              >
                rot markierten Felder
              </span>{" "}
              ausfüllen! Auf den "Absenden"-Button kann erst geklickt werden,
              wenn alle erfolderlichen Felder nach Eingabe der erforderlichen
              Daten{" "}
              <span
                style={{
                  backgroundColor: "black",
                  color: "rgb(61, 192, 151)",
                }}
              >
                grün
              </span>{" "}
              sind!
            </p>
          </div>
        ) : (
          <div style={{ padding: "20px", backgroundColor: "black" }}></div>
        )}
      </div>

      <form
        className="registration"
        action="/buero"
        method="POST"
        acceptCharset="UTF-8"
      >
        <div className="blackContainer">
          <h3 className="r">Name des Schülers:</h3>
          <label>Vorname:</label>
          <input
            type="text"
            style={
              state.schuelerVorname.length > 0 ? style.valid : style.invalid
            }
            value={state.schuelerVorname}
            onChange={handleChange}
            className="anmeldungInputText"
            name="schuelerVorname"
            placeholder="Vorname"
            maxLength={25}
          />
          <br />
          <label>Nachname:</label>
          <input
            type="text"
            style={
              state.schuelerNachname.length > 0 ? style.valid : style.invalid
            }
            value={state.schuelerNachname}
            onChange={handleChange}
            className="anmeldungInputText"
            name="schuelerNachname"
            placeholder="Nachname"
            maxLength={25}
          />
          <br />
          <label>Geburtstdatum:</label>
          <input
            style={
              isMobile
                ? number2Format.test(state.schuelerGeburtstagTag)
                  ? {
                      borderColor: "rgb(61, 192, 151)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                  : {
                      borderColor: "rgb(232, 86, 72)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                : number2Format.test(state.schuelerGeburtstagTag)
                ? {
                    borderColor: "rgb(61, 192, 151)",
                    borderStyle: "solid",
                  }
                : {
                    borderColor: "rgb(232, 86, 72)",
                    borderStyle: "solid",
                  }
            }
            type="text"
            value={state.schuelerGeburtstagTag}
            onChange={handleChange}
            className="anmeldungInputTextSmallest"
            name="schuelerGeburtstagTag"
            placeholder="TT"
            maxLength={2}
          />
          <input
            style={
              isMobile
                ? number2Format.test(state.schuelerGeburtstagMonat)
                  ? {
                      borderColor: "rgb(61, 192, 151)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                  : {
                      borderColor: "rgb(232, 86, 72)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                : number2Format.test(state.schuelerGeburtstagMonat)
                ? {
                    borderColor: "rgb(61, 192, 151)",
                    borderStyle: "solid",
                  }
                : {
                    borderColor: "rgb(232, 86, 72)",
                    borderStyle: "solid",
                  }
            }
            type="text"
            value={state.schuelerGeburtstagMonat}
            onChange={handleChange}
            className="anmeldungInputTextSmallest"
            name="schuelerGeburtstagMonat"
            placeholder="MM"
            maxLength={2}
          />
          <input
            style={
              isMobile
                ? number4Format.test(state.schuelerGeburtstagJahr)
                  ? {
                      borderColor: "rgb(61, 192, 151)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                  : {
                      borderColor: "rgb(232, 86, 72)",
                      borderStyle: "solid",
                      width: "50px",
                    }
                : number4Format.test(state.schuelerGeburtstagJahr)
                ? {
                    borderColor: "rgb(61, 192, 151)",
                    borderStyle: "solid",
                  }
                : {
                    borderColor: "rgb(232, 86, 72)",
                    borderStyle: "solid",
                  }
            }
            type="text"
            value={state.schuelerGeburtstagJahr}
            onChange={handleChange}
            className="anmeldungInputTextSmaller"
            name="schuelerGeburtstagJahr"
            placeholder="JJJJ"
            maxLength={4}
          />
          <br />
        </div>

        <div className="blackContainer">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              paddingBottom: "10px",
            }}
          >
            <label className="anmeldungCheckboxText">
              <input
                className="anmeldungCheckbox"
                checked={state.schuelerNichtVollmuendig}
                name="schuelerNichtVollmuendig"
                onClick={handleChange}
                type="checkbox"
              />
              Schüler noch nicht vollmündig und wohnhaft bei
              Erziehungsberechtigten (Vater/Mutter/Großeltern ...)
            </label>
          </div>

          {state.schuelerNichtVollmuendig ? (
            <div style={{ backgroundColor: "black" }}>
              <h3 className="r">Name des Erziehungsberechtigten</h3>
              <label>Vorname:</label>
              <input
                style={
                  state.erziehungsberechtigterVorname.length > 0
                    ? style.valid
                    : style.invalid
                }
                type="text"
                value={state.erziehungsberechtigterVorname}
                onChange={handleChange}
                className="anmeldungInputText"
                name="erziehungsberechtigterVorname"
                placeholder="Vorname"
                maxLength={25}
              />
              <br />
              <label>Nachname:</label>
              <input
                style={
                  state.erziehungsberechtigterNachname.length > 0
                    ? style.valid
                    : style.invalid
                }
                type="text"
                value={state.erziehungsberechtigterNachname}
                onChange={handleChange}
                className="anmeldungInputText"
                name="erziehungsberechtigterNachname"
                placeholder="Nachname"
                maxLength={25}
              />
              <br />
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="blackContainer">
          <h3 className="r">Wohnort des Schülers:</h3>

          <label>Straße, Hausnummer:</label>
          <input
            type="text"
            style={
              state.schuelerStrasse.length > 0 ? style.valid : style.invalid
            }
            value={state.schuelerStrasse}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="schuelerStrasse"
            placeholder="Straße"
            maxLength={45}
          />
          <input
            type="text"
            style={
              state.schuelerHausnummer.length > 0 ? style.valid : style.invalid
            }
            value={state.schuelerHausnummer}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="schuelerHausnummer"
            placeholder="Hausnummer"
            maxLength={5}
          />
          <br />
          <label>Postleitzahl, Ort:</label>
          <input
            type="text"
            style={
              number5Format.test(state.schuelerPostleitzahl)
                ? style.valid
                : style.invalid
            }
            value={state.schuelerPostleitzahl}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="schuelerPostleitzahl"
            className="anmeldungInputTextSmall"
            placeholder="PLZ"
            maxLength={5}
          />
          <input
            type="text"
            style={state.schuelerOrt.length > 0 ? style.valid : style.invalid}
            value={state.schuelerOrt}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="schuelerOrt"
            className="anmeldungInputTextSmall"
            placeholder="Ort"
            maxLength={45}
          />
          <br />
        </div>

        <div className="blackContainer">
          <h3 className="r">
            Kontaktdaten{" "}
            <a style={{ fontSize: "20px" }}>
              (vollmündiger Schüler/Erziehungsberechtigter)
            </a>
            :
          </h3>

          <label>Telefon privat:</label>
          <input
            style={
              state.vollmuendigTelefon.length > 0 ? style.valid : style.invalid
            }
            type="tel"
            value={state.vollmuendigTelefon}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="vollmuendigTelefon"
            className="anmeldungInputText"
            placeholder="Telefon"
            maxLength={30}
          />
          <br />
          <label>Mobil privat:</label>
          <input
            style={
              state.vollmuendigMobil.length > 0 ? style.valid : style.invalid
            }
            type="tel"
            value={state.vollmuendigMobil}
            onChange={handleChange}
            className="anmeldungInputText"
            name="vollmuendigMobil"
            placeholder="Mobil"
            maxLength={30}
          />
          <br />
          <label>E-Mail:</label>
          <input
            style={
              emailFormat.test(state.vollmuendigEmail)
                ? style.valid
                : style.invalid
            }
            type="email"
            value={state.vollmuendigEmail}
            onChange={handleChange}
            className="anmeldungInputText"
            name="vollmuendigEmail"
            placeholder="E-Mail"
            maxLength={45}
          />
          <br />
        </div>

        <div className="blackContainer">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              paddingBottom: "10px",
            }}
          >
            <label className="anmeldungCheckboxText">
              <input
                className="anmeldungCheckbox"
                checked={state.aktiveFamilieneMitglieder}
                onClick={handleChange}
                type="checkbox"
                name="aktiveFamilieneMitglieder"
              />
              Weitere Geschwister-Kinder in der Musikschule:
            </label>
          </div>

          {state.aktiveFamilieneMitglieder ? (
            <div style={{ backgroundColor: "black" }}>
              <label>1. Nachname, Vorname:</label>
              <input
                style={state.schueler1.length > 0 ? style.valid : null}
                type="text"
                value={state.schueler1}
                onChange={handleChange}
                className="anmeldungInputText"
                name="schueler1"
                placeholder="Nachname, Vorname"
                maxLength={25}
              />
              <br />
              <label>2. Nachname, Vorname:</label>
              <input
                style={state.schueler2.length > 0 ? style.valid : null}
                type="text"
                value={state.schueler2}
                onChange={handleChange}
                className="anmeldungInputText"
                name="schueler2"
                placeholder="Nachname, Vorname"
                maxLength={25}
              />
              <br />
              <label>3. Nachname, Vorname:</label>
              <input
                style={state.schueler3.length > 0 ? style.valid : null}
                type="text"
                value={state.schueler3}
                onChange={handleChange}
                className="anmeldungInputText"
                name="schueler3"
                placeholder="Nachname, Vorname"
                maxLength={25}
              />
              <br />
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <br />
        <br />

        <div className="blackContainer">
          <div className="anmeldungSelectSpacing">
            <h3 className="r">Unterrichtsdaten:</h3>
            <br />

            <label>Unterrichts-Fach:</label>

            <select
              style={
                state.unterrichtsFach.length > 0 &&
                state.unterrichtsFach != "Bitte auswählen"
                  ? style.valid
                  : style.invalid
              }
              value={state.unterrichtsFach}
              onChange={handleChange}
              placeholder="Bitte auswählen"
              name="unterrichtsFach"
              size={1}
            >
              <option>Bitte auswählen</option>
              <option>Gitarre</option>
              <option>E-Gitarre</option>
              <option>E-Bass</option>
              <option>Gesang</option>
              <option>Klavier</option>
              <option>Schlagzeug</option>
              <option>Cajon</option>
              <option>Darbuka</option>
              <option>Blockflöte</option>
              <option>Querflöte</option>
              <option>Frühes Musizieren</option>
            </select>
          </div>

          <br />

          <div className="anmeldungSelectSpacing">
            <label>Unterrichts-Dauer:</label>

            <select
              style={
                state.unterrichtsDauer.length > 0 &&
                state.unterrichtsDauer != "Bitte auswählen"
                  ? style.valid
                  : style.invalid
              }
              value={state.unterrichtsDauer}
              onChange={handleChange}
              placeholder="Bitte auswählen"
              name="unterrichtsDauer"
              size={1}
            >
              <option>Bitte auswählen</option>
              <option>30 Min.</option>
              <option>45 Min.</option>
              <option>60 Min.</option>
            </select>
          </div>

          <br />

          <div className="anmeldungSelectSpacing">
            <label>Unterrichts-Turnus:</label>

            <select
              style={
                state.unterrichtsTurnus.length > 0 &&
                state.unterrichtsTurnus != "Bitte auswählen"
                  ? style.valid
                  : style.invalid
              }
              value={state.unterrichtsTurnus}
              onChange={handleChange}
              placeholder="Bitte auswählen"
              name="unterrichtsTurnus"
              size={1}
            >
              <option>Bitte auswählen</option>
              <option>Wöchentlich</option>
              <option>14 tägig</option>
              <option>Zehnerkarte</option>
            </select>
          </div>

          <br />

          <div className="anmeldungSelectSpacing">
            <label htmlFor="registration-dauer">Unterrichts-Einheit:</label>

            <select
              style={
                state.unterrichtsEinheit.length > 0 &&
                state.unterrichtsEinheit != "Bitte auswählen"
                  ? style.valid
                  : style.invalid
              }
              value={state.unterrichtsEinheit}
              onChange={handleChange}
              placeholder="Bitte auswählen"
              name="unterrichtsEinheit"
              size={1}
            >
              <option>Bitte auswählen</option>
              <option>Einzel</option>
              <option>Zweier</option>
              <option>Gruppe (ab 3)</option>
            </select>
          </div>
        </div>

        <div className="blackContainer">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              paddingBottom: "10px",
            }}
          >
            <label className="anmeldungCheckboxText">
              <input
                className="anmeldungCheckbox"
                checked={state.moeglicheUnterrichtszeiten}
                onClick={handleChange}
                type="checkbox"
                name="moeglicheUnterrichtszeiten"
              />
              Mögliche Unterrichtszeiten:
            </label>
          </div>

          {state.moeglicheUnterrichtszeiten ? (
            <div style={{ backgroundColor: "black" }}>
              <label>Montag:</label>
              <input
                value={state.montagVon}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="montagVon"
                placeholder="Von (z.B. 14:30)"
                maxLength={5}
              />
              <input
                value={state.montagBis}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="montagBis"
                placeholder="Bis (z.B. 15:00)"
                maxLength={5}
              />
              <br />
              <label>Dienstag:</label>
              <input
                value={state.dienstagVon}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="dienstagVon"
                placeholder="Von (z.B. 14:30)"
                maxLength={5}
              />
              <input
                value={state.dienstagBis}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="dienstagBis"
                placeholder="Bis (z.B. 15:00)"
                maxLength={5}
              />
              <br />
              <label>Mittwoch:</label>
              <input
                value={state.mittwochVon}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="mittwochVon"
                placeholder="Von (z.B. 14:30)"
                maxLength={5}
              />
              <input
                value={state.mittwochBis}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="mittwochBis"
                placeholder="Bis (z.B. 15:00)"
                maxLength={5}
              />
              <br />
              <label>Donnerstag:</label>
              <input
                value={state.donnerstagVon}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="donnerstagVon"
                placeholder="Von (z.B. 14:30)"
                maxLength={5}
              />
              <input
                value={state.donnerstagBis}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="donnerstagBis"
                placeholder="Bis (z.B. 15:00)"
                maxLength={5}
              />
              <br />
              <label>Freitag:</label>
              <input
                value={state.freitagVon}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="freitagVon"
                placeholder="Von (z.B. 14:30)"
                maxLength={5}
              />
              <input
                value={state.freitagBis}
                onChange={handleChange}
                className="anmeldungInputTextSmall"
                type="text"
                name="freitagBis"
                placeholder="Bis (z.B. 15:00)"
                maxLength={5}
              />
              <br />
              <br />
              <br />
            </div>
          ) : (
            <div></div>
          )}

          <div
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              paddingBottom: "10px",
            }}
          >
            <label className="anmeldungCheckboxText">
              <input
                checked={state.benoetigtInstrument}
                className="anmeldungCheckbox"
                onClick={handleChange}
                type="checkbox"
                name="benoetigtInstrument"
              />
              Ich benötige ein Leihinstrument{" "}
              <Link
                to="/gebuehren"
                target="_blank"
                style={{ paddingRight: "50px" }}
              >
                <a>(Leihgebühren)</a>
              </Link>
            </label>
            {state.benoetigtInstrument ? (
              <div style={{ backgroundColor: "black", display: "inline" }}>
                <select
                  style={
                    state.leihInstrument.length > 0 &&
                    state.leihInstrument != "Bitte auswählen"
                      ? style.valid
                      : style.invalid
                  }
                  value={state.leihInstrument}
                  onChange={handleChange}
                  placeholder="Bitte auswählen"
                  name="leihInstrument"
                  size={1}
                >
                  <option>Bitte auswählen</option>
                  <option>Klassische Gitarre (alle Größen)</option>
                  <option>E-Gitarre</option>
                  <option>Bass</option>
                  <option>E-Gitarren-/Bassverstärker</option>
                  <option>Keyboard</option>
                  <option>E-Piano</option>
                </select>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div
            style={{
              cursor: "pointer",
              backgroundColor: "black",
              paddingBottom: "10px",
            }}
          >
            <label className="anmeldungCheckboxText">
              <input
                checked={state.sonstigeAnmerkung}
                className="anmeldungCheckbox"
                onClick={handleChange}
                type="checkbox"
                name="sonstigeAnmerkung"
              />
              Sonstige Anmerkungen
            </label>
          </div>

          {state.sonstigeAnmerkung ? (
            <div style={{ backgroundColor: "black" }}>
              <textarea
                type="textarea"
                value={state.anmerkung}
                onChange={handleChange}
                name="anmerkung"
                placeholder="Anmerkungen"
              />
              <br />
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <br />
        <br />

        <div className="blackContainer">
          <h3 className="r">SEPA-Lastschrift</h3>

          <label>
            <label
              style={
                state.radio == "sepaErziehungsberechtigter" ? null : radioGray
              }
              className="anmeldungCheckboxText"
            >
              <input
                checked={state.radio === "sepaErziehungsberechtigter"}
                className="anmeldungCheckbox"
                name="radio"
                onChange={handleChange}
                type="radio"
                value="sepaErziehungsberechtigter"
              />
              Erziehungsberechtigter ist Zahlender
            </label>
          </label>
          <br />
          <label>
            <label
              style={state.radio == "sepaSchueler" ? null : radioGray}
              className="anmeldungCheckboxText"
            >
              <input
                checked={state.radio === "sepaSchueler"}
                name="radio"
                className="anmeldungCheckbox"
                onChange={handleChange}
                type="radio"
                value="sepaSchueler"
              />
              Schüler ist Zahlender
            </label>
          </label>
          <br />
          <label>
            <label
              style={state.radio == "sepaAnderer" ? null : radioGray}
              className="anmeldungCheckboxText"
            >
              <input
                checked={state.radio === "sepaAnderer"}
                name="radio"
                className="anmeldungCheckbox"
                onChange={handleChange}
                type="radio"
                value="sepaAnderer"
              />
              Anderer Zahlender (Oma, Onkel, ...)
            </label>
          </label>
          <br />
          <hr />

          <label>Anrede:</label>
          <label>
            <label
              style={state.radioAnrede == "sepaFrau" ? null : radioGray}
              className="anmeldungCheckboxText"
            >
              <input
                checked={state.radioAnrede === "sepaFrau"}
                className="anmeldungCheckbox"
                name="radioAnrede"
                onChange={handleChange}
                type="radio"
                value="sepaFrau"
              />
              Frau
            </label>
            <label
              style={state.radioAnrede == "sepaMann" ? null : radioGray}
              className="anmeldungCheckboxText"
            >
              <input
                checked={state.radioAnrede === "sepaMann"}
                className="anmeldungCheckbox"
                name="radioAnrede"
                onChange={handleChange}
                type="radio"
                value="sepaMann"
              />
              Herr
            </label>
          </label>
          <br />

          <label>Vorname:</label>
          <input
            style={state.sepaVorname.length > 0 ? style.valid : style.invalid}
            value={state.sepaVorname}
            onChange={handleChange}
            className="anmeldungInputText"
            type="text"
            name="sepaVorname"
            placeholder="Vorname"
            maxLength={50}
          />
          <br />
          <label>Nachname:</label>
          <input
            style={state.sepaNachname.length > 0 ? style.valid : style.invalid}
            value={state.sepaNachname}
            onChange={handleChange}
            className="anmeldungInputText"
            type="text"
            name="sepaNachname"
            placeholder="Nachname"
            maxLength={50}
          />
          <br />
          <label>Straße, Hausnummer:</label>
          <input
            style={state.sepaStraße.length > 0 ? style.valid : style.invalid}
            value={state.sepaStraße}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            type="text"
            name="sepaStraße"
            placeholder="Straße"
            maxLength={45}
          />
          <input
            style={
              state.sepaHausnummer.length > 0 ? style.valid : style.invalid
            }
            value={state.sepaHausnummer}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            type="text"
            name="sepaHausnummer"
            placeholder="Hausnummer"
            maxLength={45}
          />
          <br />
          <label>PLZ, Ort:</label>
          <input
            style={
              number5Format.test(state.sepaPostleitzahl)
                ? style.valid
                : style.invalid
            }
            value={state.sepaPostleitzahl}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            type="text"
            name="sepaPostleitzahl"
            placeholder="PLZ"
            maxLength={5}
          />
          <input
            style={state.sepaOrt.length > 0 ? style.valid : style.invalid}
            value={state.sepaOrt}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            type="text"
            name="sepaOrt"
            placeholder="Ort"
            maxLength={50}
          />
          <br />
          <label>Telefon privat:</label>
          <input
            style={state.sepaTelefon.length > 0 ? style.valid : style.invalid}
            type="tel"
            value={state.sepaTelefon}
            onChange={handleChange}
            className="anmeldungInputTextSmall"
            name="sepaTelefon"
            className="anmeldungInputText"
            placeholder="Telefon"
            maxLength={30}
          />
          <br />
          <label>E-Mail:</label>
          <input
            style={
              emailFormat.test(state.sepaEmail) ? style.valid : style.invalid
            }
            type="email"
            value={state.sepaEmail}
            onChange={handleChange}
            className="anmeldungInputText"
            name="sepaEmail"
            placeholder="E-Mail"
            maxLength={45}
          />
          <br />
          <hr />
          <label>Kreditinstitut:</label>
          <input
            style={
              state.sepaKreditinstitut.length > 0 ? style.valid : style.invalid
            }
            value={state.sepaKreditinstitut}
            onChange={handleChange}
            className="anmeldungInputText"
            type="text"
            name="sepaKreditinstitut"
            placeholder="Kreditinstitut"
            maxLength={45}
          />
          <br />
          <label>IBAN:</label>
          <input
            style={IBAN.isValid(state.sepaIBAN) ? style.valid : style.invalid}
            value={state.sepaIBAN}
            onChange={handleChange}
            className="anmeldungInputText"
            type="text"
            name="sepaIBAN"
            placeholder="IBAN"
            maxLength={34}
          />
          <br />
          <label>BIC:</label>
          <input
            style={
              ibantools.isValidBIC(state.sepaBIC) ? style.valid : style.invalid
            }
            value={state.sepaBIC}
            onChange={handleChange}
            className="anmeldungInputText"
            type="text"
            name="sepaBIC"
            placeholder="BIC/SWIFT"
            maxLength={11}
          />
        </div>
        <br />

        <div className="blackContainer">
          <p style={{ textAlign: "justify" }}>
            Bitte lesen Sie die{" "}
            <Link to="/schulordnung" target="_blank">
              Allgemeinen Geschäftsbedingungen
            </Link>
            ! <br />
            Mit der Unterschrift auf der Anmeldung stimmen Sie den AGBs zu. Vor
            dem ersten Einzug einer SEPA-Basis-Lastschrift wird Sie die
            Musikschule Hopf über den Einzug in dieser Verfahrensart
            unterrichten. Aus datenschutzrechtlichen Gründen weisen wir darauf
            hin, dass die obigen Angaben in einem Computer gespeichert, aber nur
            für Zwecke der Musikschule verwendet und nicht an Dritte
            weitergegeben werden.
          </p>
        </div>

        <div className="blackContainer">
          <div className="blackContainer flex" style={{ marginTop: "-15px" }}>
            <button
              style={state.absenden ? style.valid : style.invalid}
              onClick={handleSubmit}
              disabled={state.absenden}
              className="btnSubmit"
            >
              Anmeldung absenden
            </button>
          </div>
          <p style={{ fontWeight: "bold" }}>
            Bitte alle{" "}
            <span
              style={{ backgroundColor: "black", color: "rgb(232, 86, 72)" }}
            >
              rot markierten Felder
            </span>{" "}
            ausfüllen! Auf den "Absenden"-Button kann erst geklickt werden, wenn
            alle erfolderlichen Felder nach Eingabe der erforderlichen Daten{" "}
            <span
              style={{
                backgroundColor: "black",
                color: "rgb(61, 192, 151)",
              }}
            >
              grün
            </span>{" "}
            sind!
          </p>
        </div>
      </form>

      <Collapsible
        trigger={
          <div className="img_text_hover" style={{ padding: "10px" }}>
            <a style={{ color: "#E85648" }}>Probleme bei der Anmeldung?</a>
          </div>
        }
      >
        <p>
          Bei Problemen mit dem Formular kannst du dich an emilhopf@gmail.com
          wenden.
        </p>
      </Collapsible>
    </div>
  );
}

export default Anmeldung;
