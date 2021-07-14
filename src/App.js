import React, { useState, useEffect } from "react";

import NavBar from "./Components/desktop/NavBar";
import About from "./Components/desktop/About";
import ProjectBox from "./Components/desktop/ProjectBox";
import Contact from "./Components/desktop/Contact";

import MobileNavBar from "./Components/mobile/MobileNavBar";
import MobileAbout from "./Components/mobile/MobileAbout";
import MobileProjectBox from "./Components/mobile/MobileProjectBox";
import MobileContact from "./Components/mobile/MobileContact";

import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      {isMobile ? <MobileAbout /> : <About />}
      {isMobile ? <MobileProjectBox /> : <ProjectBox />}
      {isMobile ? <MobileContact /> : <Contact />}
    </div>
  );
};

export default App;
