import React, { useState, useEffect } from "react";

import { ThemeContext } from "./context";
import { Selected } from "./context";

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
  const [ selected, setSelected ] = useState("aboutnav");

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
    <ThemeContext.Provider value={{ isNight, setIsNight }}>
      <Selected.Provider value={{ selected, setSelected }}>
        <div>
          {isMobile ? <MobileNavBar /> : <NavBar />}
          {isMobile ? <MobileAbout /> : <About />}
          {isMobile ? <MobileProjects /> : <Projects />}
          {isMobile ? <MobileContact /> : <Contact />}
        </div>
      </Selected.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
