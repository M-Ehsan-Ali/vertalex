"use client";
import { useState } from "react";

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

    // Creating FormData to send to the Contact Form 7 API
    const formDataToSend = new FormData();
    formDataToSend.append("your-name", formData["your-name"]);
    formDataToSend.append("your-email", formData["your-email"]);
    formDataToSend.append("your-subject", formData["your-subject"]);
    formDataToSend.append("your-message", formData["your-message"]);
    formDataToSend.append("_wpcf7", "1cf6c64"); // Your form ID from Contact Form 7
    formDataToSend.append("_wpcf7_version", "5.6.0"); // CF7 version (optional)
    formDataToSend.append("_wpcf7_locale", "en"); // Locale (optional)
    formDataToSend.append("_wpcf7_unit_tag", "wpcf7-f80ce0e9-p29-o1"); // Unit Tag (replace with actual tag)

    try {
      const response = await fetch(
        "http://staging.octalcode.com/wp-json/contact-form-7/v1/contact-forms/29/feedback", // Replace with your form ID
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (data.status === "mail_sent") {
        setStatus("Your message has been sent successfully!");
      } else {
        setStatus("Failed to send your message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error submitting the form.");
    }
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
