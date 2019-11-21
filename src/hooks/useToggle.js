//creating our own hook that we can call in the Component
import { useState } from "react";
function useToggle(initalVal = false) {
  //call useState, "reserve piece of state"
  const [state, setState] = useState(initalVal);
  //defining our toggle function
  const toggle = () => {
    setState(!state);
  };
  //hooks return an array and our hook is returning an array just like useState does with a value and a function in the array.
  return [state, toggle];
}
export default useToggle;
//above is the same as what we have below but, we can use it on both isHappy State & inLove State
// const toggle = () => {
//     setIsHappy(!isHappy);
//   };
//   const toggleLove = () => {
//     setInLove(!inLove);
//   };
//return piece of state AND a function to toggle it
