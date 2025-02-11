import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [ticket, setTicket] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const ticketNumber = `TICKET-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicket(`Your ticket number is: ${ticketNumber}`);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {ticket && <p style={{ color: "green" }}>{ticket}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </div>
        
        <div>
          <label>Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
