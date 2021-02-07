import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const projects = [
    {
      day: 1,
      name: "Expanding Cards",
      link: "expanding-cards",
    },
    {
      day: 2,
      name: "Progress Steps",
      link: "progress-steps",
    },
    {
      day: 3,
      name: "Rotation Navigation",
      link: "rotation-navigation",
    },
    {
      day: 4,
      name: "Hidden Search",
      link: "hidden-search",
    },
    {
      day: 5,
      name: "Blurry Loading",
      link: "blurry-loading",
    },
    {
      day: 6,
      name: "Scroll Animation",
      link: "scroll-animation",
    },
    {
      day: 7,
      name: "Split Landing Page",
      link: "split-landing-page",
    },
    {
      day: 8,
      name: "Form Wave Animation",
      link: "form-wave-animation",
    },
    {
      day: 9,
      name: "Sound Board",
      link: "sound-board",
    },
  ];

  return (
    <>
      <nav>50 Projects 50 Days</nav>
      {projects.map((project) => {
        return (
          <Link to={project.link} key={project.day}>
            <button className="home-cards">
              <h2>Day {project.day}</h2>
              <h3>{project.name}</h3>
            </button>
          </Link>
        );
      })}
    </>
  );
};

export default Home;
