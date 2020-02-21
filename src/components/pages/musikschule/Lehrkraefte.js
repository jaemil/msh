import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';

import Josua from "../../../img/Lehrer/0_Josua_06.jpg"
import Sean from "../../../img/Lehrer/1_Sean_06.jpg"
import Sofia from "../../../img/Lehrer/2_Sofia_04.jpg"
import Johannes from "../../../img/Lehrer/3_Johannes_05.jpg"
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

export default class Lehrkraefte extends Component {

    render() {

        var IMAGES =
            [{
                src: Josua,
                thumbnail: Josua,
                caption: "Josua"
            },
            {
                src: Sean,
                thumbnail: Sean,
                caption: "Sean"
            },
            {
                src: Sofia,
                thumbnail: Sofia,
                caption: "Sofia"
            }, 
            {
                src: Johannes,
                thumbnail: Johannes,
                caption: "Johannes"
            },
            {
                src: Davide,
                thumbnail: Davide,
                caption: "Davide"
            }, 
            {
                src: Wolle,
                thumbnail: Wolle,
                caption: "Wolle"
            },
            {
                src: Heike,
                thumbnail: Heike,
                caption: "Heike"
            }, 
            {
                src: Andreas,
                thumbnail: Andreas,
                caption: "Andreas"
            },
            {
                src: Timo,
                thumbnail: Timo,
                caption: "Timo"
            },
            {
                src: Yvonne,
                thumbnail: Yvonne,
                caption: "Yvonne"
            },
            {
                src: Hannes,
                thumbnail: Hannes,
                caption: "Hannes"
            }, 
            {
                src: Sarah,
                thumbnail: Sarah,
                caption: "Sarah"
            },
            {
                src: Thomas,
                thumbnail: Thomas,
                caption: "Thomas"
            }, 
            {
                src: Felix,
                thumbnail: Felix,
                caption: "Felix"
            },
        ]

        return (
            <div  >
                
                    <h2 className = "b">Lehrkräfte</h2>
                <div className='gallery' >
                
                    <Gallery margin={2}  images={IMAGES} backdropClosesModal={true} showImageCount={false} enableImageSelection={false} thumbnailWidth={250} thumbnailHeight={375} rowHeight={500}/>
                </div>
            </div>
        )
    }
}
