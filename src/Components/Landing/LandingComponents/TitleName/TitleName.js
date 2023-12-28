import React from 'react'
import './TitleName.css'
import { useState, useEffect } from 'react';

export default function TitleName(props) {

    return (
        <>
            <div className={props.scroll >= 350 ? "animated-container" : "container"}>
                <span className="d">A</span>
                <span className="b">S</span>
                <span className="a">H</span>
                <span className="b">L</span>
                <span className="c">L</span>
                <span className="a">X</span>
                <span className="b">Y</span>
                <span className="d">Y</span>
            </div>
            <div className={props.scroll >= 350 ? "container animated-inside" : "container inside"}>
                <span className="d-inside inside-letter">a</span>
                <span className="c-inside inside-letter">s</span>
                <span className="a-inside inside-letter">h</span>
                <span className="b-inside inside-letter">l</span>
                <span className="c-inside inside-letter">l</span>
                <span className="a-inside inside-letter">x</span>
                <span className="b-inside inside-letter">y</span>
                <span className="d-inside inside-letter">y</span>
            </div>
        </>
    );

}
