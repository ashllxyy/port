import React from 'react'
import { useState, useEffect } from 'react';
import Landing from '../Landing/Landing';

export default function Viewport() {
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollDistance(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
  return (
    <div className='viewport'>
      <Landing scrollDistance={scrollDistance} />
    </div>
  )
}
