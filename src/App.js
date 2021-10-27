import React, { useState, useEffect } from "react";

import { ThemeContext } from "./context";

import NavBar from "./components/desktop/NavBar";
import About from "./components/desktop/About";
import Projects from "./components/desktop/Projects";
import Contact from "./components/desktop/Contact";

import MobileNavBar from "./components/mobile/MobileNavBar";
import MobileAbout from "./components/mobile/MobileAbout";
import MobileProjects from "./components/mobile/MobileProjects";
import MobileContact from "./components/mobile/MobileContact";

import "./App.css";

const App = () => {
  const [isNight, setIsNight] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1008);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1008);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <ThemeContext.Provider value={{ isNight, setIsNight }}>
      <div>
        {isDesktop ? <NavBar /> : <MobileNavBar />}
        {isDesktop ? <About /> : <MobileAbout />}
        {isDesktop ? <Projects /> : <MobileProjects />}
        {isDesktop ? <Contact /> : <MobileContact />}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
