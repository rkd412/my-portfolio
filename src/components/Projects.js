import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../context";

import ECommerce from "../assets/ECommerce.webp";
import SecurityApp from "../assets/SecurityApp.webp";
import MontyHall from "../assets/MontyHall.webp";

import styles from "./Projects.module.css";

const Projects = () => {
  const theme = useContext(ThemeContext);

  const clickHandler = (e) => {
    e.preventDefault();
    window.open(e.target.id, "_blank");
  };

  /*I could turn project-card into a separate hook.
  There's lot's of repeated logic here.*/

  return (
    <div
      id="projects"
      className={
        theme.isNight ? styles["night-projects"] : styles["day-projects"]
      }
    >
      <div className={styles["project-card"]}>
        <Fade>
          <div
            className={
              theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
            }
          >
            <div>
              {" "}
              <h2>Security API App</h2>
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

        <Fade>
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
                I learned a lot about APIs in general creating this and using
                fetch as well as Axios. It was initially challenging but started
                to click as I stayed with it.
              </li>
              <li>
                <a
                  aria-label="Security API App repository"
                  href="https://github.com/rkd412/security-api-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>{" "}
                and{" "}
                <a
                  aria-label="Security API App repository"
                  href="https://infallible-khorana-72773f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>

      <div className={styles["project-card"]}>
        {" "}
        <Fade>
          <div
            className={
              theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
            }
          >
            <ul>
              <li>Built with HTML, CSS, Javascript, React, MaterialUI.</li>

              <li>
                Outdoor E-Commerce site that includes a functioning cart and
                products page.
              </li>

              <li>
                First attempt using a design library. The premade components
                were very helpful but it was challenging learning a new system.
              </li>

              <li>
                I am considering expanding on the site and adding authentication
                and a backend with a database.
              </li>
              <li>
                <a
                  aria-label="Security API App repository"
                  href="https://github.com/rkd412/outdoor-ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>{" "}
                and{" "}
                <a
                  aria-label="Security API App repository"
                  href="https://wonderful-ptolemy-65f598.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>{" "}
                .
              </li>
            </ul>
          </div>
        </Fade>
        <Fade>
          <div
            className={
              theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
            }
          >
            <div>
              <h2>Outdoor E-Commerce Site</h2>
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
        </Fade>
      </div>

      <div className={styles["project-card"]}>
        <Fade>
          <div
            className={
              theme.isNight ? styles["night-img-div"] : styles["day-img-div"]
            }
          >
            <div>
              {" "}
              <h2>Monty Hall Game App</h2>
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
        </Fade>
        <Fade>
          <div
            className={
              theme.isNight ? styles["night-text-div"] : styles["day-text-div"]
            }
          >
            <ul>
              <li>Built with CSS, HTML, Javascript, and React</li>
              <li>A game illustrating the Monty Hall problem.</li>{" "}
              <li>
                Thinking through the problem and getting the logic behind the
                game correct was challenging but fun.
              </li>
              <li>
                <a
                  aria-label="Monty Hall Game"
                  href="https://github.com/rkd412/monty-hall"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>{" "}
                and{" "}
                <a
                  aria-label="Monty Hall Game repository"
                  href="https://eloquent-clarke-721698.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                .
              </li>
            </ul>
          </div>
        </Fade>
      </div>

      <Fade>
        <div
          className={
            theme.isNight ? styles["night-outro"] : styles["day-outro"]
          }
        >
          <h2>Hey, thanks for checking out my projects page.</h2>
          <h4>
            {" "}
            I would suggest heading to my{" "}
            <a
              aria-label="GitHub Page"
              href="https://github.com/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            to see what I've been working on. My{" "}
            <a
              aria-label="CodePen Page"
              href="https://codepen.io/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              Codepen
            </a>{" "}
            page has older projects I did for{" "}
            <a
              aria-label="FreeCodeCamp Profile"
              href="https://www.freecodecamp.org/rkd412"
              target="_blank"
              rel="noreferrer"
            >
              FreeCodeCamp
            </a>{" "}
            as well. See ya!
          </h4>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
