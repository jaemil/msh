import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import logo from "../../img/logo.png";

function Home() {
  return (
    <div>
      {/* <Explosion size="400" delay={0} repeatDelay={0} repeat={5} />; */}
      <div className="blackContainer ">
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              backgroundColor: "black",
              width: "70%",
              marginBottom: "50px",
              marginTop: "50px",
            }}
            src={logo}
          ></img>
        </div>

        <div className="centerText">
          <a className="logoText">Du möchtest </a>

          <TextLoop interval={1500}>
            <a className="logoText logoTextWraperG ">🎸 Gitarre</a>
            <a className="logoText logoTextWraperR">🥁 Schlagzeug</a>
            <a className="logoText logoTextWraperB">🎶 Flöte</a>
            <a className="logoText logoTextWraperO">🎸 Bass</a>
            <a className="logoText logoTextWraperR">🎤 Gesang</a>
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
            <button>Jetzt Anmelden</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
