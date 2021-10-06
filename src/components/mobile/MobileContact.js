import React, { useState, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

import Zara from "../../assets/Zara.png";
import ZaraWink from "../../assets/Zara-Wink.png";

import styles from "./MobileContact.module.css";

const MobileContact = () => {
  const theme = useContext(ThemeContext);

  const [isAnimated, setIsAnimated] = useState(false);
  const [zaraIcon, setZaraIcon] = useState(Zara);

  const copyHandler = () => {
    navigator.clipboard.writeText("rkdavis412@gmail.com");
    window.alert(
      "Email copied to clipboard! No one really wants their email automatically launched for them. Let me know if you agree in your email and if you like this approach or not! Look forward to hearing from you :)"
    );
  };

  const isAnimatedHandler = () => {
    setIsAnimated(isAnimated === true ? false : true);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
      console.log("winking");
    }, 4600);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
      console.log("winked");
    }, 4800);
    setTimeout(() => {
      setZaraIcon(Zara);
      console.log(isAnimated);
    }, 6000);
    setTimeout(() => {
      setIsAnimated(false);
      console.log(isAnimated);
    }, 10001);
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
