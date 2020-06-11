import React, { Component, useState } from 'react'
import Draggable from 'react-draggable';
import {
    Link
} from "react-router-dom";
import background from "../../img/transparent.png"

import junge from "../../img/home/junge_mit_gitarre.JPG"
import learn from "../../img/home/do_you_want_to_learn.jpg"
import circle from "../../img/home/circle.png"
function Home() {
    return (
        <div>
            <div className="blackContainer2">

                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 180, y: 100 }}
                    grid={[1, 1]}
                    zIndex={1000}
                    bounds="parent"
                >
                    <div className="handle gImg" style={{ opacity: "0.9", backgroundColor: "rgb(255, 255, 230)" }}>
                        <p className="text" style={{ fontSize: "50px", paddingBottom: "90px" }}>Hallo</p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 280, y: 50 }}
                    grid={[1, 1]}
                    zIndex={100}
                    bounds="parent"
                >
                    <div className="handle">
                        <img width="200" height="200" src={junge} style={{ borderRadius: "20px", pointerEvents: "none" }}></img>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 430, y: -320 }}
                    grid={[1, 1]}
                    zIndex={100}
                    bounds="parent"
                >
                    <div className="handle">
                        <img width="200" height="200" src={learn} style={{ borderRadius: "20px", pointerEvents: "none" }}></img>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 530, y: -400 }}
                    grid={[1, 1]}
                    zIndex={100}
                    bounds="parent"
                >
                    <div className="handle" style={{ opacity: "0.9", backgroundColor: "rgb(255, 255, 230)" }}>
                        <Link to="/anmeldung" style={{ color: "black" }}><p>Endlich</p> <p>Gitarren-</p><p>unterricht</p></Link>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 630, y: -460 }}
                    grid={[1, 1]}
                    zIndex={100}
                    bounds="parent"
                >
                    <div className="handle bImg" style={{ opacity: "0.9", backgroundColor: "rgb(255, 255, 230)" }}>
                        <p className="text"><Link to="/ferienkalender" style={{ color: "black" }}><p>Endlich</p> <p>Ferien!</p></Link></p>
                    </div>
                </Draggable>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 770, y: -830 }}
                    grid={[1, 1]}
                    zIndex={100}
                    bounds="parent"
                >
                    <div className="handle oImg" style={{ opacity: "0.9", backgroundColor: "rgb(233, 176, 65)" }}>
                        <p style={{ padding: "10px 10px 10px 10px" }} className="text"><p><p>Schnell</p> <p>anrufen!!!</p></p><p>07021 - </p> <p>482 797</p></p>
                    </div>
                </Draggable>
            </div>
            <div>
                <img className="homeImg" src={background} width="1150" height="600"></img></div>
        </div>
    )
}


export default Home
