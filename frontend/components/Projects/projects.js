import React, { useState } from "react";
import Inset from "./inset";
import ScrollButtons from "./scrollButtons";

import projects from "../../dummy";

const Projects = () => {
  const [currIdxShown, setCurrIdxShown] = useState(0);
  const projCount = projects.length - 1;

  return (
    <div className="projects">
      <div className="project">
        <Inset project={projects[currIdxShown]} />
      </div>

      <div className="scrollButtons">
        <ScrollButtons
          currIdxShown={currIdxShown}
          setCurrIdxShown={setCurrIdxShown}
          projCount={projCount}
        />
      </div>

      <style jsx>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .projects {
            z-index: 1;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 60px;
            height: calc(100vh - 60px);
            width: 100%;
            background: rgb(${projects[currIdxShown].RGBStr});
          }

          .project {
            position: absolute;
            z-index: 3;
            width: 85%;
            height: 85%;
          }

          .scrollButtons {
            position: absolute;
            z-index: 2;
            height: 100%;
            width: 100%;
          }

          @media all and (max-width: 700px) {
            .projects {
              top: 0px;
              height: 100vh;
            }

            .project {
              width: calc(100% - 65px);
              height: calc(100% - 65px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
