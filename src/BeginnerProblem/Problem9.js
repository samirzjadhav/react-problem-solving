import React, { useState } from "react";

const Problem9 = () => {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todo, input]);
      setInput("");
    }
  };

  const todoRemove = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* To-Do List: Develop a to-do list application with features to add and remove tasks. */}
      {/* Problem 9 */}

      <input
        type="text"
        className="border-2 border-black"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button className="remove" onClick={() => todoRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problem9;
