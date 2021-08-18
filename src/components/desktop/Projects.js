import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../context";

import sun1 from "../../assets/sunflowers-1.jpg";
import sun2 from "../../assets/sunflowers-2.jpg";
import sun3 from "../../assets/sunflowers-3.jpg";
import sun4 from "../../assets/sunflowers-4.jpg";

import styles from "./Projects.module.css";

const Projects = () => {
  const theme = useContext(ThemeContext);

  const clickHandler = () => {
    const url = "https://www.google.com/";
    window.open(url, "_blank");
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
          <div className={styles["img-div"]} onClick={clickHandler}>
            <img className={styles["image"]} src={sun1} alt="img1" />
            <p className="legend">Legend 1</p>
          </div>
          <div className={styles["img-div"]} onClick={clickHandler}>
            <img src={sun2} alt="img2" />
            <p className="legend">Legend 2</p>
          </div>
          <div className={styles["img-div"]} onClick={clickHandler}>
            <img src={sun3} alt="img3" />
            <p className="legend">Legend 3</p>
          </div>
          <div className={styles["img-div"]} onClick={clickHandler}>
            <img src={sun4} alt="img4" />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
      </div>
      </Fade>
    </div>
  );
};

export default Projects;
