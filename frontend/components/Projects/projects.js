import React from "react";
import Inset from "./inset";
import projects from "../../../dummy";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, i) => {
        return (
          <div id={"project" + i} className="project" key={project.name}>
            <Inset project={project} />
          </div>
        );
      })}

      <style jsx>
        {`
          .projects {
            position: relative;
            top: 60px;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            height: calc(100vh - 60px);
            width: 100%;
            // -webkit-overflow-scrolling: touch;
            // scroll-snap-type: x mandatory;
            // scroll-behavior: smooth;
            // overflow: -moz-scrollbars-none;
          }

          .projects::-webkit-scrollbar {
            width: 0 !important;
            height: 0;
          }

          .projects > div {
            scroll-snap-align: start;
          }

          .project {
            flex-shrink: 0;
            position: relative;
            width: 100%;
            height: 100%;
          }
          @media and (max-width: 700px) {
            .projects {
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
