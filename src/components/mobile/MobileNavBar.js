import React, { useState, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaMoon, FaSun, FaBars, FaWindowClose } from "react-icons/fa";

import styles from "./MobileNavBar.module.css";

const MobileNavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  /*handler for night and day theme toggler*/
  const themeToggleHandler = (e) => {
    e.preventDefault();
    setIsNight(isNight === true ? false : true);
  };
  /*handler for hamburger menu for mobile*/
  const mobileMenuToggleHandler = (e) => {
    e.preventDefault();
    setIsOpen(isOpen === true ? false : true);
  };

  return (
    <div>
      {!isOpen && (
        <Fade>
          <h1
            className={styles["hamburger-icon"]}
            onClick={mobileMenuToggleHandler}
          >
            {isOpen ? <FaWindowClose /> : <FaBars />}
          </h1>
        </Fade>
      )}

      {isOpen && (
       
        <nav
          id="nav-bar"
          className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
        > <Fade right>
          <div
            className={styles["nav-back"]}
            onClick={mobileMenuToggleHandler}
          ></div>
          <h1
            className={styles["hamburger-icon"]}
            onClick={mobileMenuToggleHandler}
          >
            {isOpen ? <FaWindowClose /> : <FaBars />}
          </h1>

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
              className={
                isNight ? styles["night-toggle"] : styles["day-toggle"]
              }
              onClick={themeToggleHandler}
            >
              {isNight ? <FaMoon /> : <FaSun />}
            </li>
          </ul>
          </Fade>
        </nav>
       
      )}
    </div>
  );
};

export default MobileNavBar;
