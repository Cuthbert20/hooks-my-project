import React from "react";
import useToggle from "../../hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [inLove, toggleInLove] = useToggle(false);
  const [daytime, toggleDaytime] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
      <h1 onClick={toggleInLove}>{inLove ? "Heart" : "Broken Heart"}</h1>
      <h1 onClick={toggleDaytime}>{daytime ? "Get to Work" : "Go to Sleep"}</h1>
    </div>
  );
}

export default Toggler;
