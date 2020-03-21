import React from "react";

const ScrollButtons = ({ projCount, currIdxShown, setCurrIdxShown }) => {
  let last = currIdxShown - 1 < 0 ? projCount : currIdxShown - 1;
  let next = currIdxShown + 1 > projCount ? 0 : currIdxShown + 1;

  const clickHandler = direction => {
    if (direction === "last") {
      setCurrIdxShown(last);
    } else if (direction === "next") {
      setCurrIdxShown(next);
    }
  };

  return (
    <div className="scrollButtons">
      <div
        className="scrollLast"
        onClick={() => clickHandler("last")}
      >{`<`}</div>

      <div
        className="scrollNext"
        onClick={() => clickHandler("next")}
      >{`>`}</div>

      <style jsx>{`
        .scrollButtons {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .scrollLast,
        .scrollNext {
          margin: 20px;
          font-size: 60px;
          transition: opacity 0.2s;
        }

        .scrollLast:hover,
        .scrollNext:hover {
          cursor: pointer;
          opacity: 0.5;
        }

        @media all and (max-width: 700px) {
          .scrollLast,
          .scrollNext {
            margin: 5px;
            font-size: 40px;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollButtons;
