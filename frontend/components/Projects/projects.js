import React from "react";
import Inset from "./inset";

const proj = {
  name: "TableLit",
  techStack: [
    "Node.js",
    "NGINX",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Loader.io",
    "New Relic"
  ],
  description:
    "Scaled a legacy code base to handle a throughput of over 10,000 CPS",
  bulletPoints: [
    `Reduced response time from over 3000ms to an average of 65ms by setting DB indexes and making use of the New Relic APM to identify and remove unnecessary bloat from the Node API instances`,
    `Increased throughput from 30 clients/min to over 10,000 clients/sec with a combination of horizontal and vertical scaling, stress tested through Loader.io, using t2.micro instances for the API`,
    `Containerized API instances using Docker to streamline deployment, mitigating any environment mismatches`
  ],
  media: [{ url: "test", description: "test" }]
};
const Projects = () => {
  return (
    <div className="projects">
      {/* <a href="#last">GO TO LAST</a> */}
      <div className="test">
        <Inset proj={proj} />
      </div>
      <div className="test">
        <Inset proj={proj} />
      </div>
      <div className="test">
        <Inset proj={proj} />
      </div>
      <div id="last" className="test">
        <Inset proj={proj} />
      </div>

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
            -webit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }

          .projects > div {
            scroll-snap-align: start;
          }

          .test {
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
