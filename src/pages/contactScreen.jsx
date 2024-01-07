import React from 'react';
import '../css/contact.css';

const ContactScreen = () => {
  return (
    <div className="contact-container container">
      <h1>Contact Information</h1>

      <div className="contact-info">
        <div className="info-item">
          <i className="bi bi-envelope"></i>
          <p>Email: contact@example.com</p>
        </div>

        <div className="info-item">
          <i className="bi bi-telephone"></i>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="info-item formText">
          <i className="bi bi-geo-alt"></i>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
