import React from "react";

const LIST = [
  {
    name: "Linkedin-clone",
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
    name: "ord-com",
    stack: "python, matplotlib, numpy, openCV",
    link: "https://github.com/hailer24/ord-com",
    description:
      "ord-com is a 3 plot of 2d block coordinates and it is a solution to problem statement in vantage 2020 organised by IIT guwahati and bagged 1st position.",
  },
  {
    name: "markdown-editor",
    stack: "react.js, ReactMarkdown ",
    link: "https://github.com/hailer24/markdown-editor",
    description:
      "A basic markdown Editor using react and it's basic properties of hook and context",
  },
];

const Projects = () => {
  const Project = ({ name, stack, description, link, live, idx }) => {
    return (
      <div className={`project proj${idx}`}>
        <div className="head">{name}</div>
        <div className="stack">{stack}</div>
        <div className="description">{description}</div>
        <div className="link">
          link to repo<a href={link}>{link}</a>
        </div>
        <div className="live">
          link to project <a href={live}>{live}</a>
        </div>
      </div>
    );
  };
  return (
    <div className="projects">
      <div className="head">Some Projects -</div>
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
