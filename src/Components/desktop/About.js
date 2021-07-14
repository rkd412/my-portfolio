import day from "../../day.jpg";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <img className="image" src={day} alt="Photo of me" />
      <span>
        <h1>
          Welcome to my website! My name is Rob and I am a web developer. Feel
          free to check out my projects below or reach out to me through the
          contact section. Thanks!
        </h1>
      </span>
    </div>
  );
};

export default About;
