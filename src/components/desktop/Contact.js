import React, { useContext } from "react";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      id="contact"
      className={
        theme.isNight ? styles["night-contact"] : styles["day-contact"]
      }
    >
      <h1 className={styles["contact-text"]}>
        Feel free to email me at rkdavis412@gmail.com with work opportunities or
        check out the links below.
      </h1>

      <div className={styles["contact-links"]}>
        <FaGithub />
      </div>
      <div className={styles["contact-links"]}>
        <FaCodepen />
      </div>
      <div className={styles["contact-links"]}>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Contact;
