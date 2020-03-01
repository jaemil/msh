import React, { Component } from 'react'
import {Table} from "reactstrap"

import {FiMap} from "react-icons/fi"

export default class Kontakt extends Component {
    render() {
        return (
            <div>

            <h2 className = "o">Kontakt</h2>
            <div className ="kp" style={{marginBottom: "20px", marginBottom: "20px"}}>
        
                <Table dark>
                    <thead>
                        <tr style ={{fontSize: "25px", fontWeight: "normal"}}>
                            <th></th>
                            <th style ={{fontWeight: "normal"}}>Musikschule Hopf</th>
                            <th></th>
                        </tr>
                        <tr style ={{fontSize: "25px"}}>
                            <th><a style={{padding: "0px 0px 0px 20px" ,color: "#E9B041", }}>Adresse:</a></th>
                            <th><a style ={{fontWeight: "normal"}}>Marktstraße 38, 73230 Kirchheim unter Teck</a></th>
                            <th><a href="https://www.google.com/maps?ll=48.647301,9.451152&z=18&t=m&hl=de&gl=DE&mapclient=embed&cid=9261458053759526257" target="_blank"><FiMap>Karte</FiMap></a></th>
                        </tr>
                        <tr style ={{fontSize: "25px"}}>
                            <th><a style={{padding: "0px 0px 0px 20px",color: "#E9B041", }}>Telefon:</a></th>
                            <th><a style ={{fontWeight: "normal"}}>07021 - 482 797</a></th>
                            <th></th>
                        </tr>
                        <tr style ={{fontSize: "25px"}}>
                            <th><a style={{padding: "0px 0px 0px 20px" ,color: "#E9B041", }}>E-Mail:</a></th>
                            <th><a style ={{fontWeight: "normal"}}>info@musikschule-hopf.de</a></th>
                            <th></th>
                        </tr>
                    </thead>
                </Table>

            </div>
            </div>
        )
    }
}
