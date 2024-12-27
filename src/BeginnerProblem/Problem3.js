import React from "react";
import { useState } from "react";

const Problem3 = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Third Practice: Problem Solving</h2>
      {/* Question No. 3 */}
      {/* Real-time Input: Create a form that captures user input and displays it in real-time as the user types. */}
      <form action="" className="flex items-center gap-3 mt-4">
        <input
          type="text"
          placeholder="give me a text"
          name=""
          id=""
          value={input}
          className="border-2 border-gray-300 px-2 py-1 rounded-md placeholder-gray-500"
          onChange={(e) => setInput(e.target.value)}
        />
        <h3>User Input: {input}</h3>
      </form>
    </div>
  );
};

export default Problem3;
