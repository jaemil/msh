import React, { Component } from 'react'


function Img_text(props)//Wird für Unterrichsfaecher.js verwendet um img + text auszugeben
{
    return (
        <div className="img_text_hover" style={{marginTop: "2%",  borderRadius: "10px"}}>
            <img className="UnterrichtsfächerImg" src={props.img} width="15%" /> <div className="UnterrichtsfächerText">{props.text}</div>
        </div>
    )
}

export default Img_text;