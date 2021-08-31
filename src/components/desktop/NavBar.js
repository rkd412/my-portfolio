import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext, Selected } from "../../context";

import { FaMoon, FaSun } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);
  const { selected, setSelected } = useContext(Selected);

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    e.target.blur();
    e.target.parentNode.blur();
    e.target.parentNode.parentNode.blur();
  };

  const selectedHandler = (e) => {
    setSelected(e.target.id);
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
              id="aboutnav"
              href="#about"
              onClick={selectedHandler}
              className={selected === "aboutnav" ? styles["selected"] : styles[""]}
            >
              about
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="projectsnav"
              href="#projects"
              onClick={selectedHandler}
              className={selected === "projectsnav" ? styles["selected"] : styles[""]}
            >
              projects
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="contactnav"
              href="#contact"
              onClick={selectedHandler}
              className={selected === "contactnav" ? styles["selected"] : styles[""]}
            >
              contact
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
