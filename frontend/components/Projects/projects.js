import React, { useState } from "react";
import Inset from "./inset";
import ScrollButtons from "./scrollButtons";
import Test from "./test";

import projects from "../../dummy";

const Projects = () => {
  const [currIdx, setCurrIdx] = useState(0);

  return (
    <div className="projects">
      {/* {projects.map((project, i, a) => {
        return (
          <div id={"project" + i} className="project" key={project.name}>
            <Inset project={project} index={i} max={a.length} />
          </div>
        );
      })} */}
      {/* {currIdx} */}
      <Test className="project" />

      <ScrollButtons
        currIdx={currIdx}
        setCurrIdx={setCurrIdx}
        projCount={projects.length}
      />

      <style jsx>
        {`
          .projects {
            z-index: 1;
            position: relative;
            display: flex;
            height: 100vh;
            width: 100%;
          }

          .project {
            width: 85%;
            height: 85%;
            background-color: white;
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
