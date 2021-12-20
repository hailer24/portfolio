import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="mode"></div>
        <div className="nav-item">
          <ul>
            <li className="nav-item">
              <h6
                className="nav-item mole"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 100,
                    behavior: "smooth",
                  })
                }
              >
                home
              </h6>
            </li>
            <li className="nav-item">
              <h6
                className="nav-item mole"
                onClick={() =>
                  window.scrollTo({
                    top: 500,
                    left: 100,
                    behavior: "smooth",
                  })
                }
              >
                about
              </h6>
            </li>
            <li className="nav-item">
              <h6
                className="nav-item mole"
                onClick={() =>
                  window.scrollTo({
                    top: 1650,
                    left: 100,
                    behavior: "smooth",
                  })
                }
              >
                Projects
              </h6>
            </li>
            <li className="nav-item">
              <a href="/" className="mole">
                <h6 className="nav-item">
                  <a
                    href="assets/Anmol.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Resume
                  </a>
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
