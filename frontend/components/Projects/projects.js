import React from "react";
import Inset from "./inset";

const Projects = () => {
  return (
    <div className="projects">
      <Inset />
      <style jsx>
        {`
          .projects {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 5000px;
            width: 100%;
            background: #f2eadf;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
