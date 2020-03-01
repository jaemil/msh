import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class Gebuehren extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Gebühren</h2>
                <h3 className="r">Anmeldegebühren</h3>
                <div className ="kp">

                <Table dark>
                    <thead>
                        <tr>
                            <th style={{paddingLeft: "20px", padding: "10px 0px 0px 0px"}}><p style={{textAlign: "left", padding: "0px 0px 0px 20px"}}>Für jede Neuanmeldung erheben wir einmalig 5 € Anmeldegebühren.</p></th>
                        </tr>
                    </thead>
                </Table>

                </div>

                <h3 className="r">Unterrichtsgebühren</h3>
                <div className ="kp" >
                    <Table  dark>
                    <thead>
                        <tr>
                            <th style={{paddingLeft: "20px"}}>Kurs</th>
                            <th>Dauer</th>
                            <th>Gruppengröße</th>
                            <th>Monatsgebühr je Schüler</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>Instrumental- und Gesangsunterricht</td>
                            <td>Wö. 30 Min.</td>
                            <td>Einzel / 2er- / 3er Gruppe</td>
                            <td>69 € / 39 € / 33 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}} ></td>
                            <td>Wö. 45 Min.</td>
                            <td>Einzel / 2er- / 3er Gruppe</td>
                            <td>101 € / 57 € / 49 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>10er Karte</td>
                            <td>10 x 30 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>240 € / 140 € (Einzug über drei Monate)</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}></td>
                            <td>10 x 45 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>360 € / 210 € (Einzug über drei Monate)</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>Geschenk-Gutschein</td>
                            <td>1 x 30 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>25 € / 37 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>Frühes Musizieren</td>
                            <td>Wö. 45 Min.</td>
                            <td>3-5 Kinder</td>
                            <td>180 € pro Semester (Einmaliger Einzug)</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}></td>
                            <td>Wö. 60 Min.</td>
                            <td>Ab 6 Kinder</td>
                            <td>192 € pro Semester (Einmaliger Einzug)</td>
                        </tr>
                    </tbody>
                    </Table></div>

                <h3 className="r">Instrumenten-Leihgebühren</h3>
                <div className ="kp">
                <Table dark>
                    <thead>
                        <tr>
                            <th style={{paddingLeft: "20px"}}>Instrument</th>
                            <th>Monatliche Leihgebühr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>Klassische Gitarre (alle Größen):</td>
                            <td>8 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}} >E-Gitarre/Bass:</td>
                            <td>15 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}} >E-Gitarren-/Bassverstärker:</td>
                            <td>10 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>Keyboard:</td>
                            <td>15 €</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft: "20px"}}>E-Piano:</td>
                            <td>25 €</td>
                        </tr>
                    </tbody>
                </Table></div>
            </div>
        )
    }
}
