import React from "react";
import { useState } from "react";

const Problem2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Second Practice: Problem Solving</h2>
      {/* Counter App: Build a counter application with buttons to increment and decrement the count. */}
      <h2>Counter App</h2>
      <div className="flex items-center gap-10">
        <button
          className="Increment px-3 py-1 bg-black rounded-md text-xl text-white"
          onClick={increment}
        >
          +
        </button>
        <h2 className="text-red-500 font-bold text-xl">{count}</h2>
        <button
          className="decrement px-3 py-1 bg-black rounded-md text-xl text-white"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Problem2;
