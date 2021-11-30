import React from "react";
import "../styles/projects.css";

const LIST = [
  {
    name: "Linkedin-Clone",
    stack: "React.js, redux, firebase",
    description: "A react redux based Linked in clone",
    link: "https://github.com/hailer24/LinkedIn-clone",
    live: "https://linkedin-clone-1003.web.app/",
  },
  {
    name: "Soteria",
    stack: "C++, nodeMCU, arduino, thingSpeak",
    description: "A IOT based Heart beat sensor and epilepsy alert device",
    link: "https://github.com/hailer24/microinnovator-2020",
  },
  {
    name: "Markdown-Editor",
    stack: "react.js, ReactMarkdown ",
    link: "https://github.com/hailer24/markdown-editor",
    description:
      "A basic markdown Editor using react and it's basic properties of hook and context",
  },
  {
    name: "Ord-Com",
    stack: "python, matplotlib, numpy, openCV",
    link: "https://github.com/hailer24/ord-com",
    description:
      "ord-com is a 3 plot of 2d block coordinates and it is a solution to problem statement in vantage 2020 organised by IIT guwahati and bagged 1st position.",
  },
];

const Projects = () => {
  const Project = ({ name, stack, description, link, live, idx }) => {
    return (
      <div className={`project proj${idx} heading`}>
        <div className="head">
          <h5 className="hName">{name}</h5>
        </div>
        <div className="stack">
          <h6 className="subHeading">{stack}</h6>
        </div>
        <div className="description">{description} </div>

        <div className="link">
          link to repository <br></br>
          <a href={link}>{link}</a>
          <br></br>
          {live ? <a href={live}>{live}</a> : <div></div>}
        </div>
      </div>
    );
  };
  return (
    <div className="projects hero">
      <div className="hName">
        <h1>Some Projects that I made</h1>
      </div>
      {LIST.map((e, idx) => {
        return (
          <Project
            name={e.name}
            key={e.name}
            stack={e.stack}
            description={e.description}
            link={e.link}
            live={e.live}
            idx={idx}
          />
        );
      })}
    </div>
  );
};

export default Projects;
