import React, { useEffect, useState } from "react";

const Problem8 = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  });
  return (
    <div>
      {/* Timer: Create a timer that counts down from a specified time. */}
      {/* Problem 8 */}
      Time Left : {time} Seconds
    </div>
  );
};

export default Problem8;
