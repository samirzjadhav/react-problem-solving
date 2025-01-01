import React from "react";

const Problem5 = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h2>Fifth Practice: Problem Solving</h2>
      {/* Problem 5 */}
      {/* Toggle Switch: Implement a basic toggle switch component that changes its state when clicked. */}

      <div className="toggle-switch">
        <input type="checkbox" id="toggle" onChange={handleToggle} />
        <label htmlFor="toggle">{toggle ? "On" : "Off"}</label>
      </div>
    </div>
  );
};

export default Problem5;
