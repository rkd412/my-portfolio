import React, { useContext } from "react";

import { ThemeContext } from "../../context";

import { FaMoon, FaSun } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
  };

  /* my attempt at making site more accesible by allowing the theme toggle to be focused on and fired with keys only...
I am sure there is a simpler way but here we are!*/
  const keyPressThemeToggleHandler = (e) => {
    if (e.key === "Enter") {
      setIsNight(isNight === true ? false : true);
    }
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
        <li className={styles["nav-item"]}>
          <a href="#contact">Contact</a>
        </li>
        <li
          className={isNight ? styles["night-toggle"] : styles["day-toggle"]}
          onClick={themeToggleHandler}
          onKeyPress={keyPressThemeToggleHandler}
          tabindex="0"
          role="button"
        >
          {isNight ? <FaMoon /> : <FaSun />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
