import React, { Component } from 'react'
import Pdf from "../../../img/ferienplan1920.png"

export default class Ferienkalender extends Component {
    render() {
        return (
            <div>
                <h2 className="r">Ferienkalender</h2><br/>
                <p style={{textAlign: "center"}}>Unser Ferienkalender richtet sich nach den öffentlichen Schulen in Kirchheim.</p>
                <img width="100%" src={Pdf} />
            </div>
        )
    }
}
