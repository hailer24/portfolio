import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrap">
        <div className="left">
          <p className="endNotes">
            I’m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
        </div>
        <div className="right">
          <div className="mail">
            <h4>Mail me</h4>
            <a href="mailto:mail2mole@gmail.com">mail2mole@gmail.com</a>
          </div>
          <div className="resume">
            <h4>Take a look at my resume</h4>
            <a href="assets/Anmol.pdf">Resume</a>
          </div>
        </div>
        <div className="socials">
          <span className="linkedin">
            <a href="https://www.linkedin.com/in/anmol-bhutani-b132931a5/">
              linkedin
            </a>
          </span>{" "}
          <span className="gihub">
            <a href="https://github.com/hailer24">github</a>
          </span>
        </div>
        <div className="copy">made by mole</div>
      </div>
    </div>
  );
};

export default Footer;
