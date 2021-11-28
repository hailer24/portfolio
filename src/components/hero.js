import React, { useState } from "react";
import "../styles/home.css";
import Matrix from "./matrix";
import Plus from "./plus";

const Hero = () => {
  // let [name, setName] = useState("anmol");
  return (
    <div className="hero">
      <Plus />
      <Matrix />
      <div className="container">
        <h2>
          Hi I'm <span>an</span>mol
        </h2>
        <br></br>
        <div className="addName">
          {/* {<h2>
            And you are
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
