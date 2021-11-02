import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import ECommerce from "../../assets/ECommerce.jpg";
import SecurityApp from "../../assets/SecurityApp.jpg";
import MontyHall from "../../assets/MontyHall.jpg";

import styles from "./Projects.module.css";

const Projects = () => {
  const theme = useContext(ThemeContext);

  const clickHandler = (e) => {
    e.preventDefault();
    window.open(e.target.id, "_blank");
  };

  return (
    <div
      id="projects"
      className={
        theme.isNight ? styles["night-project-box"] : styles["day-project-box"]
      }
    >
      <div
        className={
          theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
        }
      >
        <h1>Outdoor E-Commerce Page</h1>
        <img
          className={styles["image"]}
          loading="lazy"
          src={ECommerce}
          alt="E-Commerce Site"
          onClick={clickHandler}
          id="https://wonderful-ptolemy-65f598.netlify.app/"
        />{" "}
        <a href="https://github.com/rkd412/outdoor-ecommerce" target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
      <div
        className={
          theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
        }
      >
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Material UI</li>
        </ul>
      </div>

      <div
        className={
          theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
        }
      >
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Material UI</li>
        </ul>
      </div>
      <div
        className={
          theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
        }
      >
        <h1>Security API App</h1>
        <img
          className={styles["image"]}
          loading="lazy"
          src={SecurityApp}
          alt="Security API App"
          onClick={clickHandler}
          id="https://infallible-khorana-72773f.netlify.app/"
        />

        <a href="https://github.com/rkd412/security-api-app" target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>

      <div
        className={
          theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
        }
      >
        <h1>Monty Hall Game App</h1>
        <img
          className={styles["image"]}
          loading="lazy"
          src={MontyHall}
          alt="Monty Hall Game"
          onClick={clickHandler}
          id="https://eloquent-clarke-721698.netlify.app/"
        />

        <a href="https://github.com/rkd412/monty-hall" target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
      <div
        className={
          theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
        }
      >
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
