import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import logo from "../../img/logo.png";
import banner from "../../img/Banner.png";

function Home() {
  return (
    <div>
      <div className="blackContainer ">
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            opacity: 0.1,
          }}
        >
          <img
            style={{
              backgroundColor: "black",
              width: "70%",
              marginTop: "50px",
            }}
            src={banner}
          ></img>
        </div>

        <div className="homeTextContainer">
          <p className="homeTextLetter">H</p>
          <p className="homeTextLetter">e</p>
          <p className="homeTextLetter">r</p>
          <p className="homeTextLetter">z</p>
          <p className="homeTextLetter">l</p>
          <p className="homeTextLetter">i</p>
          <p className="homeTextLetter">c</p>
          <p className="homeTextLetter">h</p>{" "}
          <p className="homeTextLetter">w</p>
          <p className="homeTextLetter">i</p>
          <p className="homeTextLetter">l</p>
          <p className="homeTextLetter">l</p>
          <p className="homeTextLetter">k</p>
          <p className="homeTextLetter">o</p>
          <p className="homeTextLetter">m</p>
          <p className="homeTextLetter">m</p>
          <p className="homeTextLetter">e</p>
          <p className="homeTextLetter">n</p>
          <p className="homeTextLetter">!</p>
        </div>

        <div className="centerText">
          <a className="logoText">Du möchtest </a>

          <TextLoop interval={1500}>
            <a className="logoText logoTextWraperG ">🎸 Gitarre</a>
            <a className="logoText logoTextWraperR">🥁 Schlagzeug</a>
            <a className="logoText logoTextWraperB">🎶 Flöte</a>
            <a className="logoText logoTextWraperO">🎸 Bass</a>
            <a className="logoText logoTextWraperR">🎤 Singen</a>
            <a className="logoText logoTextWraperB">🎹 Klavier</a>
          </TextLoop>

          <a className="logoText"> lernen ?</a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            margin: "30px 10px 30px 10px",
          }}
        >
          <Link to="anmeldung">
            <button
              style={{
                border: "0",
                color: "white",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "rgb(12,12,12)",
                fontWeight: "bold",
              }}
            >
              Jetzt Anmelden
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
