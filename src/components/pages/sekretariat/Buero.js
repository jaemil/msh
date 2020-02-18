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
                <h2 className="r">Büro</h2>
                <br />

                



                


                <Table dark borderless style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td><Table borderless dark style={{ width: "100%", marginLeft: "90px" }}>
                                <tbody>
                                    <tr style={{ height: "50px" }}>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Sekretärin:</td>
                                        <td>Birgit Ollhäuser</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Ist für euch da, wenn es um Bürokratie (Formelles, Finanzen, Einzüge etc.)<br />oder um Informationen rund um die Musikschule geht.</td>
                                    </tr>
                                    <tr>
                                        <td>Bürozeiten:</td>
                                        <td>Montag und Dienstag <br />9.00 Uhr - 15.00 Uhr. <br />In den Schulferien ist das Büro nur gelegentlich geöffnet. </td>
                                    </tr>
                                    <tr>
                                        <td>Telefon:</td>
                                        <td>07021 – 482 797</td>
                                    </tr>
                                    <tr>
                                        <td>E-Mail:</td>
                                        <td>info@musikschule-hopf.de</td>
                                    </tr>
                                    <tr style = {{height: "200px"}}>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Geschäftsführer:</td>
                                        <td>Johannes Hopf</td>
                                    </tr>
                                    <tr>
                                        <td>Bürozeiten:</td>
                                        <td>Montag bis Donnerstag<br />Vormittags spontan oder nach Absprache.<br />Schnelle Kommunikation per Mail!!!</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Ist für euch da, wenn es um Informationen zum Unterricht (Lehrkräfte/Lehrkonzepte), <br />Geschäftspartner-/ Patenschaften etc.<br /> und allgemeines über die Musikschule geht.</td>
                                    </tr>

                                </tbody>
                            </Table></td>
                            <td><Table dark style={{ width: "100%", marginLeft: "90px", marginTop: "-30px" }}>
                                <tbody>
                                    <tr>
                                        <Gallery  images={IMAGES} backdropClosesModal={true} showImageCount={false} enableImageSelection={false} thumbnailWidth={250} thumbnailHeight={375} rowHeight={500} />
                                    </tr>
                                </tbody>
                            </Table></td>
                        </tr>
                    </tbody>
                </Table>
                
                

                
            </div>
        )
    }
}
