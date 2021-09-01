import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext, Selected } from "../../context";

import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);
  const [selected, setSelected] = useState("aboutnav");
  const [isVisible, setIsVisible] = useState(true);

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
    e.target.blur();
    e.target.parentNode.blur();
    e.target.parentNode.parentNode.blur();
  };

  const scrollHandler = (e) => {
    window.scrollBy(0, window.innerHeight * 1.1);
    e.target.blur();
    e.target.parentNode.blur();
    e.target.parentNode.parentNode.blur();
  };

  const listenScrollEvent = () => {
    if (
      window.scrollY > window.innerHeight * 1.0 &&
      window.scrollY < window.innerHeight * 2.0
    ) {
      setSelected("projectsnav");
      setIsVisible(true);
    } else if (window.scrollY > window.innerHeight * 2.0) {
      setSelected("contactnav");
      setIsVisible(false);
    } else {
      setSelected("aboutnav");
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

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
              className={
                selected === "aboutnav" ? styles["selected"] : styles[""]
              }
            >
              about
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="projectsnav"
              href="#projects"
              className={
                selected === "projectsnav" ? styles["selected"] : styles[""]
              }
            >
              projects
            </a>
          </li>
          <li className={styles["nav-item"]}>
            <a
              id="contactnav"
              href="#contact"
              className={
                selected === "contactnav" ? styles["selected"] : styles[""]
              }
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

      <button
        className={
          !isVisible
            ? styles["invisible"]
            : isNight
            ? styles["night-scroll"]
            : styles["day-scroll"]
        }
        onClick={scrollHandler}
      >
        <FaChevronDown />
      </button>
    </Fade>
  );
};

export default NavBar;
