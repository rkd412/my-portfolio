import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import "./MobileNavBar.css";

const MobileNavBar = () => {
const { isNight, setIsNight } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    console.log(isNight);
  };

  return (
    <nav className={isNight ? "night-mobile-nav-bar" : "day-mobile-nav-bar"}>
      <ul>
        <li className="mobile-nav-item">
          <a href="#about">About</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#project">Projects</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="mobile-toggle" onClick={handleThemeToggle}>
          day/night
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
