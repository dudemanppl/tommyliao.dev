import React from "react";
import Inset from "./inset";

const Splash = () => {
  return (
    <div className="splash">
      <div className="inset">
        <Inset />
      </div>
      <style jsx>
        {`
          .splash {
            position: relative;
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

            height: calc(100vh - 60px);
          }

          .inset {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 500px;
            width: 500px;
            background: rgb(250, 250, 250);
            box-shadow: 20px 20px 30px rgb(11, 104, 133);
          }

          @media all and (max-width: 700px) {
            .splash {
              top: 0;
              height: 100vh;
            }
            .inset {
              width: 100%;
              height: 600px;
              box-shadow: 0 20px 30px rgb(11, 104, 133);
            }
          }

          @media all and (max-height: 700px) {
            .inset {
              box-shadow: none;
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Splash;
