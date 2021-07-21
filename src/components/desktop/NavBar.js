import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import { FaRegMoon, FaSun } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const { isNight, setIsNight } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    console.log(isNight);
  };

  return (
    <nav
      id="nav-bar"
      className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
    >
      <ul>
        <li className={styles["nav-item"]}>
          <a href="#about">About</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#project">Projects</a>
        </li>
        <li className={styles["image"]}>
          <a href="#contact">Contact</a>
        </li>
        <li className={styles["toggle"]} onClick={handleThemeToggle}>
          {isNight ? <FaRegMoon /> : <FaSun />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
