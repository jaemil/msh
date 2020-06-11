import React, { Component } from 'react'
import { HoverCard } from 'react-png-hovercard';

import blankenhorn from "../../../img/Partner/blankenhorn.png"
import dvag from "../../../img/Partner/dvag.jpg"
import gitarrenbauer from "../../../img/Partner/gitarrenbauer.png"
import gropius from "../../../img/Partner/gropius.png"
import pianowerner from "../../../img/Partner/pianowerner.png"
import trommelmacher from "../../../img/Partner/trommelmacher.png"
import findnlink from "../../../img/Partner/findnlink.svg"
import charly from "../../../img/Partner/charlybeat.png"
import TAA from "../../../img/Partner/TAA.png"

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardDeck
} from 'reactstrap';


export default class Partner extends Component {
    render() {
        return (
                <div >
                    <h2 className="b">Partner</h2>
                <div className="blackContainer" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

                    <HoverCard
                        front={
                            <div className="Front" className="partnerImgCenter">
                                <img
                                    width="80%"
                                    src={findnlink}
                                    alt=""
                                    style={{ objectFit: 'cover', }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <img
                                    width="90%"
                                    src={findnlink}
                                    alt=""
                                    style={{ objectFit: 'cover', padding: "50px 40px 40px 40px" }}
                                />
                                <p>Finde Mitglieder für deine Projekte</p>
                                <a href="http://www.findnlink.com/" target="_blank">www.findnlink.com</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                    />

                    <HoverCard
                        front={
                            <div className="Front">
                                <img
                                    width="100%"
                                    src={blankenhorn}
                                    alt=""
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style ={{textAlign: "center"}}>
                                <p style ={{fontSize: "30px", fontWeight: "bold",padding: "50px 20px 40px 20px"}}>Klavierbau Blankenhorn</p>
                                <p>Daniel Blankenhorn</p>
                                <a href="http://www.klavier-blankenhorn.de/">www.klavier-blankenhorn.de</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height= {300}
                        margin={10}
                    />

                    <HoverCard
                        front={
                            <div className="Front">
                                <img
                                    width="100%"
                                    src={gitarrenbauer}
                                    alt=""
                                    style={{  }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "30px", fontWeight: "bold", padding: "50px 30px 40px 30px" }}>Fernando Guitars</p>
                                <p>Fernando Durán</p>
                                <a href="https://www.facebook.com/fernando.guitars.7">www.facebook.com</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                    />

                    <HoverCard
                        front={
                            <div className="Front">
                                <img
                                    width="100%"
                                    src={gropius}
                                    alt=""
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "30px", fontWeight: "bold", padding: "50px 30px 40px 30px" }}>Gitarren-baumeister</p>
                                <p>Achim-Peter Gropius</p>
                                <a href="https://gropius.de/" target="_blank">www.gropius.de</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                        />


                    <HoverCard
                        front={
                            <div className="Front">
                                <img
                                    width="100%"
                                    src={pianowerner}
                                    alt=""
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "30px", fontWeight: "bold", padding: "50px 60px 40px 60px" }}>Piano Werner</p>
                                <p>Tobias Gaiser</p>
                                <a href="http://www.werner-pianohaus.de/" target="_blank">www.werner-pianohaus.de</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                    />

                    <HoverCard
                        front={
                            <div className="Front">
                                <img
                                    width="100%"
                                    src={trommelmacher}
                                    alt=""
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "30px", fontWeight: "bold", padding: "50px 20px 40px 20px" }}>Der Trommelmacher</p>
                                <p>Andreas Baumann</p>
                                <a href="http://www.der-trommelmacher.de/de/index.php" target="_blank">www.der-trommelmacher.de</a>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                    />

                    <HoverCard
                        front={
                            <div style={{ backgroundColor: "white" }} className="Front" className="partnerImgCenter" >
                                <img style={{}}
                                    width="100%"
                                    src={TAA}
                                    alt=""
                                    style={{ objectFit: 'cover', backgroundColor: "white" }}
                                />
                            </div>
                        }
                        back={
                            <div className="Back" style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "30px", fontWeight: "bold", padding: "50px 20px 40px 20px" }}>Tonaufnahme Anstalt</p>
                                <p>Tonstudio Göppingen</p>
                                <p><a href="http://xn--tonstudio-gppingen-n3b.de/" target="_blank">www.tonaufnahmeanstalt.de</a></p>
                            </div>
                        }
                        maxWidth={300}
                        animationSpeed={300}
                        height={300}
                        margin={10}
                    />
                    
                    </div>
                </div> 
        )
    }
}
