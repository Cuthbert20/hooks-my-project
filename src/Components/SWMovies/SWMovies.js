import React, { useState, useEffect } from "react";
import Axios from "axios";

//NOTE SWAPI wasn't working so I went with jsonplaceholder todos,
//everything will work the same but, we will just get back a todo title instead of a Star Wars Movie Title, sad I know.

export default function SWMovies() {
  const [number, setNumber] = useState(1);
  const [todo, setTodo] = useState("");
  const numArr = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/todos/${number}`
      );
      //setting todo to title that we fetched from jsonplaceholder todos
      setTodo(response.data);
    }
    getData();
    console.log("hit");
    // to stop from getting an infinite loop you pass in a second argument
    //an array telling useEffect to only run when state is changed on the items you passed into the array.
  }, [number]);
  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>You Chose: {todo.title}</h4>
      <select value={number} onChange={e => setNumber(e.target.value)} id="">
        {/* <option value="">Pick a Movie</option> */}
        {numArr.map((num, index) => {
          return (
            <option key={index} value={num}>
              {num}
            </option>
          );
        })}
      </select>
    </div>
  );
}
