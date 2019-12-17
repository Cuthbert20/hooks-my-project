import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
//custom hook for form will return an array with state and 2 functions one for reseting values and one for setState
//example of using custom hook
//const [age, handleAgeChange, resetAge] = useFormState("")
