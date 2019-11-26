//Introduction to useEffect in replace of React life cycle method.
import React, { useState, useEffect } from "react";
function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`The Count is ${count}`);
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Clicker;
