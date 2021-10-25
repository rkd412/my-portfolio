import React, { useState, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import Zara from "../../assets/Zara-5.png";
import ZaraWink from "../../assets/Zara-Wink.png";

import styles from "./MobileContact.module.css";

const MobileContact = () => {
  const theme = useContext(ThemeContext);

  const [isAnimated, setIsAnimated] = useState(false);
  const [zaraIcon, setZaraIcon] = useState(Zara);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText("rkdavis412@gmail.com");
    window.alert(
      "Email copied to clipboard! No one really wants their email automatically launched for them. Look forward to hearing from you!"
    );
  };

  const isAnimatedHandler = () => {
    setIsAnimated(isAnimated === true ? false : true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
    }, 4600);
    setTimeout(() => {
      setZaraIcon(Zara);
    }, 6000);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsAnimated(false);
    }, 10000);
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
              name="copy email button"
              type="text"
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
      <button
        className={isAnimated ? styles["animated"] : styles[""]}
        onClick={isAnimatedHandler}
        disabled={isButtonDisabled}
      >
        <img
          src={zaraIcon}
          alt="cat icon"
          className={
            theme.isNight
              ? styles["night-zara-image"]
              : styles["day-zara-image"]
          }
        />
      </button>
    </div>
  );
};

export default MobileContact;
