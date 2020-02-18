import React, { Component } from 'react'
import Pdf from '../../../img/Ummeldeformular.pdf';

export default class Ummeldung extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Ummeldung</h2>
                <br />
                <p style={{textAlign: "center"}}>Für die Ummeldung einfach die beiligende PDF Datei ausfüllen und einfach per Email, Post oder persönlich vorbei bringen.</p>
                <p style={{ textAlign: "center" }}><a href={Pdf} target="_blank">Ummeldeformular</a></p>
            </div>
        )
    }
}
