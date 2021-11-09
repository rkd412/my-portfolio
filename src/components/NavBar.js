import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

import { ThemeContext } from "../context";

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

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = "0rem";
    } else {
      document.getElementById("nav-bar").style.top = "-10rem";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Fade top>
        <nav
          id="nav-bar"
          className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
        >
          <ul>
            <li>
              <Link aria-label="About Section" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link aria-label="Project Section" to="/projects">
                PROJECTS
              </Link>
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
        </nav>
      </Fade>
    </>
  );
};

export default NavBar;
