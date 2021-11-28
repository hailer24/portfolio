import React from "react";
import "../styles/skills.css";

const Skill = ({ name, idx }) => {
  return <div className={`div${idx} skill`}>{name}</div>;
};

const Skills = () => {
  const list = [
    {
      name: "React.js",
      photo: "assets/react.png",
    },

    {
      name: " javaScript",
      photo: "assets/js.png",
    },
    {
      name: "  c++",
      photo: "assets/c.png",
    },
    {
      name: "   html",
      photo: "assets/html.png",
    },
    {
      name: "Image processing",
      photo: "assets/css.png",
    },

    {
      name: "     github",
      photo: "assets/github.png",
    },

    {
      name: "      docker",
      photo: "assets/docker.png",
    },
    {
      name: "python",
    },
    {
      name: "node.js",
    },
  ];
  const want = [
    {
      name: "Rust",
    },
    {
      name: "",
    },
    {
      name: "web 3.0",
    },
  ];
  return (
    <div className="hero skills">
      <h2>My skill set</h2>
      <div className="skillList">
        {list.map((e, idx) => {
          return <Skill name={e.name} key={e.name} idx={idx + 1} />;
        })}
      </div>
      <h2>What I want to learn</h2>
      <div className="skillList">
        {want.map((e, idx) => {
          return <Skill name={e.name} key={e.name} idx={idx + 1} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
