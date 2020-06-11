import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
// import AnimatedButton from "react-animated-buttons";
// import Explosion from "react-explode/Boracay";
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
          {/* <AnimatedButton
            animationDuration={1}
            animationType="pulse"
            color="#181818"
            textColor="white"
          >
            Jetzt Anmelden
          </AnimatedButton> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
