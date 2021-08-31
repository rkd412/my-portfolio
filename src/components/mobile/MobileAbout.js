import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import night from "../../assets/me-night.jpg";
import zaraNight from "../../assets/me-zara-night.jpg";
import day from "../../assets/me-day.jpg";
import zaraDay from "../../assets/me-zara-day.jpg";

import styles from "./MobileAbout.module.css";

const MobileAbout = () => {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [image, setImage] = useState(night);

  const clickHandler = () => {
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
      <Fade top>
        <Fade>
          <img
            className={
              theme.isNight ? styles["night-image"] : styles["day-image"]
            }
            src={image}
            key={image}
            alt="Robert Davis"
            onClick={clickHandler}
          />
        </Fade>
      </Fade>

      <Fade bottom>
        <div className={
              theme.isNight ? styles["night-about-text"] : styles["day-about-text"]
            }>
          Welcome to my website! My name is Rob and I am an aspiring web
          developer. I am self-taught and dabble mostly in React. Currently, I
          am learning the Full MERN Stack of technologies though. Feel free to
          check out my <a href="#project">projects</a> below or reach out to me
          through the <a href="#contact">contact</a> section. Also, vist my{" "}
          <a href="https://github.com/rkd412" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
          to see what I've been working on or my{" "}
          <a href="https://codepen.io/rkd412" target="_blank" rel="noreferrer">
            Codepen
          </a>{" "}
          page for older projects I did for FreeCodeCamp. Thanks!
        </div>
      </Fade>
    </div>
  );
};

export default MobileAbout;
