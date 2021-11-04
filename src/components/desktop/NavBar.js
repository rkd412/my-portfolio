import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";

import Zara from "../../assets/Zara.png";
import ZaraWink from "../../assets/Zara-Wink.png";

import styles from "./NavBar.module.css";

const NavBar = () => {
  /*Used useContext for app wide state management for night/day themes*/
  const { isNight, setIsNight } = useContext(ThemeContext);

  const [selected, setSelected] = useState("aboutnav");
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [zaraIcon, setZaraIcon] = useState(Zara);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
      window.scrollY >= window.innerHeight * 1.0 &&
      window.scrollY <= window.innerHeight * 3.5
    ) {
      setSelected("projectsnav");
      setIsVisible(false);
    } else if (window.scrollY >= window.innerHeight * 3.5) {
      setSelected("contactnav");
      setIsVisible(false);
    } else {
      setSelected("aboutnav");
      setIsVisible(true);
    }
  };

  const isAnimatedHandler = () => {
    setIsAnimated(isAnimated === true ? false : true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setZaraIcon(ZaraWink);
    }, 4600);
    setTimeout(() => {
      setZaraIcon(Zara);
    }, 6000);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsAnimated(false);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = "0";
      document.getElementById("cat-icon").style.top = "0";
    } else {
      document.getElementById("nav-bar").style.top = "-100px";
      document.getElementById("cat-icon").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <Fade top>
      <nav
        id="nav-bar"
        className={isNight ? styles["night-nav-bar"] : styles["day-nav-bar"]}
      >
        <ul>
          <button
            className={isAnimated ? styles["animated"] : styles[""]}
            onClick={isAnimatedHandler}
            disabled={isButtonDisabled}
            aria-label="icon animator"
          >
            <img
            id="cat-icon"
            aria-label="Cat Icon Animation"
              src={zaraIcon}
              alt="cat icon"
              loading="lazy"
              className={
                isNight ? styles["night-zara-image"] : styles["day-zara-image"]
              }
            />
          </button>
          <li>
            <a
            aria-label="About Section"
              id="aboutnav"
              href="#about"
              className={
                selected === "aboutnav" ? styles["selected"] : styles[""]
              }
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
            aria-label="Project Section"
              id="projectsnav"
              href="#projects"
              className={
                selected === "projectsnav" ? styles["selected"] : styles[""]
              }
            >
             PROJECTS
            </a>
          </li>
          <li>
            <a
            aria-label="Contact Section"
              id="contactnav"
              href="#contact"
              className={
                selected === "contactnav" ? styles["selected"] : styles[""]
              }
            >
             CONTACT
            </a>
          </li>
          <li
          
            className={isNight ? styles["night-toggle"] : styles["day-toggle"]}
            onClick={themeToggleHandler}
          >
            <button aria-label="theme toggle button" type="text">
              {isNight ? <FaMoon /> : <FaSun />}
            </button>
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
        aria-label="page scroll button"
        type="text"
      >
        <FaChevronDown />
      </button>
    </Fade>
  );
};

export default NavBar;
