import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context";

import day from "../../assets/day-profile.jpg";
import night from "../../assets/night-profile.jpg";
import rat from "../../assets/rat-in-a-nest.jpg";

import "./About.css";

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
    <div id="about" className={theme.isNight ? "night-about" : "day-about"}>
      <img
        className="image"
        src={image}
        alt="Photo of me"
        onClick={clickHandler}
      />
      <span>
        <h1>
          Welcome to my website! My name is Rob and I am a web developer. Feel
          free to check out my projects below or reach out to me through the
          contact section. Also, check out my GitHub or some
          CodePen projects I did for FreeCodeCamp. Thanks!
        </h1>
      </span>
    </div>
  );
};

export default About;
