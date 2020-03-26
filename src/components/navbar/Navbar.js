import React, { Component, useState } from 'react'
import css from '../../css/Navbar.css'

import {
    Link, Redirect 
} from "react-router-dom";

import { useHistory } from 'react-router-dom'

import Banner from "../../img/Banner.png"
import note from "../../img/note.png"


const _Navbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const [state, setState] = useState({
        greenFokus: true,
        redFokus: false,
        blueFokus: false,
        yellowFokus: false,
    })

    const [hover, setHover] = useState({
        greenHover: false,
        redHover: false,
        blueHover: false,
        yellowHover: false,
    })

    const toggle = () => setIsOpen(!isOpen);

    var green = {
        backgroundColor: "#3dc097",
        color: "rgb(0, 0, 0)",
        borderRadius: "16px",
        width: "100%"
    }

    var red = {
        backgroundColor: "#E85648",
        color: "rgb(0, 0, 0)",
        borderRadius: "16px",
        width: "100%"
    }

    var blue = {
        backgroundColor: "#52adbb",
        color: "rgb(0, 0, 0)",
        borderRadius: "16px",
        width: "100%"
    }

    var yellow = {
        backgroundColor: "#E9B041",
        color: "rgb(0, 0, 0)",
        borderRadius: "16px",
        width: "100%"
    }

    var font = {
        color: "rgb(0, 0, 0)"
    }

    var greenFont = {
        color: "#3dc097"
    }

    var blueFont = {
        color: "#52adbb"
    }

    var redFont = {
        color: "#E85648"
    }

    var yellowFont = {
        color: "#E9B041"
    }

    function handleClick(color)
    {
        switch(color){
            case "green":{
                setState({
                    greenFokus: true,
                    redFokus: false,
                    blueFokus: false,
                    yellowFokus: false,
                })
                break;
            }
            case "red":{
                setState({
                    greenFokus: false,
                    redFokus: true,
                    blueFokus: false,
                    yellowFokus: false,
                })
                break;
            }
            case "blue": {
                setState({
                    greenFokus: false,
                    redFokus: false,
                    blueFokus: true,
                    yellowFokus: false,
                })
                break;
            }
            case "yellow": {
                setState({
                    greenFokus: false,
                    redFokus: false,
                    blueFokus: false,
                    yellowFokus: true,
                })
                break;
            }
        }
    }

    function handleHover(color)
    {
        switch (color) {
            case "green": {
                setHover({
                    greenHover: true,
                    redHover: false,
                    blueHover: false,
                    yellowHover: false,
                })
                break;
            }
            case "red": {
                setHover({
                    greenHover: false,
                    redHover: true,
                    blueHover: false,
                    yellowHover: false,
                })
                break;
            }
            case "blue": {
                setHover({
                    greenHover: false,
                    redHover: false,
                    blueHover: true,
                    yellowHover: false,
                })
                break;
            }
            case "yellow": {
                setHover({
                    greenHover: false,
                    redHover: false,
                    blueHover: false,
                    yellowHover: true,
                })
                break;
            }
            case "": {
                setHover({
                    greenHover: false,
                    redHover: false,
                    blueHover: false,
                    yellowHover: false,
                })
                break;
            }
        }
    }

    let history = useHistory();
    function changeLink()
    {
        history.push("/kontakt");
        handleClick("yellow")
    }


    return (
        <div className="nav" style={{ display: "flex", flexWrap: "nowrap" }}>
            
            <div style={{ width:"30%"}}></div>
            <div className ="logoAnimation">
                <img className="logo" src={Banner}></img>
                <img className = "noteAnimation" src={note}></img>
            </div>
            <div className="innerNav">
            <ul>
                    <li><Link to="/"><h1 onMouseEnter={() => handleHover("green")} onMouseLeave={() => handleHover("")} style={hover.greenHover || state.greenFokus ? green : null} onClick={() => handleClick("green")}><font style={hover.greenHover || state.greenFokus ? font : greenFont}>INFORMATION</font></h1></Link></li>
                <li>

                        <a id="r" ><h1 onMouseEnter={() => handleHover("red")} onMouseLeave={() => handleHover("")} style={hover.redHover || state.redFokus ? red : null}><font style={hover.redHover || state.redFokus ? font : redFont}>SEKRETARIAT</font></h1></a>
                    <ul onMouseEnter={() => handleHover("red")} onMouseLeave={() => handleHover("")}>
                        <li><Link to="/buero"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">BÜRO</a></Link></li>
                        <li><Link to="/fragen_antworten"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">FRAGE-ANTWORT</a></Link></li>
                        <li><Link to="/gebuehren"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">GEBÜHREN</a></Link></li>
                        <li><Link to="/anmeldung"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">ANMELDUNG</a></Link></li>
                        <li><Link to="/ummeldung"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">UMMELDUNG</a></Link></li>
                        <li><Link to="/abmeldung"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">ABMELDUNG</a></Link></li>
                        <li><Link to="/ferienkalender"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">FERIENKALENDER</a></Link></li>
                        <li><Link to="/schulordnung"><a onClick={() => handleClick("red")} className="r" onclick="scrollWin()">SCHULORDNUNG</a></Link></li>
                    </ul>
                </li>
                    <li><a id="b" ><h1 onMouseEnter={() => handleHover("blue")} onMouseLeave={() => handleHover("")} style={hover.blueHover || state.blueFokus ? blue : null}><font style={hover.blueHover || state.blueFokus ? font : blueFont}>MUSIKSCHULE</font></h1></a>
                    <ul onMouseEnter={() => handleHover("blue")} onMouseLeave={() => handleHover("")}>
                        <li><Link to="/ueber_uns"><a onClick={() => handleClick("blue")} className="b" onclick="scrollWin()">ÜBER UNS</a></Link></li>
                        <li><Link to="/musikschul_team"><a onClick={() => handleClick("blue")} className="b" onclick="scrollWin()">MUSIKSCHUL-TEAM</a></Link></li>
                        <li><Link to="/unterrichtsfaecher"><a onClick={() => handleClick("blue")} className="b" onclick="scrollWin()">UNTERRICHTSFÄCHER</a></Link></li>
                        <li><Link to="/unterrichtsorte"><a onClick={() => handleClick("blue")} className="b" onclick="scrollWin()">UNTERRICHTSORTE</a></Link></li>
                        <li><Link to="/partner"><a onClick={() => handleClick("blue")} className="b" onclick="scrollWin()">PARTNER</a></Link></li>
                    </ul>
                </li>
                    <li><Link to="/kontakt"><h1 onMouseEnter={() => handleHover("yellow")} onMouseLeave={() => handleHover("")} style={hover.yellowHover || state.yellowFokus ? yellow : null} onClick={() => handleClick("yellow")}><font style={hover.yellowHover || state.yellowFokus ? font : yellowFont}>KONTAKT</font></h1></Link></li>
            </ul>

            </div>
            
            <div style={{ width: "31%" }}></div>
        </div>
    );
}

export default _Navbar;

