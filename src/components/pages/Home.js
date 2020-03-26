import React, { Component, useState } from 'react'
import Draggable from 'react-draggable';
import {
  Link
} from "react-router-dom";
import background from "../../img/transparent.png"

import junge from "../../img/home/junge_mit_gitarre.JPG"
import learn from "../../img/home/do_you_want_to_learn.jpg"
import circle from "../../img/home/circle.png"
function Home()
{
        return (
          <div>
            <div className="blackContainer2">
              

            </div>
            <div>
              <img className="homeImg" src={background} width="1150" height="600"></img></div>
            </div>
        )
}


export default Home
