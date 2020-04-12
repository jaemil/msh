import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

function Info()
{
    return (
        <div>
            <h2 className = "g">Info's</h2>
            <div className ="blackContainer">
                <p style={{ fontWeight: "bold" }}>Corona-Krise</p>
                <p style={{ color: "#E85648", fontWeight: "bold", fontSize: "25px"}}>Wichtig!</p>
                <p style={{ color: "#E85648", fontWeight: "bold" }}>Aufgrund der aktuellen Lage werden und müssen wir den Schulbetrieb
                sicherheitshalber für die kommenden 3 Wochen bis einschließlich den
                Osterferien einstellen!</p>

                <p>Wir hoffen sehr, dass es nach den Osterferien in der Musikschule weitergehen kann
                und halten euch auf dem Laufenden.</p>

<br/>

                <p>Für diejenigen, die es nicht mehr aushalten können!</p>
                <Link to="/anmeldung"><p style={{ fontWeight: "bold" }}>Anmeldung</p></Link>
                <br />
                <p>Ferien und bewegliche Ferientage:</p>
                <Link to="/ferienkalender"><p style={{fontWeight: "bold"}}>Ferienkalender</p></Link>
                <br />
                <p style={{ fontWeight: "bold" }}>Habt ihr Fragen?</p>
                <p>Fon: 07021 – 482 797</p>
                <p>E - Mail: Info@musikschule-hopf.de</p >
            </div>
        </div>
    )
}

export default Info