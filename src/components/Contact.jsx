// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact section">
      <div className="contact-container">
        {/* LEFT: Big vertical title (kept as normal text stacked) */}
        <div className="contact-title">
          <h2>Get In<br />Touch</h2>
        </div>

        {/* MIDDLE: Info card */}
        <div className="contact-info">
          <h3>Let's work together!</h3>
          <p>I'm always interested in new opportunities and projects.</p>

          <div className="contact-details">
            <p>📧 <a href="mailto:naitikdubey213@gmail.com">naitikdubey213@gmail.com</a></p>
            <p>📱 +91 8303494737</p>
            <p>📍 Uttar Pradesh, India</p>
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
