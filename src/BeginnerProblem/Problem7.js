import { React, useState } from "react";

const Problem7 = () => {
  const [input, setInput] = useState();

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Avoid using eval in production
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <div>
      <h2>seventh Practice: Problem Solving</h2>
      {/* Problem 7 */}
      {/* Calculator App: Build a simple calculator application with basic arithmetic operations. */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="bg-gray-100 p-4 rounded text-right mb-4 text-2xl font-mono">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700 focus:outline-none"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem7;
