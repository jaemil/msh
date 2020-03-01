import React, { Component } from 'react'

import Andreas from "../../img/Lehrer2/Andreas_01.jpg"
import Davide from "../../img/Lehrer2/Davide_02.jpg"
import Felix from "../../img/Lehrer2/Felix_02.jpg"
import Hannes from "../../img/Lehrer2/Hannes_03.jpg"
import Heike from "../../img/Lehrer2/Heike_06.jpg"
import Johannes from "../../img/Lehrer2/Johannes_12.jpg"
import Josua from "../../img/Lehrer2/Josua_04.jpg"
import Sarah from "../../img/Lehrer2/Sarah_01.jpg"
import Thomas from "../../img/Lehrer2/Thomas_06.jpg"
import Timo from "../../img/Lehrer2/Timo_02.jpg"
import Wolle from "../../img/Lehrer2/Wolle_02.jpg"
import Yvonne from "../../img/Lehrer2/Yvonne_05.jpg"

import {
    Link
} from "react-router-dom";


export default class Footer extends Component {
    render() {
        

        return (
            <div className="footer" className="main">
            <div className="kp">
                <div style={{display: "flex", justifyContent: "center", backgroundColor: "black", padding: "0% 20% 0% 20%"}}>
                <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Felix} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%", height: "60%"}} width= "100px" height= "150px" src={Davide} ></img>
                    <img style={{maxWidth: "100%", width:"8.5%", height: "60%"}} width= "100px" height= "150px" src={Andreas}  ></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Thomas} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Heike} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Timo}  width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Josua} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Sarah} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Hannes} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Johannes} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Wolle} width= "100px" height= "150px"></img>
                    <img style={{maxWidth: "100%", width:"8.5%",height: "60%"}} src={Yvonne} width= "100px" height= "150px"></img>
                </div>
                <p style={{textAlign: "center", padding: "50px 0px 20px 0px"}}><a style={{margin:"0px 10px 0px 10px"}}>© 2020 Musikschule Hopf</a>·
                <Link to="/impressum" style={{}}><a style={{margin:"0px 10px 0px 10px", textDecoration: "none"}}>Impressum</a></Link>·
                <Link to="/datenschutz" style={{textDecoration: "none"}}><a style={{margin:"0px 10px 0px 10px", textDecoration: "none"}}>Datenschutz</a></Link></p></div>
            </div>
        )
    }
}
