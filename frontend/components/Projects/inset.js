import React from "react";

const Inset = ({
  project: { name, techStack, description, bulletPoints, media, RGBStr }
}) => {
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
