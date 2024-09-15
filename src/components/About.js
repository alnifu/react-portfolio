import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/pfp.jpg';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profilePic} alt="iz me bruv" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </section>
  );
}

export default About;
