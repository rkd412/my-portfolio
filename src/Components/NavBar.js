import React, { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [dayMode, setDayMode] = useState(false);

  const dayModeHandler = () => {
    setDayMode(prevCheck => !prevCheck);
    console.log(dayMode);
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#project">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-mode-toggle" onClick={dayModeHandler}>
          day/night
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
