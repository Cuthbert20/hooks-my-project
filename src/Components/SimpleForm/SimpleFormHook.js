import React, { useState } from "react";

function SimpleFormHook(props) {
  const [username, setUsername] = useState("");
  const style = {
    color: "yellow"
  };
  const handleChange = e => {
    setUsername({ username: e.target.value });
    console.log(username);
  };
  return (
    <div>
      <h1 style={style}>Form with Hooks</h1>
      <input
        type="text"
        placeholder="username"
        onChange={e => handleChange(e)}
      />
    </div>
  );
}

export default SimpleFormHook;
