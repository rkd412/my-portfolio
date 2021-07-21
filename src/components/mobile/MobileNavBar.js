import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import styles from "./MobileNavBar.module.css";

const MobileNavBar = () => {
const { isNight, setIsNight } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    console.log(isNight);
  };

  return (
    <nav className={isNight ? styles["night-mobile-nav-bar"] : styles["day-mobile-nav-bar"]}>
      <ul>
        <li className={styles["mobile-nav-item"]}>
          <a href="#about">About</a>
        </li>
        <li className={styles["mobile-nav-item"]}>
          <a href="#project">Projects</a>
        </li>
        <li className={styles["mobile-nav-item"]}>
          <a href="#contact">Contact</a>
        </li>
        <li className={styles["mobile-toggle"]} onClick={handleThemeToggle}>
          day/night
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
