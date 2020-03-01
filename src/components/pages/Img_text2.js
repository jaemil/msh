import React, { Component } from 'react'


function Img_text2(props)
{
    return (
        <div>
            <img  src={props.img} width="25%" /> <div className = "BueroText">{props.text}</div>
        </div>
    )
}

export default Img_text2;