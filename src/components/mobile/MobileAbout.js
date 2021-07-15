import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import day from "../../day.jpg";
import night from "../../night.jpg";

import "./MobileAbout.css";

const MobileAbout = () => {
  return (
    <div id="mobile-about" className="mobile-about">
      <img className="mobile-image" src={day} alt="Photo of me" />
      <span>
        <h1>
          Welcome to my website! My name is Rob and I am a web developer. Feel
          free to check out my projects below or reach out to me through the
          contact section. Thanks!
        </h1>
      </span>
    </div>
  );
};

export default MobileAbout;
