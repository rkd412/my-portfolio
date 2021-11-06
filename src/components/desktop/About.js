import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import night from "../../assets/me-night.webp";
import zaraNight from "../../assets/me-zara-night.webp";
import day from "../../assets/me-day.webp";
import zaraDay from "../../assets/me-zara-day.webp";
import Zara from "../../assets/Zara.webp";
import ZaraWink from "../../assets/Zara-Wink.webp";

import styles from "./About.module.css";

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

  useEffect(() => {
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
  },);

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
          <h2>My name is Rob and I am a web developer.</h2>
          <h4>
            I am self-taught and dabble mostly in React. Currently, I am
            learning Nodejs, Express, and MongoDB to complete the MERN stack.
            Feel free to check out my{" "}
            <a aria-label="Projects Section" id="projectsnav" href="#projects">
              projects
            </a>{" "}
            below or reach out to me through the{" "}
            <a aria-label="Contact Section" id="contactnav" href="#contact">
              contact
            </a>{" "}
            section. Also, visit my{" "}
            <a
              aria-label="GitHub Page"
              href="https://github.com/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            to see what I've been working on or my{" "}
            <a
              aria-label="CodePen Page"
              href="https://codepen.io/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              Codepen
            </a>{" "}
            page for older projects I did for{" "}
            <a
              aria-label="FreeCodeCamp Profile"
              href="https://www.freecodecamp.org/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              FreeCodeCamp
            </a>
            . Feel free to say hello on{" "}
            <a
              aria-label="LinkedIn Page"
              href="https://linkedin.com/in/robert-davis-b72893217"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            as well. Thanks!
          </h4>
        </div>
      </Fade>

      <Fade>
        <div className={styles["about-img"]}>
          <Fade>
            <img
              className={
                theme.isNight ? styles["night-image"] : styles["day-image"]
              }
              loading="lazy"
              type="image"
              src={image}
              key={image}
              name="saveForm"
              alt="Robert Davis Himself"
              id="saveForm"
              onClick={clickHandler}
            />
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default About;
