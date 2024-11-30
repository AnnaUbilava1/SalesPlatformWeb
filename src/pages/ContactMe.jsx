import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Mobile Number:
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </label>

      <label className="subscription">
        Subscribe to Newsletter:
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
      </label>
      <div>
        <a href="/terms-and-conditions" target="_blank">
          Terms and Conditions
        </a>
      </div>
      <button type="submit">Submit</button>
      
    </form>
  );
};

export default ContactMe;
