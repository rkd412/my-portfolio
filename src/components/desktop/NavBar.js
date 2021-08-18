import React, { useState, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaMoon, FaSun } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  const [selected, setSelected] = useState("a");

  const selectedHandler = (e) => {
    setSelected(e.target.id);
  };

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    e.target.blur();
    e.target.parentNode.blur();
    e.target.parentNode.parentNode.blur();
  };

  return (
    <Fade top>
      <nav
        id="nav-bar"
        className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
      >
        <ul>
          <li className={styles["nav-item"]}>
            <a
              id="a"
              href="#about"
              onClick={selectedHandler}
              className={selected === "a" ? styles["selected"] : styles[""]}
            >
              About
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="b"
              href="#projects"
              onClick={selectedHandler}
              className={selected === "b" ? styles["selected"] : styles[""]}
            >
              Projects
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="c"
              href="#contact"
              onClick={selectedHandler}
              className={selected === "c" ? styles["selected"] : styles[""]}
            >
              Contact
            </a>
          </li>
          <li
            className={isNight ? styles["night-toggle"] : styles["day-toggle"]}
            onClick={themeToggleHandler}
          >
            <button>{isNight ? <FaMoon /> : <FaSun />}</button>
          </li>
        </ul>
      </nav>
    </Fade>
  );
};

export default NavBar;
