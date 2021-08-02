import React, { useContext } from "react";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = () => {
  const theme = useContext(ThemeContext);

  const copyHandler = () => {
    navigator.clipboard.writeText("rkdavis412@gmail.com");
    window.alert(
      "Email copied to clipboard! No one really wants their email automatically launched for them. Let me know if you agree in your email and if you like this approach or not! Look forward to hearing from you :)"
    );
  };

  /* Again, trying to make this feature more accesible. Let me know if there is a best practice way to do it!*/
  const keyPressCopyHandler = (e) => {
    if (e.key === "Enter") {
      navigator.clipboard.writeText("rkdavis412@gmail.com");
      window.alert(
        "Email copied to clipboard! No one seems to really want their email automatically launched for them. Let me know if you agree in your email and if you like this approach or not! Look forward to hearing from you :)"
      );
    }
  };

  return (
    <div
      id="contact"
      className={
        theme.isNight ? styles["night-contact"] : styles["day-contact"]
      }
    >
      <div className={styles["contact-text"]}>
        <h2>
          Email me at{" "}
          <a
            className={styles["email-button"]}
            onClick={copyHandler}
            onKeyDown={keyPressCopyHandler}
            tabindex="0"
            role="button"
          >
            rkdavis412@gmail.com
          </a>{" "}
          with work opportunities and check out my links below. Thanks for
          visiting!
        </h2>
      </div>

      <div className={styles["contact-links"]}>
        <a href="https://github.com/rkd412" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className={styles["contact-links"]}>
        <a href="https://codepen.io/rkd412" target="_blank">
          <FaCodepen />
        </a>
      </div>
      <div className={styles["contact-links"]}>
        <a
          href="https://linkedin.com/in/robert-davis-b72893217"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
