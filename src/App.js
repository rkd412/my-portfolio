import NavBar from "./Components/NavBar";
import About from "./Components/About";
import ProjectBox from "./Components/ProjectBox";
import ProjectDetails from "./Components/ProjectDetails";
import Contact from "./Components/Contact";

import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <About />
      <ProjectBox />
      <ProjectDetails />
      <Contact />
    </div>
  );
};

export default App;
