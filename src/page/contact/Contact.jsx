import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

function Contact() {
  const [btnText, setBtnText] = useState("Send Message");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    setMessage("");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_REAL_API_KEY_HERE"); // استبدل بالAPI key الصحيح

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data && data.success) {
        setMessage("✅ Message sent successfully!");
        e.target.reset(); // تفريغ الفورم بعد النجاح
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again.");
      console.error(error);
    }

    setBtnText("Send Message");
  };

  return (
    <div className="form-contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>

        <div className="input">
          <div className="field-icon">
            <FaUser className="icon" />
            <input name="name" type="text" placeholder="Your Name" required />
          </div>
        </div>

        <div className="input">
          <div className="field-icon">
            <FaEnvelope className="icon" />
            <input name="email" type="email" placeholder="Your Email" required />
          </div>
        </div>

        <div className="input">
          <div className="field-icon">
            <FaComment className="icon" />
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
        </div>

        <input type="hidden" name="access_key" value="YOUR_REAL_API_KEY_HERE" />

        <button type="submit">{btnText}</button>

        {message && (
          <p className={`feedback ${message.includes("❌") ? "error" : "success"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
