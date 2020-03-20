import React from "react";
import Inset from "./inset";

import projects from "../../dummy";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, i, a) => {
        return (
          <div id={"project" + i} className="project" key={project.name}>
            <Inset project={project} index={i} max={a.length} />
          </div>
        );
      })}

      <style jsx>
        {`
          .scroll {
          }
          .projects {
            z-index: 1;
            position: relative;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            height: 100vh;
            width: 100%;
            overflow: -moz-scrollbars-none;
          }

          .projects::-webkit-scrollbar {
            width: 0 !important;
            height: 0;
          }

          .project {
            flex-shrink: 0;
            position: relative;
            width: 100%;
            height: 100%;
          }
          @media all and (min-width: 700px) {
            .projects {
              top: 60px;
              height: calc(100vh - 60px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
