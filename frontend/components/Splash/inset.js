import React from "react";
import Icons from "./icons";

const Inset = () => {
  return (
    <div className="inset">
      <img src="https://dudemanppl.s3-us-west-1.amazonaws.com/41962026_1898602030162209_5312635139379953664_o+(1).jpg" />
      <div className="name">Tommy Liao</div>
      <div className="bio">Full Stack Developer</div>
      <Icons />
      <a
        className="resume"
        href="https://dudemanppl.s3-us-west-1.amazonaws.com/resume.pdf"
      >
        Resume
      </a>

      <style jsx>{`
        img {
          min-height: 250px;
          min-width: 250px;
          height: 50%;
          width: 50%;
          border-radius: 50%;
          border: solid white 5px;
          box-shadow: 0px 0px 15px rgb(200, 200, 200);
        }
        .resume {
          display: none;
          font-size: 30px;
          font-weight: bold;
        }

        a {
          color: black;
          text-decoration: none;
        }

        .name {
          font-weight: bold;
          font-style: italic;
          font-size: 60px;
        }
        .bio {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .inset {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          top: 50px;
        }
        @media all and (max-width: 700px) {
          .resume {
            display: inline-box;
          }
        }

        @media all and (max-width: 350px) {
          .name {
            font-size: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Inset;
