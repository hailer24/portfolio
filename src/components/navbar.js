import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="mode"></div>
        <div className="nav-item">
          <ul>
            <li className="nav-item">
              <a href="/" className="mole">
                <h6 className="nav-item">home</h6>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="mole">
                <h6 className="nav-item">about</h6>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="mole">
                <h6 className="nav-item">
                  <a href="assets/Anmol.pdf">Resume</a>
                </h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
