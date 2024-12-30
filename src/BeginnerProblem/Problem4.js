import React from "react";

const Problem4 = () => {
  const items = ["item1 ", "item2 ", "item3 ", "item4 ", "item5 "];
  return (
    <div>
      <h2>Fourth Practice: Problem Solving</h2>
      {/* Problem 4 */}
      {/* List Component: Construct a component to display a list of items. */}
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Problem4;
