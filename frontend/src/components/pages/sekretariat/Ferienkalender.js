import React, { Component } from 'react'
import Pdf from "../../../img/ferienplan1920.png"



export default class Ferienkalender extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Ferienkalender</h2><br/>
                <div className="blackContainer"><p>Unser Ferienkalender richtet sich nach den öffentlichen Schulen in Kirchheim.</p></div>
                <div className="blackContainer" style ={{margin: "80px"}}>
                <img width="100%" src={Pdf} />
            </div>
                
            </div>
        )
    }
}
