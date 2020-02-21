import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class Gebuehren extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Gebühren</h2>
                <h3 className="r">Anmeldegebühren</h3>
                <p style={{textAlign: "center"}}>Für jede Neuanmeldung erheben wir einmalig 5 € Anmeldegebühren.</p>

                <h3 className="r">Unterrichtsgebühren</h3>
                    <Table  dark borderless>
                    <thead>
                        <tr>
                            <th>Kurs</th>
                            <th>Dauer</th>
                            <th>Gruppengröße</th>
                            <th>Monatsgebühr je Schüler</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Instrumental- und Gesangsunterricht</td>
                            <td>Wö. 30 Min.</td>
                            <td>Einzel / 2er- / 3er Gruppe</td>
                            <td>69 € / 39 € / 33 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wö. 45 Min.</td>
                            <td>Einzel / 2er- / 3er Gruppe</td>
                            <td>101 € / 57 € / 49 €</td>
                        </tr>
                        <tr>
                            <td>10er Karte</td>
                            <td>10 x 30 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>240 € / 140 € (Einzug über drei Monate)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10 x 45 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>360 € / 210 € (Einzug über drei Monate)</td>
                        </tr>
                        <tr>
                            <td>Geschenk-Gutschein</td>
                            <td>1 x 30 Min.</td>
                            <td>Einzel / 2er Gruppe</td>
                            <td>25 € / 37 €</td>
                        </tr>
                        <tr>
                            <td>Frühes Musizieren</td>
                            <td>Wö. 45 Min.</td>
                            <td>3-5 Kinder</td>
                            <td>180 € pro Semester (Einmaliger Einzug)</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wö. 60 Min.</td>
                            <td>Ab 6 Kinder</td>
                            <td>192 € pro Semester (Einmaliger Einzug)</td>
                        </tr>
                    </tbody>
                    </Table>

                <h3 className="r">Instrumenten-Leihgebühren</h3>
                <Table dark borderless>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Monatliche Leihgebühr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Klassische Gitarre (alle Größen):</td>
                            <td>8 €</td>
                        </tr>
                        <tr>
                            <td>E-Gitarre/Bass:</td>
                            <td>15 €</td>
                        </tr>
                        <tr>
                            <td>E-Gitarren-/Bassverstärker:</td>
                            <td>10 €</td>
                        </tr>
                        <tr>
                            <td>Keyboard:</td>
                            <td>15 €</td>
                        </tr>
                        <tr>
                            <td>E-Piano:</td>
                            <td>25 €</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
