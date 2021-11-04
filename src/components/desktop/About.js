import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import night from "../../assets/me-night.jpg";
import zaraNight from "../../assets/me-zara-night.jpg";
import day from "../../assets/me-day.jpg";
import zaraDay from "../../assets/me-zara-day.jpg";

import styles from "./About.module.css";

const About = () => {
  const theme = useContext(ThemeContext);

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

  return (
    <div
      id="about"
      className={theme.isNight ? styles["night-about"] : styles["day-about"]}
    >
      <Fade left>
        <div className={styles["about-text"]}>
        
          <p>
            Welcome! My name is Rob and I am a web developer. I am self-taught
            and dabble mostly in React. Currently, I am learning Nodejs,
            Express, and MongoDB to complete the MERN stack. Feel free to check
            out my{" "}
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
          </p>
        </div>
      </Fade>

      <Fade right>
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
