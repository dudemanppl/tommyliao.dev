import React from "react";
import Inset from "./inset";

const Splash = () => {
  return (
    <div className="splash">
      <Inset />
      <style jsx>
        {`
          .splash {
            position: absolute;
            z-index: 1;
            top: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(
              170deg,
              rgb(255, 255, 255) 0%,
              rgb(155, 232, 255) 18%,
              rgb(135, 227, 255) 30%,
              rgb(95, 212, 247) 45%,
              rgb(78, 188, 222) 60%,
              rgb(73, 181, 213) 75%,
              rgb(63, 168, 200) 90%
            );

            height: 800px;
          }
          @media (max-width: 700px) {
            .splash {
              top: 0;
              // position: absolute;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Splash;
