import React from "react";

const ScrollButtons = ({ projCount, currIdx, setCurrIdx }) => {
  let last = currIdx - 1 < 0 ? projCount : currIdx - 1;
  let next = currIdx + 1 > projCount ? 0 : currIdx + 1;

  const clickHandler = (id, direction) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    if (direction === "last") {
      setCurrIdx(last);
    } else if (direction === "next") {
      setCurrIdx(next);
    }
  };

  return (
    <div className="scrollButtons">
      <div
        className="scrollLast"
        onClick={() => {
          clickHandler("project" + last, "last");
        }}
      >{`<`}</div>

      <div
        className="scrollNext"
        onClick={() => clickHandler("project" + next, "next")}
      >{`>`}</div>

      <style jsx>{`
        .scrollButtons {
          position: relative;
          // top: calc(-1 * 100vh + 60px);
          width: 100vw;
          height: 100vh;
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
      `}</style>
    </div>
  );
};

export default ScrollButtons;
