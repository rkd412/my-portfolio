import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import "./NavBar.css";

const NavBar = () => {
  const { isNight, setIsNight } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    console.log(isNight);
  };

  return (
    <nav className={isNight ? "night-nav-bar" : "day-nav-bar"}>
      <ul>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#project">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="toggle" onClick={handleThemeToggle}>
          day/night
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
