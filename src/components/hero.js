import React, { useState } from "react";
import "../styles/home.css";
import Matrix from "./matrix";

const Hero = () => {
  // let [name, setName] = useState("what's yours");
  const [active, setActive] = useState(false);
  const changeClr = () => {
    if (window.scrollY > 100) setActive(true);
    else setActive(false);
  };
  window.addEventListener("scroll", changeClr);
  return (
    <div className="hero">
      <Matrix
        className={active ? "active circle" : "circle"}
        row={8}
        col={16}
      />
      <div className="container">
        <h2>Hi I'm anmol</h2>
        <br></br>
        <div className="addName">
          {/* {<h2>
            <input
              className="nameInput"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>}
            </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
