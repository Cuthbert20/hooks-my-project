import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import CounterHook from "./Components/Counter/CounterHook";
import Toggler from "./Components/Toggler/Toggler";
//destructuring todo and index from props
function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      //adding stying so that if todo is completed then there will be a line-through the text
      //isCompleted is set to false on state by default
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  );
}
//destructuring addTodo from props
function TodoForm({ addTodo }) {
  //form will have state so we will use useState again, state will be empty by default ie(useState(""))
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="add to do..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
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

  const addTodo = text => {
    //creating newTodos and keeping current todos by using spread operator
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    //like this.setState
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          //passing props to Todo Component which is a function Component that is declared above in App.js Component.
          //so different then class based but, very exciting.
          <Todo
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            key={index}
            index={index}
            todo={todo}
          ></Todo>
        ))}
        {/* passing addTodo to TodoForm */}
        <TodoForm addTodo={addTodo} />
      </div>
      <Counter />
      <CounterHook />
      <Toggler />
    </div>
  );
}

export default App;
