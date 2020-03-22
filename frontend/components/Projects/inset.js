import React from "react";

const Inset = ({
  project: { name, techStack, description, bulletPoints, media, githubLink }
}) => {
  return (
    <div className="inset">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="stack">
        {techStack.map((tech, i) => (
          <div className="tech" key={tech + i}>
            {tech}
          </div>
        ))}
      </div>
      <ul className="bullets">
        {bulletPoints.map((point, i) => (
          <li className="point" key={point[0] + i}>
            {point}
          </li>
        ))}
      </ul>
      {githubLink && (
        <a className="github" href={githubLink}>
          <div className="icon">
            <svg role="button" viewBox="0 0 24 24">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
        </a>
      )}
      <style jsx>{`
        .inset {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: white;
          flex-direction: column;
        }

        .name {
          font-size: 70px;
          font-weight: bold;
          text-align: center;
        }

        .description {
          position: relative;
          top: -5px;
          text-align: center;
          opacity: 0.7;
        }

        .stack {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tech {
          margin: 0 10px;
          font-size: 20px;
          font-style: oblique;
        }

        .bullets {
          width: 80%;
        }

        .point {
          margin-bottom: 14px;
          opacity: 0.7;
        }

        svg {
          height: 100%;
        }
        .icon {
          height: 40px;
          width: 40px;
          margin: 5px;
          transition: opacity 0.2s;
        }

        .icon:hover {
          opacity: 0.75;
        }

        .github:hover {
          opacity: 0.65;
        }

        .hidden {
          display: none;
        }

        @media all and (max-width: 460px) {

          .description {
            width: 95%;
          }
          .name {
            font-size: 40px;
          }

          .point {
            margin-bottom: 8px;
          }

          .stack,
          .point {
            width: 90%;
          }

          .tech,
          .point {
            font-size: 14px;
          }
          .inset > div {
            margin: 3px 0;
          }
        }

        
        @media all and (max-width: 385px) {
          .name {
            font-size: 30px;
          }
          
          .icon {
            height: 30px;
            width: 30px;
          }
          
          .point {
            margin-bottom: 6px;
          }
          
          .stack {
            width: 100%;
          }
          
          .tech,
          .point,
          .description {
            font-size: 12px;
          }
          
          .bullets {
            width: 95%;
          }
          
          .inset > div {
            margin: 2px 0;
          }
        }
        @media all and (max-height: 675px) {
          .github{
            position: relative;
            top: -10px;
          }
        }

        @media all and (max-height: 550px) {
          .tech,
          .point,
          .description {
            font-size: 11px;
          }

          .github{
            position: relative;
            top: 0;
          }

          .inset > div {
            margin: 3px 0;
          }
        }
      }
      `}</style>
    </div>
  );
};

export default Inset;
