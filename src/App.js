import React from 'react';
import NavBar from './components/NavBar';
import Introduction from './components/Intro';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts.js';
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <div className="container">
        <AboutMe />
        <Projects />
        <Contact />
      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        &uarr;
      </button>
    </div>
  );
}

export default App;
