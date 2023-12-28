import React from 'react'
import './AboutMe.css'

export default function AboutMe(props) {
  return (
    <div className={props.scroll < 350 ? 'about-me-animated' : 'about-me'}>
        <div className='container'>
            <h1> Hi there! </h1>
            <h2> I'm Arunesh Unnithan, a Full-Stack Developer based in Tiruchirappalli, TN. </h2>
        </div>
    </div>
  )
}
