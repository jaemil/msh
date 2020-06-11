import React, { Component } from 'react'
import {Table} from "reactstrap"
import {FiMap} from "react-icons/fi"

export default class Unterrichtsorte extends Component {
    render() {
        return (
            <div>
                <h2 className="b">Unterrichtsorte</h2>
                <div className="blackContainer">
                <Table dark>
                <thead>
                    <tr style ={{fontSize: "25px"}}>
                        <th><a style ={{fontWeight: "normal"}}>Marktstraße 38, 73230 Kirchheim unter Teck</a></th>
                        <th><a href="https://www.google.com/maps?ll=48.647301,9.451152&z=18&t=m&hl=de&gl=DE&mapclient=embed&cid=9261458053759526257" target="_blank"><FiMap>Karte</FiMap></a></th>
                    </tr>
                    <tr style ={{fontSize: "25px"}}>
                        <th><a style ={{fontWeight: "normal"}}>Paulinenstraße 2, 73230 Kirchheim unter Teck (Schlagzeug Unterricht)</a></th>
                        <th><a href="https://goo.gl/maps/vUW8Dew1Rod4DAiJ8" target="_blank"><FiMap>Karte</FiMap></a></th>
                    </tr>
                    <tr style ={{fontSize: "25px"}}>
                        <th><a style ={{fontWeight: "normal"}}>Vordere Straße 48 (Altes Rathaus), 73266 Bissingen unter Teck</a></th>
                        <th><a href="https://goo.gl/maps/Y5ffFHdscFSCawjB9" target="_blank"><FiMap>Karte</FiMap></a></th>
                    </tr>
                </thead>
            </Table>
            </div>
            </div>
        )
    }
}
