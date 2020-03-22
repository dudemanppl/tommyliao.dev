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
      <div className="scrollLast" onClick={() => clickHandler("last")}></div>

      <div className="scrollNext" onClick={() => clickHandler("next")}></div>

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
          margin: 3%;
          transition: opacity 0.2s;
          width: 25px;
          height: 25px;
          border-top: 4px solid rgb(80, 80, 80);
          border-right: 4px solid rgb(80, 80, 80);
        }

        .scrollLast {
          transform: rotate(-135deg);
        }

        .scrollNext {
          transform: rotate(45deg);
        }

        .scrollLast:hover,
        .scrollNext:hover,
        .scrollLast:focus,
        .scrollNext:focus {
          cursor: pointer;
          opacity: 0.5;
        }

        @media all and (max-width: 700px) {
          .scrollLast,
          .scrollNext {
            margin: 10px;
            height: 20px;
            width: 20px;
          }
        }
        @media all and (max-width: 350px) {
          .scrollLast,
          .scrollNext {
            width: 13px;
            height: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollButtons;
