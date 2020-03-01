import React, { Component } from 'react'
import { Table } from 'reactstrap';
import Gallery from 'react-grid-gallery';

import Johannes from "../../../img/Lehrer/3_Johannes_05.jpg"
import Biggi from "../../../img/Lehrer/8_Biggi_08.jpg"

export default class Buero extends Component {
    render() {

        var IMAGES =
            [
                {
                    src: Biggi,
                    thumbnail: Biggi,
                    caption: "Biggi"
                },
            {
                src: Johannes,
                thumbnail: Johannes,
                caption: "Johannes"
            }
                
            ]

        return (
            <div>

            <Table>
            
            </Table>
                <h2 className="r">Büro</h2>
                <br />
                <div className="kp" style ={{overflow: "auto"}}>
                <img style ={{float: "left", width: "30%", display: "inline", paddingLeft: "20px", paddingRight: "40px", backgroundColor: "black"}} src = {Biggi}></img>
                <Table borderless dark style={{ width: "70%", paddingLeft: "120px"}}>
                                <tbody>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>Sekretärin:</td>
                                        <td>Birgit Ollhäuser</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Ist für euch da, wenn es um Bürokratie <br />(Formelles, Finanzen, Einzüge etc.)<br />oder um Informationen rund um die Musikschule geht.</td>
                                    </tr>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>Bürozeiten:</td>
                                        <td>Montag und Dienstag <br />9.00 Uhr - 15.00 Uhr. <br />In den Schulferien ist das Büro nur gelegentlich geöffnet. </td>
                                    </tr>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>Telefon:</td>
                                        <td>07021 – 482 797</td>
                                    </tr>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>E-Mail:</td>
                                        <td>info@musikschule-hopf.de</td>
                                    </tr>
                                </tbody>
                            </Table></div>

                            <div className = "kp" style= {{marginTop: "20px", overflow: "auto"}}>
                <img style ={{float: "right", width: "30%", display: "inline", paddingLeft: "20px", paddingRight: "0px", backgroundColor: "black"}} src = {Johannes}></img>
                            

                            <Table borderless dark style={{ width: "70%", paddingLeft: "120px" }}>
                                <tbody>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>Geschäftsführer:</td>
                                        <td>Johannes Hopf</td>
                                    </tr>
                                    <tr>
                                        <td className="r" style={{fontWeight: "bold"}}>Bürozeiten:</td>
                                        <td>Montag bis Donnerstag<br />Vormittags spontan oder nach Absprache.<br />Schnelle Kommunikation per Mail!!!</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Ist für euch da, wenn es um Informationen zum Unterricht <br />(Lehrkräfte/Lehrkonzepte), <br />Geschäftspartner-/ Patenschaften etc.<br /> und allgemeines über die Musikschule geht.</td>
                                    </tr>
                                </tbody>
                            </Table></div>
                

                
            </div>
        )
    }
}
