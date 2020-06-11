import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';

import Josua from "../../../img/Lehrer/0_Josua_06.jpg"
import Sean from "../../../img/Lehrer/1_Sean_06.jpg"
import Sofia from "../../../img/Lehrer/2_Sofia_04.jpg"
import Johannes from "../../../img/Lehrer/Johannes_11.jpg"
import Davide from "../../../img/Lehrer/4_Davide_06.jpg"
import Wolle from "../../../img/Lehrer/5_Wolle_04.jpg"
import Heike from "../../../img/Lehrer/6_Heike_02.jpg"
import Andreas from "../../../img/Lehrer/7_Andreas_05.jpg"
import Biggi from "../../../img/Lehrer/8_Biggi_08.jpg"
import Timo from "../../../img/Lehrer/9_Timo_06.jpg"
import Yvonne from "../../../img/Lehrer/10_Yvonne_03.jpg"
import Hannes from "../../../img/Lehrer/11_Hannes_04.jpg"
import Sarah from "../../../img/Lehrer/12_Sarah_03.jpg"
import Thomas from "../../../img/Lehrer/13_Thomas_02.jpg"
import Felix from "../../../img/Lehrer/14_Felix_05.jpg"


import { FaInstagram, FaHome } from 'react-icons/fa';


export default class Lehrkraefte extends Component {

    render() {

        var IMAGES =
            [{
                src: Josua,
                thumbnail: Josua,
                vorname: "Josua",
                nachname: "Lechowski",
                faecher1: "Schlagzeug",
                faecher2: "Gitarre", 
                faecher3: "Cajon"
            },
            {
                src: Sean,
                thumbnail: Sean,
                vorname: "Sean",
                nachname: "Carew",
                faecher1: "Gitarre"
            },
            {
                src: Sofia,
                thumbnail: Sofia,
                vorname: "Sofia",
                nachname: "Neroladakis",
                faecher1: "Gesang",
                faecher2:"Blockflöte",
                faecher3:"Querflöte"
            }, 
            {
                src: Johannes,
                thumbnail: Johannes,
                vorname: "Johannes",
                nachname: "Hopf",
                faecher1: "Gitarre",
                faecher2: "Cajon",
                faecher3: "Darbuka",
                faecher4: "Klavier",
                link1: "http://swingology.eu/"
            },
            {
                src: Davide,
                thumbnail: Davide,
                vorname: "Davide",
                nachname: "Petrocca",
                faecher1: "Gitarre",
                link1: "https://www.reverbnation.com/davidepetrocca",
                link2: "https://www.youtube.com/user/galileojazz"
            }, 
            {
                src: Wolle,
                thumbnail: Wolle,
                vorname: "Wolfgang",
                nachname: "Franz",
                faecher1: "Gitarre",
                link1: "https://www.franzundmuenster.de/",
                link2: "https://benjamingulz.wixsite.com/niftymusic",
                link3: "https://www.eventpeppers.com/de/zweiundklang"
            },
            {
                src: Heike,
                thumbnail: Heike,
                vorname: "Heike",
                nachname: "Wagner",
                faecher1: "Klavier"
            }, 
            {
                src: Andreas,
                thumbnail: Andreas,
                vorname: "Andreas",
                nachname: "Rieker",
                faecher1: "Gitarre",
                link1: "https://mycooperstape.com/",
                link2: "https://www.splash-band-stuttgart.de/"
            },
            {
                src: Timo,
                thumbnail: Timo,
                vorname: "Timo",
                nachname: "Hopf",
                faecher1: "Schlagzeug"
            },
            {
                src: Yvonne,
                thumbnail: Yvonne,
                vorname: "Yvonne",
                nachname: "Denecke",
                faecher1: "Frühes Musizieren",
                faecher2: "Blockflöte",
                faecher3: "Klavier"
            },
            {
                src: Hannes,
                thumbnail: Hannes,
                vorname: "Hannes",
                nachname: "Gottwald",
                faecher1: "E-Bass",
                faecher2: "Gitarre",
                link1: "https://xn--schnbergsounds-xpb.de/",
                instagram: "https://www.instagram.com/hannesgottwald/"
            }, 
            {
                src: Sarah,
                thumbnail: Sarah,
                vorname: "Sarah",
                nachname: "Abdallah",
                faecher1: "Gesang",
                link1: "https://www.schmid-schneider.de",
                link2: "https://www.dropzone-band.de"
            },
            {
                src: Thomas,
                thumbnail: Thomas,
                vorname: "Thomas",
                nachname: "Bender",
                faecher1: "Klavier"
            }, 
            {
                src: Felix,
                thumbnail: Felix,
                vorname: "Felix",
                nachname: "Berchtold",
                faecher1: "Gitarre"
            },
        ]

        const vornameStyle = {
            backgroundColor: "transparent", //border
            textAlign: "center",
            fontSize: "25px",
            width: "100%",
            color: "white",
            padding: "60px 5px 0px 5px"
        };

        var images =
                IMAGES.map((i) => {
                    i.customOverlay = (
                            <div style={vornameStyle}>
                            <div style={{fontWeight: "bold"}}>{i.vorname}</div>
                            <div style={{fontWeight: "bold"}}>{i.nachname}</div>

                            <div style ={{textAlign: "center", fontSize: "20px", paddingTop: "20px"}}>
                            {i.faecher1 != null ? (
                                <div>{i.faecher1}</div>
                              ) : (
                                <a></a>
                              )}

                              {i.faecher2 != null ? (
                                <div>{i.faecher2}</div>
                              ) : (
                                <a></a>
                              )}

                              {i.faecher3 != null ? (
                                <div>{i.faecher3}</div>
                              ) : (
                                <a></a>
                              )}

                              {i.faecher4 != null ? (
                                <div>{i.faecher4}</div>
                              ) : (
                                <a></a>
                              )}
                              </div>

                            <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
                            {i.link1 != null ? (
                                <a href={i.link1} target="_blank" style={{zIndex: "0", pointerEvents: "auto", padding: "5px"}}><FaHome></FaHome></a>
                              ) : (
                                <a></a>
                              )}

                              {i.link2 != null ? (
                                <a href={i.link2} target="_blank" style={{zIndex: "0", pointerEvents: "auto", padding: "5px"}}><FaHome></FaHome></a>
                              ) : (
                                <a></a>
                              )}

                            {i.link3 != null ? (
                              <a href={i.link3} target="_blank" style={{ zIndex: "0", pointerEvents: "auto", padding: "5px" }}><FaHome></FaHome></a>
                            ) : (
                                <a></a>
                              )}

                              {i.instagram != null ? (
                            <a href={i.instagram} target="_blank" style={{ zIndex: "0", pointerEvents: "auto", padding: "5px" }}><FaInstagram></FaInstagram></a>
                              ) : (
                                <a></a>
                              )}
                              </div>
                            {i.hasOwnProperty('tags')}
                        </div>);
                    return i;
        });

                

        return (
            <div  >
                
                    <h2 className = "b" style ={{paddingLeft: "70px"}}>Musikschul-Team</h2>
                <div className='gallery' >
                
                    <Gallery margin={2}  images={IMAGES} backdropClosesModal={true} showImageCount={false} enableImageSelection={false} thumbnailWidth={200} thumbnailHeight={375} rowHeight={350}/>
                </div>
                <div style={{width: "0px", height: "1500px"}}></div>
            </div>
        )
    }
}
