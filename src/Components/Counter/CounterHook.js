import React, { useState } from "react";

function CounterHook(props) {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>CounterHook</h1>
      <h3>Your Hook Counter is: {count}</h3>
      <button onClick={handleCount}>Add 1 to Hook Counter</button>
    </div>
  );
}

export default CounterHook;
