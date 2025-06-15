
import * as React from "react";

const WealthWiseLogo = ({ height = 36 }) => (
  <svg
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    className="inline-block"
    style={{ minWidth: height, minHeight: height }}
  >
    <circle cx="32" cy="32" r="32" fill="#28c7d9" />
    <text
      x="32"
      y="39"
      textAnchor="middle"
      fontSize="28"
      fill="white"
      fontFamily="'Playfair Display', serif"
      fontWeight="bold"
    >
      W
    </text>
  </svg>
);

export default WealthWiseLogo;
