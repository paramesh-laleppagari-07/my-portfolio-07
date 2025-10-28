import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import googleLogo from "../assets/google.svg";
import appleLogo from "../assets/apple.svg";
import "./Contact.css";

const InputField = ({ type, placeholder, icon, value, onChange, name }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <span className="input-icon">{icon}</span>
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
        name={name}
        required
      />
      {type === "password" && (
        <span
          onClick={() => setIsPasswordShown((prev) => !prev)}
          className="eye-icon material-symbols-rounded"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </span>
      )}
    </div>
  );
};

const SocialLogin = () => (
  <div className="social-login">
    <button className="social-button">
      <img src={googleLogo} alt="Google" className="social-icon" />
      Google
    </button>
    <button className="social-button">
      <img src={appleLogo} alt="Apple" className="social-icon" />
      Apple
    </button>
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // prevent spam
    if (isSending) return;

    setIsSending(true);
    setStatus("⏳ Sending message...");

    emailjs
      .sendForm(
        "paramesh_mail_service",
        "paramesh_template_id",
        formRef.current,
        "33aQeppej500cOr0W"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
          setFormData({ name: "", email: "", gender: "", message: "" });

          // Re-enable button after 10 seconds
          setTimeout(() => {
            setIsSending(false);
            setStatus("You can send another message if needed 💬");
          }, 10000);
        },
        () => {
          setStatus("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-card">
        <h2 className="form-title">Contact Me</h2>

        <SocialLogin />

        <p className="separator">
          <span>or</span>
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Your Name"
            icon="👤"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <InputField
            type="email"
            placeholder="Your Email"
            icon="✉"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <div className="input-wrapper">
            <select
              className="input-field"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male 🚹</option>
              <option value="female">Female 🚺</option>
            </select>
          </div>

          <div className="input-wrapper">
            <textarea
              placeholder="Your Message"
              className="input-field"
              value={formData.message}
              onChange={handleChange}
              name="message"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="contact-button"
            disabled={isSending}
            style={{
              opacity: isSending ? 0.6 : 1,
              cursor: isSending ? "not-allowed" : "pointer",
            }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p style={{ marginTop: "10px", color: "#5F41E4" }}>{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
