import React, { Component } from 'react'

import Gallery from "react-photo-gallery";


import A6_Vorne from "../../img/home/A6_Vorne.jpg"
import Flyer_Vorne1 from "../../img/home/Flyer_Vorne (1).jpg"
import Flyer_Vorne from "../../img/home/Flyer_Vorne.png"
import Flyer_Vorne2 from "../../img/home/Flyer_Vorne.jpg"
import Haupt_Flyer_aussen from "../../img/home/Haupt_Flyer_aussen.png"
import Hopf_Logo_mit_Slogan_klein from "../../img/home/Hopf_Logo_mit Slogan_klein.jpg"
import Musikschul_Gig_Vorne from "../../img/home/Musikschul-Gig_Vorne.jpg"
import Musikschul_Logo_alt from "../../img/home/Musikschul-Logo alt.png"
import Schnupperwoche_KH from "../../img/home/Schnupperwoche_KH.jpg"
import Show_Chor_WeihnachtsFlyer from "../../img/home/Show_Chor_WeihnachtsFlyer.png"
import sommer_flyer_a4 from "../../img/home/sommer flyer a4.jpg"
import Werbung_Hopf_Hochformat from "../../img/home/Werbung_Hopf_Hochformat.jpg"


function Home()
{
    const photos = [
        {
          src: A6_Vorne,
          width: 2,
          height: 3
        },
        {
          src: Flyer_Vorne1,
          width: 1,
          height: 1
        },
        {
          src: Flyer_Vorne,
          width: 3,
          height: 4
        },
        {
          src: Flyer_Vorne2,
          width: 3,
          height: 4
        },
        {
          src: Haupt_Flyer_aussen,
          width: 3,
          height: 4
        },
        {
          src: Hopf_Logo_mit_Slogan_klein,
          width: 4,
          height: 3
        },
        {
          src: Musikschul_Gig_Vorne,
          width: 3,
          height: 4
        },
        {
          src: Musikschul_Logo_alt,
          width: 4,
          height: 3
        },
        {
          src: Schnupperwoche_KH,
          width: 4,
          height: 3
        },
        {
          src: Show_Chor_WeihnachtsFlyer,
          width: 3,
          height: 4
        },
        {
          src: sommer_flyer_a4,
          width: 4,
          height: 3
        },
        {
          src: Werbung_Hopf_Hochformat,
          width: 4927,
          height: 1000
        },
        {
          src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
          width: 4,
          height: 3
        }
      ];

        return (
            <div>
                Hallo und schön, dass Du hier bist! <br></br>
                Info-Ticker: Die nächsten Ferien sind am 24. Februar 2020!<br/>

                <p style={{color: "white", fontSize:"40px", textAlign:"center"}}>15 Jahre Musikschule Hopf</p>

                <div style={{opacity: ".5"}}>
                <Gallery  photos={photos} /></div>
            </div>
        )
}


export default Home
