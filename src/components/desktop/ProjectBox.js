import React, { Component, useContext } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeContext } from "../../context";

import "./ProjectBox.css";

const ProjectBox = () => {
  const theme = useContext(ThemeContext);

  return (
    <Carousel>
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default ProjectBox;
