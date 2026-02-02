"use client";
import { useState } from "react";

/** Contact form – dummy submit only. No backend; data is not sent anywhere. */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-subject": "",
    "your-message": "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Dummy submit – no API call. Simulates success after a short delay.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("Your message has been sent successfully! (Demo – no backend)");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="your-name">Name</label>
          <input
            type="text"
            id="your-name"
            name="your-name"
            value={formData["your-name"]}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="your-email">Email</label>
          <input
            type="email"
            id="your-email"
            name="your-email"
            value={formData["your-email"]}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="your-subject">Subject</label>
          <input
            type="text"
            id="your-subject"
            name="your-subject"
            value={formData["your-subject"]}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="your-message">Message</label>
          <textarea
            id="your-message"
            name="your-message"
            value={formData["your-message"]}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
