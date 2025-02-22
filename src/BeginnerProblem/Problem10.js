import React, { useState } from "react";

const Problem10 = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const handleCLick = () => {
    const newColor = backgroundColor === "red" ? "blue" : "red";
    setBackgroundColor(newColor);
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div
        onClick={handleCLick}
        style={{
          backgroundColor,
          width: "200px",
          height: "200px",
          cusrsor: "pointer",
        }}
      >
        {/* Dynamic Background: Create a component that changes its background color when clicked.*/}
        {/* Problem 10 */}
      </div>
    </div>
  );
};

export default Problem10;
