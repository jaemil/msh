import React, { Component } from 'react'
import { Table } from 'reactstrap';
import ImgRightTextLeft from "../ImgRightTextLeft"

import blankenhorn from "../../../img/Partner/blankenhorn.jpg"
import dvag from "../../../img/Partner/dvag.jpg"
import gitarrenbauer from "../../../img/Partner/gitarrenbauer.jpg"
import gropius from "../../../img/Partner/gropius.jpg"
import pianowerner from "../../../img/Partner/pianowerner.jpg"
import trommelmacher from "../../../img/Partner/trommelmacher.jpg"

export default class Partner extends Component {
    render() {
        return (
            <div >
                <h2 className="b">Partner</h2>
                <br />

                <div style={{ display: "flex", justifyContent: "center"}}>
                    <div className="textLeft">
                    <p>Klavierbau Blankenhorn</p>
                    <p>Klavierbau Blankenhorn</p>
                    <p>Klavierbau Blankenhorn</p>
                    <p>Klavierbau Blankenhorn</p>
                    <p>Klavierbau Blankenhorn</p>
                    </div>
                    <img className="imgRight" src={blankenhorn} /> 
                </div>
            </div>
        )
    }
}
