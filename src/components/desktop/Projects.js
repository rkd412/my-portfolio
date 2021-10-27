import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import ECommerce from "../../assets/ECommerce.jpeg";
import SecurityApp from "../../assets/SecurityApp.jpeg";
import MontyHall from "../../assets/MontyHall.jpeg";
import ComingSoon from "../../assets/ComingSoon.jpg";

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
      <Fade bottom>
        <div className={styles["carousel"]}>
          <Carousel emulateTouch autoPlay={false}>
            <div
              className={
                theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
              }
              onClick={clickHandler}
              id="https://wonderful-ptolemy-65f598.netlify.app/"
            >
              <img
                className={styles["image"]}
                src={ECommerce}
                alt="E-Commerce Site"
              />
              <p className="legend">Outdoor E-Commerce Page</p>
            </div>
            <div
              className={
                theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
              }
              onClick={clickHandler}
              id="https://infallible-khorana-72773f.netlify.app/"
            >
              <img src={SecurityApp} alt="Security API App" />
              <p className="legend">Security API App</p>
            </div>
            <div
              className={
                theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
              }
              onClick={clickHandler}
              id="https://eloquent-clarke-721698.netlify.app/"
            >
              <img src={MontyHall} alt="Monty Hall Game" />
              <p className="legend">Monty Hall Game</p>
            </div>
            <div
              className={
                theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
              }
            >
              <img src={ComingSoon} alt="Coming Soon" />
              <p className="legend">Coming Soon...</p>
            </div>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
