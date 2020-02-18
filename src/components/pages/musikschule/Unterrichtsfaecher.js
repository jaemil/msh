import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import { Table } from 'reactstrap';

import gitarre from "../../../img/Icons/acoustic-guitar.svg"
import bass from "../../../img/Icons/bass-guitar.svg"
import drums from "../../../img/Icons/drums.svg"
import flute from "../../../img/Icons/flute.svg"
import karaoke from "../../../img/Icons/karaoke.svg"
import piano from "../../../img/Icons/piano.svg"


import Img_text from "../Img_text"

export default class Unterrichtsfaecher extends Component {
    render() {
        return (
            <div>
                <h2 className="b">Unterrichtsfächer</h2>
                <Collapsible trigger={<Img_text img={bass} text="E-Bass" />} open="true">
                    <h3 style={{ backgroundColor: "transparent" }}>E-Bass (ab 4. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Der E-Bass ist ein typisches Bandinstrument, darum wird im Unterricht sehr viel Wert auf das Verständnis im Zusammenspiel mit anderen Instrumenten, vor allem das Schlagzeug, gelegt. Der Basser bildet das Sound- und das Groove-Fundament einer Band, dementsprechend wird unterrichtet.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless>
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hannes Gottwald</td>
                                <td>Mo Kirchheim</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
                <Collapsible trigger={<Img_text img={flute} text="Flöte" />}>
                    <h3 style={{ backgroundColor: "transparent" }}>Blockflöte</h3>
                    <h3 style={{ backgroundColor: "transparent" }}>Querflöte (ab 8 Jahre)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Die Schüler/innen werden je nach Alter und Spielentwicklung gefördert. Durch die Querflötenschulen werden Stücke aus verschiedenen Epochen gespielt und besprochen. Genauso werden kleine Einblicke in die Theorie gegeben. Der Anfangsunterricht ist besonders empfehlenswert, da eine autodidaktisch falsch eingeübte Ansatztechnik nur schwer zu korrigieren ist.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless>
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sofia Neroladakis</td>
                                <td>Mi + Do Kirchheim, Fr Bissingen</td>
                            </tr>
                            <tr>
                                <td>Yvonne Denecke</td>
                                <td>Di Bissingen, Mi und Do Kirchheim</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
                <Collapsible trigger={<Img_text img={karaoke} text="Gesang" />}>
                    <h3 style={{ backgroundColor: "transparent" }}>Gesang (ab 4. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Der Unterrichtsinhalt ist sehr breit gefächert und fängt bei der Stimm- und Gehörbildung an, um eine solide Gesangstechnik zu erlernen. Das Erarbeiten, Interpretieren und Improvisieren von Songs steht ebenso im Fokus, wie das Singen mit Mikrofon und die Bühnenpräsentation.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless>
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sarah Abdallah</td>
                                <td>(Do Kirchheim)</td>
                            </tr>
                            <tr>
                                <td>Sofia Neroladakis</td>
                                <td>Mi + Do Kirchheim, Fr Bissingen</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
                <Collapsible trigger={<Img_text img={gitarre} text="Gitarre" />}>
                    <h3 style={{ backgroundColor: "transparent" }}>Klassische Gitarre (ab 1. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Anhand einer eigens erstellten Fibel wird das kleine ABC des Gitarrenspiels erlernt. Jeder Finger wird einzeln geschult und trainiert. Gleichzeitig erlernt man das Notenspiel.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Rhythmusgitarre (ab 4. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Hier stehen Rhythmen und Akkorde im Mittelpunkt des Geschehens. Gruppenunterricht ist sehr gut möglich, doch je kleiner die Teilnehmerzahl, desto effektiver ist der Unterricht. Viele bevorzugen den Klang einer Westerngitarre, die durchdringender und mehr höhenlastiger klingt als eine Nylongitarre, allerdings durch die Stahlsaiten vor allem für Anfänger schwieriger zu spielen ist.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>E-Gitarre (ab 4. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Das perfekte Einsteiger-Instrument für Rock'n Roller. Kleine Korrektur zur üblichen Meinung, es ist überhaupt nicht notwendig irgendwelche Vorkenntnisse zu haben, denn das Spielverhalten auf der E-Gitarre ist komplett anders als bei anderen Gitarren. Selbst das Notenlesen hat in erster Linie keine besondere Bedeutung beim E-Gitarrenspiel. Powerchords, Scales, Riffs und Licks sind die eingängigen Schlagwörter eines jeden E-Gitarristen.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless >
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Felix Berchthold</td>
                                <td>Mo + Mi Kirchheim, Do Bissingen</td>
                            </tr>
                            <tr>
                                <td>Seán Carew</td>
                                <td>Do + Fr Bissingen</td>
                            </tr>
                            <tr>
                                <td>Wolfgang Franz</td>
                                <td>Mi Bissingen, Mo, Do + Fr Kirchheim</td>
                            </tr>
                            <tr>
                                <td>Josua Lechowski</td>
                                <td>Mo Bissingen</td>
                            </tr>
                            <tr>
                                <td>Johannes Hopf</td>
                                <td>Mo - Mi Kirchheim, Do + Fr Bissingen</td>
                            </tr>
                            <tr>
                                <td>Hannes Gottwald</td>
                                <td>Mo Kirchheim</td>
                            </tr>
                            <tr>
                                <td>Andreas Rieker</td>
                                <td>(Do Kirchheim)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
                <Collapsible trigger={<Img_text img={piano} text="Klavier" />}>
                    <h3 style={{ backgroundColor: "transparent" }}>Klavier (ab 1. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Der Unterricht wendet sich an Anfänger und Fortgeschrittene und findet ausschließlich einzeln statt. An gängigen Klavierfibeln für Anfänger, Stücken aus eigenen Konzepten, aber auch Stücken aus dem Popularbereich werden die Spieltechnik und der musikalische Ausdruck am Klavier geschult. Song- oder Stückwünsche werden nach Möglichkeit integriert und dem aktuellen Stand des Schülers angepasst.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>E-Piano (ab 1. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Das elektronische Piano ist ein Musikinstrument, das ursprünglich als preiswerter und transportabler Ersatz für echte Pianos gebaut wurde. Digitalpianos sind unter Konzertpianisten zwar umstritten, moderne und hochwertigere Instrumente finden jedoch bei ihnen mittlerweile immer mehr Anhänger. Aus der U-Musik sind E-Pianos nicht mehr wegzudenken. Das Spielverhalten und das Erlernen ist wie beim Klavier.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Keyboard (ab 1. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Der Unterricht ist auf Klavier-/Keyboardschulen aufgebaut. Ziel ist zum einen das beidhändige, gleichmäßige Tastenspiel, zum anderen das Spiel mit den typischen Begleitmöglichkeiten eines Keyboards. Die gewichteten Tasten fehlen am Keyboard, deshalb wird es für einen Keyboarder später schwierig sein, dynamisch Klavier spielen zu können.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless>
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;Thomas Bender</td>
                                <td>Mo, Di + Fr Kirchheim</td>
                            </tr>
                            <tr>
                                <td>&nbsp;Yvonne Denecke</td>
                                <td>Di Bissingen, Mi + Do Kirchheim</td>
                            </tr>
                            <tr>
                                <td>&nbsp;Johannes Hopf</td>
                                <td>Mo - Mi Kirchheim und Do + Fr Bissingen</td>
                            </tr>
                            <tr>
                                <td>&nbsp;Heike Wagner</td>
                                <td>Di und Do Kirchheim</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
                <Collapsible trigger={<Img_text img={drums} text="Schlagzeug" />}>
                    <h3 style={{ backgroundColor: "transparent" }}>Schlagzeug (ab 1. Klasse)</h3>
                    <p style={{ backgroundColor: "transparent", padding: "20px 20px 20px 20px" }}>Der Weg geht von der täglichen Trockenübung bis zum gesamten Seteinsatz. Das Metronom wird zum guten Freund eines jeden Schlagzeugers. Anhand von Playalongs lernen die Kinder, wie in einer Band Musik gemacht wird. Was tun, wenn kein Schlagzeug in die Wohnung passt? Percussion-Instrumente, wie Bongo, Cajon oder Cembe sind hervorragende Alternativen.</p>
                    <h3 style={{ backgroundColor: "transparent" }}>Lehrer</h3>
                    <Table dark borderless>
                        <thead>
                            <tr>
                                <th>Lehrer</th>
                                <th>Unterrichtszeiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Josua Lechowski</td>
                                <td>Mo Bissingen (Cajon)</td>
                            </tr>
                            <tr>
                                <td>Timo Hopf</td>
                                <td>(Mo - Do Kirchheim)</td>
                            </tr>
                            <tr>
                                <td>Johannes Hopf</td>
                                <td>Mo - Mi Kirchheim Do + Fr Bissingen (Darbuka, Cajon)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapsible>
            </div>
        )
    }
}
