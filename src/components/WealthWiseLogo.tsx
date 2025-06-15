
import * as React from "react";

const WealthWiseLogo = ({ height = 36 }) => (
  <svg
    height={height}
    viewBox="0 0 64 64"
    fill="none"
    className="inline-block"
    style={{ minWidth: height, minHeight: height }}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="32" fill="url(#logoGradient)" />
    <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
    <text
      x="32"
      y="40"
      textAnchor="middle"
      fontSize="24"
      fill="white"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      letterSpacing="1px"
    >
      W
    </text>
  </svg>
);

export default WealthWiseLogo;
