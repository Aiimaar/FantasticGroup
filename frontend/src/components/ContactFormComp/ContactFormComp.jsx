import { useState } from "react";
import axios from "axios";
import "./ContactFormComp.css";

const ContactFormComp = () => {
  const [formData, setFormData] = useState({
    subject: "",
    country: "",
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Message sent:", formData);
      setFormData({
        subject: "",
        country: "",
        name: "",
        email: "",
        message: "",
      });

      setSuccessMessage("Thanks! Your message has been sent.");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-form-comp-container">
      <h2 className="contact-form-comp-title">Have some issue?</h2>
      <p className="contact-form-comp-subtitle">Let's talk about it!</p>
      <form onSubmit={handleSubmit} className="contact-form-comp-form">
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-form-comp-select"
        >
          <option value="">Subject</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
        </select>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="contact-form-comp-select"
        >
          <option value="">Country</option>
          <option value="Iceland">Iceland</option>
          <option value="Denmark">Denmark</option>
          <option value="Spain">Spain</option>
        </select>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-form-comp-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form-comp-input"
        />
        <textarea
          name="message"
          placeholder="Tell us your problem."
          value={formData.message}
          onChange={handleChange}
          className="contact-form-comp-textarea"
        ></textarea>
        <button
          type="submit"
          className="contact-form-comp-button"
          onClick={handleSubmit}
        >
          Send
        </button>
        {successMessage && (
          <p className="contact-form-comp-success">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactFormComp;
