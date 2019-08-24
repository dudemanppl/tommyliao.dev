import React from "react";
import Inset from "./inset";

const Splash = () => {
  return (
    <div className="splash">
      <Inset />
      <style jsx>
        {`
          .splash {
            position: fixed;
            z-index: 1;
            top: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(
              170deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(155, 232, 255, 1) 18%,
              rgba(135, 227, 255, 1) 30%,
              rgba(95, 212, 247, 1) 45%,
              rgba(78, 188, 222, 1) 60%,
              rgba(73, 181, 213, 1) 75%,
              rgba(63, 168, 200, 1) 90%
            );

            height: 800px;
          }
        `}
      </style>
    </div>
  );
};

export default Splash;
