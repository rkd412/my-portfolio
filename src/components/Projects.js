import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../context";

import styles from "./Projects.module.scss";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      id="projects"
      className={
        theme.isNight ? styles["night-projects"] : styles["day-projects"]
      }
    >
      <Fade>
        <div
          className={
            theme.isNight ? styles["night-outro"] : styles["day-outro"]
          }
        >
          <h1>Hey, thanks for checking out my projects page...</h1>
          <p>
            {" "}
            I had some older stuff here but honestly it wasn't really
            representative of where I'm at these days¯\_(ツ)_/¯. I would suggest
            heading to{" "}
            <a
              aria-label="Online Stores, LLC"
              href="https://www.onlinestores.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              the City of Pittsburgh
            </a>{" "}
            website to see what I've been working on or check out{" "}
            <a
              aria-label="Online Stores, LLC"
              href="https://www.onlinestores.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Stores
            </a>{" "}
            where there are several e-commerce sites from my previous job (like
            the{" "}
            <a
              aria-label="Online Stores, LLC"
              href="https://www.discountsafetygear.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discount Safety Gear
            </a>{" "}
            or the{" "}
            <a
              aria-label="Online Stores, LLC"
              href="https://www.englishteastore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              English Tea Store
            </a>
            ). I'm always happy to talk about my work there and what I've
            accomplished! My{" "}
            <a
              aria-label="CodePen Page"
              href="https://codepen.io/rkd412"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codepen
            </a>{" "}
            page has older projects I did for{" "}
            <a
              aria-label="FreeCodeCamp Profile"
              href="https://www.freecodecamp.org/rkd412"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeCodeCamp
            </a>{" "}
            as well if you're curious. My{" "}
            <a
              aria-label="FreeCodeCamp Profile"
              href="https://www.freecodecamp.org/rkd412"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            has become a bit inactive too (╥_╥) because I've been pretty busy at
            work but I have a few projects in mind I'll be starting up soon \
            (•◡•) /. Feel free to check it out anyways though because I have
            some older stuff on there with live demos. I do appreciate you
            stopping by!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
