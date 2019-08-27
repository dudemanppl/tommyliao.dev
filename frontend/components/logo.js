import React from "react";

const Logo = ({ size }) => (
  <svg className="logo" height={size} width={size}>
    <rect
      y="calc(100%/15 * 1)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#5F5F5F" }}
    />

    <rect
      y="calc(100%/15 * 3)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#3F3F3F" }}
    />

    <rect
      y="calc(100%/15 * 5)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#5E5E5E" }}
    />

    <rect
      y="calc(100%/15 * 7)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#7F7F7F" }}
    />

    <rect
      y="calc(100%/15 * 9)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#9E9E9E" }}
    />

    <rect
      y="calc(100%/15 * 11)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#BFBFBF" }}
    />

    <rect
      y="calc(100%/15 * 13)"
      width="100%"
      height="calc(100%/15)"
      style={{ fill: "#DDDDDD" }}
    />
    <style jsx>{`
      .logo {
        transition: opacity 0.2s;
      }
      .logo:hover {
        opacity: 0.7;
      }
    `}</style>
  </svg>
);

export default Logo;
