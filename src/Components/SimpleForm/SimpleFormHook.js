import React from "react";
import useInputState from "../../hooks/useInputState";

function SimpleFormHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [username, updateUsername, resetUsername] = useInputState("");
  return (
    <div>
      <h1>
        Email: {email}, Username: {username}
      </h1>
      <input
        placeholder="email"
        value={email}
        onChange={updateEmail}
        type="text"
      />
      <input
        placeholder="username"
        value={username}
        onChange={updateUsername}
        type="text"
      />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetUsername}>Reset Username</button>
    </div>
  );
}

export default SimpleFormHook;
