import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeContext } from "../../context";

import sun1 from "../../assets/sunflowers-1.jpg";
import sun2 from "../../assets/sunflowers-2.jpg";
import sun3 from "../../assets/sunflowers-3.jpg";
import sun4 from "../../assets/sunflowers-4.jpg";

import styles from "./Projects.module.css";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      id="project"
      className={
        theme.isNight ? styles["night-project-box"] : styles["day-project-box"]
      }
    >
      <div className={styles["carousel"]}>
        <Carousel emulateTouch>
          <div>
            <img src={sun1} alt="img1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={sun2} alt="img2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={sun3} alt="img3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={sun4} alt="img4" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
