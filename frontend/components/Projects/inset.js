import React from "react";

const Inset = ({ name, techStack, description, bulletPoints, media }) => {
  const randNum = () => {
    return Math.floor(Math.random() * 30) + 220;
  };

  let RGBStr = "";
  for (let i = 0; i < 3; i += 1) {
    RGBStr += i < 2 ? randNum() + "," : randNum();
  }

  return (
    <div className="inset">
      <style jsx>{`
        .inset {
          flex-shrink: 0;
          position: relative;
          width: 100%;
          height: 100%;
          background: rgb(${RGBStr});
        }
      `}</style>
    </div>
  );
};

export default Inset;
