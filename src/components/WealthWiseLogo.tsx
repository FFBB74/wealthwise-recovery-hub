import * as React from "react";

const WealthWiseLogo = ({ height = 36 }) => (
  <img
    src="/lovable-uploads/06a7ad29-8717-4d82-a4a9-abf2fb637d88.png"
    alt="WealthWise Recovery Logo"
    height={height}
    width={height}
    className="inline-block rounded-full"
    style={{ minWidth: height, minHeight: height, objectFit: 'contain' }}
  />
);

export default WealthWiseLogo;
