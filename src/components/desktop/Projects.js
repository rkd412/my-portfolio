import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import ECommerce from "../../assets/ECommerce.webp";
import SecurityApp from "../../assets/SecurityApp.webp";
import MontyHall from "../../assets/MontyHall.webp";

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
      <Fade left>
        <div
          className={
            theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
          }
        >
          <div>
            <h1>Outdoor E-Commerce Page</h1>
          </div>
          <div>
            <img
              className={styles["image"]}
              loading="lazy"
              src={ECommerce}
              alt="E-Commerce Site"
              onClick={clickHandler}
              id="https://wonderful-ptolemy-65f598.netlify.app/"
            />
          </div>{" "}
        </div>

        <div
          className={
            theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
          }
        >
          <ul>
            <li>Built with CSS, HTML, Javascript, React, and MaterialUI</li>

            <li>
              Outdoor E-Commerce site that includes a functioning cart and
              products page.
            </li>
            <li>
              Source code{" "}
              <a
              
                aria-label="Outdoor E-Commerce Repository"
                href="https://github.com/rkd412/outdoor-ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>
      </Fade>

      <Fade right>
        <div
          className={
            theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
          }
        >
          <ul>
            <li>Built with HTML, CSS, Javascript, React, MaterialUI</li>
            <li>
              Security API app that includes 3 different functioning APIs.
            </li>
            <li>
              View source code{" "}
              <a
                aria-label="Security API App repository"
                href="https://github.com/rkd412/security-api-app"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>

        <div
          className={
            theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
          }
        >
          <div>
            {" "}
            <h1>Security API App</h1>
          </div>
          <div>
            {" "}
            <img
              className={styles["image"]}
              loading="lazy"
              src={SecurityApp}
              alt="Security API App"
              onClick={clickHandler}
              id="https://infallible-khorana-72773f.netlify.app/"
            />
          </div>
        </div>
      </Fade>

      <Fade left>
        <div
          className={
            theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
          }
        >
          <div>
            {" "}
            <h1>Monty Hall Game App</h1>
          </div>
          <div>
            {" "}
            <img
              className={styles["image"]}
              loading="lazy"
              src={MontyHall}
              alt="Monty Hall Game"
              onClick={clickHandler}
              id="https://eloquent-clarke-721698.netlify.app/"
            />
          </div>
        </div>

        <div
          className={
            theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
          }
        >
          <ul>
            <li>Built with CSS, HTML, Javascript, and React</li>
            <li>Simple game illustrating the Monty Hall problem.</li>{" "}
            <li>
              View source code{" "}
              <a
                aria-label="Monty Hall Repository"
                href="https://github.com/rkd412/monty-hall"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
