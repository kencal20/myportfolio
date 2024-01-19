import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

const ContactScreen = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xc0z5nb",
        "template_lq454ri",
        form.current,
        "k60Bc6ThjyTBNMXji"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" id="email" required />
          <label>Message</label>
          <textarea name="message" id="message" rows="4" required />
          <br />
          <input type="submit" value="Send" className=" btn btn-success" />
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
