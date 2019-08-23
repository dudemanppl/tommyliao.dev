import React from "react";
import Logo from "./logo";

const Nav = () => {
  const clickHandler = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="nav">
      <div className="logo el" onClick={() => clickHandler("top")}>
        <Logo size="60" />
      </div>
      <div className="buttonContainer el">
        <div className="button" onClick={() => clickHandler("test")}>
          Projects
        </div>
        <div className="button">About Me</div>

        <div className="button">Contact</div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Helvetica, sans-serif;
          // height: 15000px;
          // background: grey;
        }

        .nav {
          width: 100%;
          height: 60px;
          display: flex;
          background: white;
          position: fixed;
          z-index: 2;
        }

        .el {
          flex: 1;
          display: flex;
        }

        .button {
          font-size: 22px;
          display: flex;
          position: relative;
          align-items: center;
          height: 100%;
          min-width: 95px;
          margin: 0 20px;
        }

        .logo {
          align-items: center;
        }

        .buttonContainer {
          justify-content: flex-end;
        }

        .button::after {
          position: absolute;
          content: "";
          left: -15%;
          width: 0;
          height: calc(100% - 4px);
          border-bottom: 3px solid black;
          transition: width 0.15s ease;
        }

        .button:hover::after {
          width: 130%;
        }

        @media all and (min-width: 1000px) {
          .logo::before {
            content: "";
            flex: 1;
          }
        }

        @media all and (max-width: 700px) {
          .buttonContainer {
            display: none;
          }

          .logo::before {
            content: "";
            flex: 1;
          }

          .logo::after {
            content: "";
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
