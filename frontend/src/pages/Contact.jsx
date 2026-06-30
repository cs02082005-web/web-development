import { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (form.subject.trim() === "") {
      newErrors.subject = "Subject is required.";
    }

    if (form.message.trim() === "") {
      newErrors.message = "Please enter your message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.status === "success") {
        setSuccess(
          "Your message has been sent successfully. We will contact you soon."
        );

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      }
    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ch. Chandra Sekhar Patro"
          value={form.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>

        <input
          type="email"
          name="email"
          placeholder="cs02082005@gmail.com"
          value={form.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <input
          type="text"
          name="subject"
          placeholder="Website Development Inquiry"
          value={form.subject}
          onChange={handleChange}
        />
        <span className="error">{errors.subject}</span>

        <textarea
          name="message"
          rows="5"
          placeholder="Hello, I am interested in developing a corporate website. Please contact me with more details."
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <span className="error">{errors.message}</span>

        <button type="submit">Send Message</button>

        {success && <p className="success">{success}</p>}
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>

        <p>
          <strong>Name:</strong> Ch. Chandra Sekhar Patro
        </p>

        <p>
          <strong>Email:</strong> cs02082005@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> 8480438957
        </p>
      </div>
    </div>
  );
}

export default Contact;