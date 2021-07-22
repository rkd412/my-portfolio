import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context";

import day from "../../assets/day-profile.jpg";
import night from "../../assets/night-profile.jpg";
import rat from "../../assets/rat-in-a-nest.jpg";

import styles from "./About.module.css";

const About = () => {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(0);
  const [image, setImage] = useState(night);

  const clickHandler = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    if (count === 10) {
      setImage(rat);
    } else if (count === 11) {
      setCount(0);
    } else if (theme.isNight) {
      setImage(night);
    } else {
      setImage(day);
    }
  });

  return (
    <div
      id="about"
      className={theme.isNight ? styles["night-about"] : styles["day-about"]}
    >
      <img
        className={styles["image"]}
        src={image}
        alt="Photo of me"
        onClick={clickHandler}
      />

      <h1>
        Welcome to my website! My name is Rob and I am a web developer. I am
        self-taught and dabble mostly in React. Currently learning the Full MERN
        Stack of technologies though. Feel free to check out my projects below
        or reach out to me through the contact section. Also, vist my GitHub or
        my CodePen for projects I did for FreeCodeCamp. Thanks!
      </h1>
    </div>
  );
};

export default About;
