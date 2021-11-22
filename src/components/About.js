import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../context";

import night from "../assets/me-night.webp";
import zaraNight from "../assets/me-zara-night.webp";
import day from "../assets/me-day.webp";
import zaraDay from "../assets/me-zara-day.webp";
import Zara from "../assets/Zara.webp";
import ZaraWink from "../assets/Zara-Wink.webp";
import Resume from "../Robert-Davis-Resume.pdf";

import styles from "./About.module.scss";

import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

const About = () => {
  const theme = useContext(ThemeContext);

  const [isAnimated, setIsAnimated] = useState(false);
  const [zaraIcon, setZaraIcon] = useState(Zara);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(night);

  const clickHandler = (e) => {
    setCount(count + 1);
  };

  /*Click my photo to meet my cat Zarathustra!*/
  useEffect(() => {
    if (count === 1 && theme.isNight) {
      setImage(zaraNight);
    } else if (count === 1 && !theme.isNight) {
      setImage(zaraDay);
    } else if (count === 2) {
      setCount(0);
    } else if (theme.isNight) {
      setImage(night);
    } else {
      setImage(day);
    }
  }, [theme.isNight, count]);

  /*shouldn't break build now*/
  useEffect((isAnimated) => {
    setIsAnimated(isAnimated === true ? false : true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
    }, 1000);
    setTimeout(() => {
      setZaraIcon(Zara);
    }, 1500);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsAnimated(false);
    }, 2000);
  }, []);

  const isAnimatedHandler = () => {
    setIsAnimated(isAnimated === true ? false : true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
    }, 500);
    setTimeout(() => {
      setZaraIcon(Zara);
    }, 1000);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsAnimated(false);
    }, 1500);
  };

  return (
    <div
      id="about"
      className={theme.isNight ? styles["night-about"] : styles["day-about"]}
    >
      <Fade>
        <div className={styles["about-text"]}>
          <div className={styles["about-image-mobile"]}>
            <img
              className={
                theme.isNight ? styles["night-image"] : styles["day-image"]
              }
              loading="lazy"
              type="image"
              src={image}
              alt="Robert Davis Himself"
              onClick={clickHandler}
            />
          </div>
          <h1>
            Welcome!{" "}
            <button
              className={isAnimated ? styles["animated"] : styles[""]}
              onClick={isAnimatedHandler}
              disabled={isButtonDisabled}
              aria-label="icon animator"
            >
              <img
                id="cat-icon"
                aria-label="Cat Icon Animation"
                src={zaraIcon}
                alt="cat icon"
                loading="lazy"
                className={
                  theme.isNight
                    ? styles["night-zara-image"]
                    : styles["day-zara-image"]
                }
              />
            </button>{" "}
          </h1>
          <h2>
            My name is Rob and I am a web developer.{" "}
            <div className={styles["contact-links"]}>
              <a
                aria-label="Github Link"
                href="https://github.com/rkd412"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className={styles["contact-links"]}>
              <a
                aria-label="CodePen Link"
                href="https://codepen.io/rkd412"
                target="_blank"
                rel="noreferrer"
              >
                <FaCodepen />
              </a>
            </div>
            <div className={styles["contact-links"]}>
              <a
                aria-label="LinkedIn Link"
                href="https://linkedin.com/in/robert-davis-b72893217"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </h2>

          <h4>
            I am self-taught and dabble mostly in React. Currently, I am
            learning Nodejs, Express, and MongoDB to complete the MERN stack.
            Feel free to check out my{" "}
            <Link aria-label="Project Section" to="/projects">
              projects
            </Link>{" "}
            page or send me an email at{" "}
            <a aria-label="my email address" href="mailto:rob@robertkdavis.com">
              rob@robertkdavis.com
            </a>
            . Download my{" "}
            <Link to={Resume} target="_blank" download>
              resume
            </Link>{" "}
            as well.
          </h4>
        </div>

        <div className={styles["about-image"]}>
          <img
            className={styles["profile"]}
            loading="lazy"
            src={image}
            alt="Robert Davis Himself"
            onClick={clickHandler}
          />
        </div>
      </Fade>
    </div>
  );
};

export default About;
