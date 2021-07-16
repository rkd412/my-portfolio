import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context";

import day from "../../assets/day-profile.jpg";
import night from "../../assets/night-profile.jpg";
import rat from "../../assets/rat-in-a-nest.jpg";

import "./MobileAbout.css";


const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <div id="about" className={theme.isNight ? "night-mobile-about" : "day-mobile-about"}>
      <img
        className="image"
        src={theme.isNight ? night : day}
        alt="Photo of me"
      />
      <span>
        <h1>
          Welcome to my website! My name is Rob and I am a web developer. Feel
          free to check out my projects below or reach out to me through the
          contact section. Also, my GitHub can be found here and I have some
          CodePen projects I did for FreeCodeCamp here. Thanks!
        </h1>
      </span>
    </div>
  );
};

export default About;
