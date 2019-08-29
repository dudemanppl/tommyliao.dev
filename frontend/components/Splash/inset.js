import React from "react";
import Icons from "./icons";

const Inset = () => {
  return (
    <div className="insetContainer">
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
      </div>
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

        a {
          color: black;
          text-decoration: none;
        }
        .resume {
          font-size: 30px;
          font-weight: bold;
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
        .insetContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
          width: 500px;
          background: rgb(250, 250, 250);
          box-shadow: 20px 20px 30px rgb(11, 104, 133);
        }
        .inset {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          top: 50px;
        }
        @media (min-width: 700px) {
          .resume {
            display: none;
          }
        }
        @media (max-width: 700px) {
          .insetContainer {
            width: 100%;
            height: 600px;
            box-shadow: 0 20px 30px rgb(11, 104, 133);
          }
        }
        @media (max-width: 350px) {
          .name {
            font-size: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Inset;
