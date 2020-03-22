import React, { useEffect } from "react";
import Logo from "./logo";

const Nav = ({ section }) => {
  // scrolls to section and adds conditional styling to button
  const goToSection = (event, id) => {
    event.target.classList.add("current");
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // conditionally renders styling for buttons
  useEffect(() => {
    const classAdder = id => {
      document.getElementById(id).classList.add("current");
    };
    [...document.getElementsByClassName("button")].forEach(button => {
      button.classList.remove("current");
    });

    if (section === "Projects") {
      classAdder("projectsButton");
    } else if (section === "AboutMe") {
      classAdder("aboutmeButton");
    } else if (section === "Contact") {
      classAdder("contactButton");
    }
  }, [section]);

  return (
    <div className="nav">
      <div
        id="logo"
        className="logo"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      >
        <Logo size="60" />
      </div>

      <div className="buttonContainer">
        <div
          id="projectsButton"
          className="button"
          onClick={e => {
            goToSection(e, "Projects");
          }}
        >
          Projects
        </div>
        <div
          id="aboutmeButton"
          className="button"
          onClick={e => {
            goToSection(e, "AboutMe");
          }}
        >
          About Me
        </div>
        <div id="contactButton" className="button">
          Contact{" "}
        </div>

        <a
          className="button"
          href="https://dudemanppl.s3-us-west-1.amazonaws.com/resume.pdf"
        >
          Resume
        </a>
      </div>

      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }

        .nav {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: flex-end;
          background: white;
          position: fixed;
          z-index: 10;
        }

        .logo {
          cursor: pointer;
          position: absolute;
          left: calc(50% - 30px);
        }

        .buttonContainer {
          display: flex;
        }

        .button {
          font-size: 22px;
          text-align: center;
          line-height: 60px;
          position: relative;
          height: 60px;
          width: 100px;
          margin: 0 20px;
        }

        .button:hover,
        .button.current {
          color: #3b3b3b;
          font-weight: bold;
          transition: color 0.3s;
          cursor: pointer;
        }

        .button::after {
          position: absolute;
          content: "";
          left: -15%;
          width: 0;
          height: 100%;
          border-bottom: 3px solid black;
          transition: width 0.15s;
        }

        .button:hover::after,
        .button.current::after {
          width: 130%;
        }

        @media (max-width: 1400px) {
          .logo {
            left: 30px;
          }
        }

        @media (max-width: 700px) {
          .buttonContainer {
            display: none;
          }
          .nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
