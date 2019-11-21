import React, { useState } from "react";

function CounterHook(props) {
  // we call useState and it returns an array with 2 values
  //1. the piece of state. 2. function to update that piece of state
  const [count, setCount] = useState(0);
  //   function handleCount() {
  //     setCount(count + 1);
  //   }
  return (
    <div>
      <h1>CounterHook</h1>
      <h3>Your Hook Counter is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add 1 to Hook Counter</button>
    </div>
  );
}

export default CounterHook;
