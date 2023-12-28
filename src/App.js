import './App.css';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Landing from './Components/Landing/Landing.js';
import { useState, useEffect } from 'react';

function App() {
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
    <div className="App">
      <Landing scroll={scrollDistance}/>
      {/* <AboutMe scroll={scrollDistance}/> */}
    </div>
  );
}

export default App;
