import React, { Component } from 'react'
import { Table } from 'reactstrap';
import Collapsible from 'react-collapsible';

export default class Gebuehren extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Gebühren</h2>
                
                <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Anmeldegebühren</div>}>
                    <div className="blackContainer">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th style={{ paddingLeft: "20px", padding: "10px 0px 0px 0px" }}><p style={{ textAlign: "left", padding: "0px 0px 0px 20px" }}>Für jede Neuanmeldung erheben wir einmalig 5 € Anmeldegebühren.</p></th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                </Collapsible>

            

                <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Unterrichtsgebühren</div>}>
                    <div className="blackContainer" >
                        <Table dark>
                            <thead>
                                <tr>
                                    <th style={{ paddingLeft: "20px" }}>Kurs</th>
                                    <th>Dauer</th>
                                    <th>Gruppengröße</th>
                                    <th>Monatsgebühr je Schüler</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>Unterricht</td>
                                    <td>Wö. 30 Min.</td>
                                    <td><a style={{ color: "#E85648"}}>Einzel</a> / 2er- / 3er Gruppe</td>
                                    <td><a style={{ color: "#E85648" }}>69 €</a> / 39 € / 33 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }} ></td>
                                    <td>Wö. 45 Min.</td>
                                    <td><a style={{ color: "#E85648" }}>Einzel</a> / 2er- / 3er Gruppe</td>
                                    <td><a style={{ color: "#E85648" }}>101 €</a> / 57 € / 49 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>10er Karte</td>
                                    <td>10 x 30 Min.</td>
                                    <td><a style={{ color: "#E85648" }}>Einzel</a> / 2er Gruppe</td>
                                    <td><a style={{ color: "#E85648" }}>240 €</a> / 140 € (Einzug über drei Monate)</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}></td>
                                    <td>10 x 45 Min.</td>
                                    <td><a style={{ color: "#E85648" }}>Einzel</a> / 2er Gruppe</td>
                                    <td><a style={{ color: "#E85648" }}>360 €</a> / 210 € (Einzug über drei Monate)</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>Geschenk-Gutschein</td>
                                    <td>1 x 30 Min.</td>
                                    <td><a style={{ color: "#E85648" }}>Einzel</a> / 2er Gruppe</td>
                                    <td><a style={{ color: "#E85648" }}>25 €</a> / 17 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>Frühes Musizieren</td>
                                    <td>Wö. 45 Min.</td>
                                    <td>3-5 Kinder</td>
                                    <td>180 € pro Semester (Einmaliger Einzug)</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}></td>
                                    <td>Wö. 60 Min.</td>
                                    <td>Ab 6 Kinder</td>
                                    <td>192 € pro Semester (Einmaliger Einzug)</td>
                                </tr>
                            </tbody>
                        </Table></div>
                </Collapsible>
                


                <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Instrumenten-Leihgebühren</div>}>
                    <div className="blackContainer">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th style={{ paddingLeft: "20px" }}>Instrument</th>
                                    <th>Monatliche Leihgebühr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>Klassische Gitarre (alle Größen):</td>
                                    <td>8 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }} >E-Gitarre/Bass:</td>
                                    <td>15 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }} >E-Gitarren-/Bassverstärker:</td>
                                    <td>10 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>Keyboard:</td>
                                    <td>15 €</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: "20px" }}>E-Piano:</td>
                                    <td>25 €</td>
                                </tr>
                            </tbody>
                        </Table></div>
                </Collapsible>
                
            </div>
        )
    }
}
