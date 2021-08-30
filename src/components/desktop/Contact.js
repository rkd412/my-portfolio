import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = () => {
  const theme = useContext(ThemeContext);

  const copyHandler = (e) => {
    navigator.clipboard.writeText("rkdavis412@gmail.com");
    window.alert(
      "Email copied to clipboard! No one really wants their email automatically launched for them it seems. Let me know if you agree in your email and if you like this approach or not! Look forward to hearing from you :)"
    );
    e.target.blur();
  };

  return (
    <div
      id="contact"
      className={
        theme.isNight ? styles["night-contact"] : styles["day-contact"]
      }
    >
      <Fade bottom>
        <div className={styles["contact-text"]}>
          <p>
            Email me at{" "}
            <button
              className={styles["email-button"]}
              onClick={copyHandler}
              tabindex="0"
            >
              rkdavis412@gmail.com
            </button>{" "}
            with work opportunities and check out my links below. Thanks for
            visiting!
          </p>
        </div>
        <div className={styles["contact-links"]}>
          <a href="https://github.com/rkd412" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className={styles["contact-links"]}>
          <a href="https://codepen.io/rkd412" target="_blank" rel="noreferrer">
            <FaCodepen />
          </a>
        </div>
        <div className={styles["contact-links"]}>
          <a
            href="https://linkedin.com/in/robert-davis-b72893217"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
