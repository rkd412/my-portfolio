import React, { useContext } from "react";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      id="contact"
      className={theme.isNight ? "night-contact" : "day-contact"}
    >
      <div className="contact-text">
        Feel free to email me at rkdavis412@gmail.com with work opportunities.
      </div>

      <div className="contact-links">
        <FaGithub /> <FaCodepen /> <FaLinkedin />
      </div>
      
    </div>
  );
};

export default Contact;
