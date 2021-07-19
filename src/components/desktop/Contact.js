import React, { useContext } from "react";

import { ThemeContext } from "../../context";

import "./Contact.css";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div id="contact" className={theme.isNight ? "night-contact" : "day-contact"}>
      <h1>Contact</h1>
      <p>rkdavis412@gmail.com</p>
    </div>
  );
};

export default Contact;
