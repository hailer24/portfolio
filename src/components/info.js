import React from "react";

const Info = () => {
  return (
    <>
      <div className="info hero">
        <h1>A little bit about myself</h1>
        <div className="wrapper">
          <div className="img">
            <img src="assets/profile.jpg" alt="mole" />
          </div>
          <div className="heading">
            <h5 className="hName">Anmol Bhutani</h5>
            <h6 className="subHeading">
              ECE undergrad 2019-2023
              <br /> NIT kurukshetra
            </h6>
            <p className="brief">
              I have a real passion for development and my motto is to do dumb
              shit and learn on. I find it rewarding to write clean code and be
              a part of the solution bringing design to development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
