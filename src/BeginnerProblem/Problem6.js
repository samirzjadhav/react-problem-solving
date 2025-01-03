import React, { useEffect, useState } from "react";

const Problem6 = () => {
  const Api = "https://jsonplaceholder.typicode.com/todos/1";

  const [data, setData] = useState(null);

  //   const fetchdata = fetch(Api).then((res) =>
  //     res.json().then((data) => console.log(data))
  //   );

  useEffect(() => {
    fetch(Api).then((res) => res.json().then((data) => setData(data)));
  }, [console.log(data)]);

  return (
    <div>
      <h2>Sixth Practice: Problem Solving</h2>
      {/* Problem 6 */}
      {/* API Data Fetch: Develop a component that fetches data from an API and displays it on the page. */}
      <div className="">
        <h2>API Data Fetch</h2>
        {data ? (
          <div>
            <h1>Title: {data.title}</h1>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    // Rewise the code tommorow and try to understand the code
  );
};

export default Problem6;
