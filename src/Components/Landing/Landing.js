import React from 'react'
import './Landing.css' 
import TitleName from './LandingComponents/TitleName/TitleName.js'
import NavBar from '../NavBar/NavBar.js'
import DateToday from '../DateToday/DateToday.js'
import Quote from '../Quote/Quote.js'
import { useState, useEffect } from 'react';

export default function Landing(props) {
  


  return (
    <>
    <NavBar />
    <div className='title-name'><TitleName scroll={props.scroll} /></div>
    <div className={props.scroll >= 350 ? 'animated-greek-statue' : 'greek-statue'} style={{position: 'relative', display: 'flex', justifyContent: 'center'}}><img style={{height: '100vh', filter: 'brightness(0.6) contrast(180%) saturate(0)', zIndex: '-1'}} src='https://pngimg.com/d/sculpture_PNG64.png'/></div>
    <div className='circle-1'/>
    <div className='circle-2'/>
    <div className='date-today'><DateToday /></div>
    <div className='quote'><Quote /></div>
    </>
  )
}
