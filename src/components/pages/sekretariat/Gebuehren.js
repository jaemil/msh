import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class Gebuehren extends Component {
    render() {
        return (
            <div>
                <h1>Gebühren</h1>
                Anmeldegebühren
                Für jede Neuanmeldung erheben wir einmalig 5 € Anmeldegebühren.

                Unterrichtsgebühren
                <Table dark>
                    <thead>
                        <tr>
                            <th>Kurz</th>
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
                            <td>@69 € / 39 € / 33 €</td>
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

                Instrumenten-Leihgebühren
                <Table dark bordered size="sm">
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
