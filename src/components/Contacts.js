import React, { useState } from 'react';
import '../styles/Contacts.css';

import imageform from '../assets/form.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Your Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send</button>
        </form>
        <img src={imageform} alt="Contact Image" />
      </div>
    </section>
  );
}

export default Contact;
