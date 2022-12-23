import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeContext } from "./context";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";

import ScrollToTop from "./ScrollToTop";

import "./App.scss";

const App = () => {
  const [isNight, setIsNight] = useState(
    JSON.parse(localStorage.getItem("DARK_MODE"))
  );

  useEffect(() => {
    localStorage.setItem("DARK_MODE", isNight);
  });

  return (
    <ThemeContext.Provider value={{ isNight, setIsNight }}>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
