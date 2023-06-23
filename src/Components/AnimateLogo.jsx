import React from "react";

const AnimateLogo = () => {
  return (
    <div>
      {["S", "a", "i", "f"].map((a, b) => (
        <span key={b}> {a} </span>
      ))}
    </div>
  );
};

export default AnimateLogo;
