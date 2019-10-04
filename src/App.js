import React, { useState } from "react";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function App() {
  //useState works with setting up state (this.state) && updating state (this.setState)
  const [todos, setTodos] = useState([
    //we are setting up our state which is an array of objects
    {
      text: "Learn about react",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build cool todo app",
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          //passing props to Todo Component which is a function Component that is declared above in App.js Component.
          //so different then class based but, very exciting.
          <Todo key={index} index={index} todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
}

export default App;
