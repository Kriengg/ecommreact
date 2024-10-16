// src/components/AboutUs.js
import React from 'react';
import '../css/AboutUs.css'; // Import the CSS file

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to our company! We are dedicated to providing the best products and services to our customers. Our mission is to deliver high-quality products that meet the needs and expectations of our clients. We believe in innovation, integrity, and customer satisfaction.
      </p>
      <p>
        Our team is composed of experienced professionals who are passionate about what they do. We continuously strive to improve and innovate, ensuring that we stay ahead in the industry. Thank you for choosing us as your trusted partner.
      </p>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Address: 1234 Main Street, Anytown, USA</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@company.com</p>
      </div>
    </div>
  );
}

export default AboutUs;