import React, { useState } from "react";

import "./MobileNavBar.css";

const MobileNavBar = () => {
  const [dayMode, setDayMode] = useState(false);

  const dayModeHandler = () => {
    setDayMode(prevCheck => !prevCheck);
    console.log(dayMode);
  };

  return (
    <nav className="mobile-nav-bar">
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
        <li className="mobile-nav-mode-toggle" onClick={dayModeHandler}>
          day/night
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
