import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaWindowClose,
  FaChevronDown,
} from "react-icons/fa";

import styles from "./MobileNavBar.module.css";

const MobileNavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("aboutnav");
  const [isVisible, setIsVisible] = useState(true);

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

  const scrollHandler = (e) => {
    window.scrollBy(0, window.innerHeight * 1.0);
  };

  const listenScrollEvent = () => {
    if (
      window.scrollY > window.innerHeight * 0.8 &&
      window.scrollY < window.innerHeight * 1.6
    ) {
      setSelected("projectsnav");
      setIsVisible(true);
    } else if (window.scrollY > window.innerHeight * 1.6) {
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
    <div>
      {!isOpen && (
        <Fade>
          <h1
            className={
              isNight ? styles["night-hamburger"] : styles["day-hamburger"]
            }
            onClick={mobileMenuToggleHandler}
          >
            {isOpen ? <FaWindowClose /> : <FaBars />}
          </h1>
        </Fade>
      )}

      {isOpen && (
        <nav
          id="mobile-nav-bar"
          className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
        >
          {" "}
          <Fade right>
            <div
              className={
                isNight ? styles["day-nav-back"] : styles["night-nav-back"]
              }
              onClick={mobileMenuToggleHandler}
            ></div>
            <h1
              className={
                isNight ? styles["night-hamburger"] : styles["day-hamburger"]
              }
              onClick={mobileMenuToggleHandler}
            >
              {isOpen ? <FaWindowClose /> : <FaBars />}
            </h1>

            <ul>
              <li className={styles["nav-item"]}>
                <a
                  className={
                    selected === "aboutnav" ? styles["selected"] : styles[""]
                  }
                  href="#mobileabout"
                >
                  About
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a
                  className={
                    selected === "projectsnav" ? styles["selected"] : styles[""]
                  }
                  href="#mobileproject"
                >
                  Projects
                </a>
              </li>
              <li className={styles["nav-item"]}>
                <a
                  className={
                    selected === "contactnav" ? styles["selected"] : styles[""]
                  }
                  href="#mobilecontact"
                >
                  Contact
                </a>
              </li>{" "}
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
      <button
        className={
          !isVisible
            ? styles["invisible"]
            : isNight
            ? styles["night-scroll"]
            : styles["day-scroll"]
        }
        onClick={scrollHandler}
        aria-label="page scroll button"
        type="text"
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default MobileNavBar;
