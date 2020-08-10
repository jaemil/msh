import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { FiChevronDown } from "react-icons/fi";
import { IoIosMailOpen } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaPenFancy } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import Modal from "react-awesome-modal";
import { FaPlus } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

function StudentList() {
  const [state, setState] = useState({
    schuelerVorname: "EMIL",
    schuelerNachname: "1240",
  });

  const [login, setLogin] = useState({
    username: "admin",
    password: "test",
    visible: true,
  });

  const [msvplus, setMsvplus] = useState(true);

  function closeModal() {
    setLogin((prevState) => ({
      ...prevState,
      visible: false,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const [state2, setState2] = useState();

  function getSchueler() {
    axios
      .post(`http://localhost:4000/schueler`, {
        username: login.username,
        password: login.password,
      })
      .then((res) => {
        setState2(res.data);

        closeModal();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getSchuelerByID(id) {
    axios
      .post(`http://localhost:4000/schuelerByID`, {
        username: login.username,
        password: login.password,
        ID: id,
      })
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteStudent(id) {
    var answer = window.confirm(`Möchtest du ${id} löschen?`);
    if (answer) {
      axios
        .post(`http://localhost:4000/deleteStudent`, {
          username: login.username,
          password: login.password,
          ID: id,
        })
        .then((res) => {
          getSchueler();
        });
    } else {
    }
  }

  function setSigned(id, sign) {
    axios
      .post(`http://localhost:4000/setSigned`, {
        username: login.username,
        password: login.password,
        ID: id,
        signed: sign,
      })
      .then((res) => {
        getSchueler();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function nightwatch(id) {
    setMsvplus(false);

    axios
      .post(`http://localhost:4000/nightwatch`, {
        username: login.username,
        password: login.password,
        ID: id,
      })
      .then((res) => {
        setMsvplus(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getPdf(id) {
    axios
      .post("http://localhost:4000/create-pdf", {
        schuelerVorname: state2[id].schuelerVorname,
        schuelerNachname: state2[id].schuelerNachname,
        schuelerGeburtstagTag: state2[id].schuelerGeburtstagTag,
        schuelerGeburtstagMonat: state2[id].schuelerGeburtstagMonat,
        schuelerGeburtstagJahr: state2[id].schuelerGeburtstagJahr,
        schuelerStrasse: state2[id].schuelerStrasse,
        schuelerHausnummer: state2[id].schuelerHausnummer,
        schuelerPostleitzahl: state2[id].schuelerPostleitzahl,
        schuelerOrt: state2[id].schuelerOrt,
        vollmuendigTelefon: state2[id].vollmuendigTelefon,
        vollmuendigMobil: state2[id].vollmuendigMobil,
        vollmuendigEmail: state2[id].vollmuendigEmail,
        schueler1: state2[id].schueler1,
        schueler2: state2[id].schueler2,
        schueler3: state2[id].schueler3,
        unterrichtsFach: state2[id].unterrichtsFach,
        unterrichtsDauer: state2[id].unterrichtsDauer,
        unterrichtsTurnus: state2[id].unterrichtsTurnus,
        unterrichtsEinheit: state2[id].unterrichtsEinheit,
        sepaVorname: state2[id].sepaVorname,
        sepaNachname: state2[id].sepaNachname,
        sepaStraße: state2[id].sepaStraße,
        sepaHausnummer: state2[id].sepaHausnummer,
        sepaPostleitzahl: state2[id].sepaPostleitzahl,
        sepaOrt: state2[id].sepaOrt,
        sepaKreditinstitut: state2[id].sepaKreditinstitut,
        sepaIBAN: state2[id].sepaIBAN,
        sepaBIC: state2[id].sepaBIC,

        username: login.username,
        password: login.password,
      })
      .then(() =>
        axios.get("http://localhost:4000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  }

  function showMore(id, more) {
    axios
      .post(`http://localhost:4000/showMore`, {
        username: login.username,
        password: login.password,
        ID: id,
        showMore: more,
      })
      .then((res) => {
        getSchueler();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function showSchueler() {
    if (state2) {
      return (
        <div>
          <p>
            {state2.map((schueler, index) => {
              return (
                <div>
                  <div className="studentList">
                    {schueler.showMore ? (
                      <FiChevronDown
                        onClick={() => {
                          showMore(index + 1, false);
                        }}
                        className="showMore180"
                      />
                    ) : (
                      <FiChevronDown
                        onClick={() => {
                          showMore(index + 1, true);
                        }}
                        className="showMore"
                      />
                    )}

                    <ReactTooltip place="top" type="dark" effect="solid" />
                    <a className="separate"></a>
                    <a className="name">
                      {schueler.schuelerVorname} {schueler.schuelerNachname}
                    </a>
                    <a className="separate"></a>
                    {schueler.signed ? (
                      <FaPenFancy
                        data-tip="Unterschrieben"
                        className="signed"
                        onClick={() => setSigned(index + 1, false)}
                      />
                    ) : (
                      <FaPenFancy
                        data-tip="Nicht unterschrieben"
                        className="sign"
                        onClick={() => setSigned(index + 1, true)}
                      />
                    )}
                    <a className="separate"></a>
                    {schueler.verify ? (
                      <IoIosMail
                        data-tip="Akzeptiert"
                        className="mailAccepted"
                        onClick={() => getSchuelerByID(index + 1)}
                      />
                    ) : (
                      <IoIosMail
                        data-tip="Bestätigungsmail senden"
                        className="sendMail"
                        onClick={() => getSchuelerByID(index + 1)}
                      />
                    )}
                    <a className="separate"></a>
                    <MdPictureAsPdf
                      className="pdf"
                      data-tip="PDF anzeigen"
                      onClick={() => getPdf(index)}
                    />
                    <a className="separate"></a>
                    <button
                      disabled={!msvplus}
                      className="msvplus"
                      data-tip="MSVPlus"
                      onClick={() => nightwatch(index + 1)}
                    >
                      MSVPlus
                    </button>
                    <a className="separate"></a>
                    <FaPlus
                      className="remove"
                      data-tip="Schüler löschen"
                      onClick={() => deleteStudent(index + 1)}
                    />
                  </div>
                  {schueler.showMore ? (
                    <div className="daten">
                      <table style={{ width: "60%", margin: "20px" }}>
                        <tr>
                          <th>Vorname:</th>
                          <td>{schueler.Vorname}</td>
                        </tr>
                        <tr>
                          <th>Nachname:</th>
                          <td>{schueler.Nachname}</td>
                        </tr>
                        <tr>
                          <th>Telefon</th>
                          <td>Smith</td>
                        </tr>
                        <tr>
                          <th>Handy</th>
                          <td>Jackson</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>Smith</td>
                        </tr>
                        <tr>
                          <th>Stadt</th>
                          <td>Jackson</td>
                        </tr>
                        <tr>
                          <th>Straße</th>
                          <td>Smith</td>
                        </tr>
                        <tr>
                          <th>Notizen</th>
                          <td>Jackson</td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div>
      <button onClick={() => getSchueler()}>Hello</button>
      <button onClick={() => getPdf()}>PDF</button>
      <div>{showSchueler()}</div>

      <Modal
        visible={login.visible}
        width="400"
        height="300"
        effect="fadeInDown"
      >
        <div>
          <div className="modal">
            <input
              className="loginInput"
              type="text"
              name="username"
              placeholder="Nutzername"
              onChange={handleChange}
            />
            <input
              className="loginInput"
              type="password"
              name="password"
              placeholder="Passwort"
              onChange={handleChange}
            />
            <button
              onClick={() => {
                getSchueler();
              }}
              className="loginInput loginButton"
            >
              Anmelden
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default StudentList;
