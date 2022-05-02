import React, { useContext } from "react";
import { Passvalue } from "./App";
const Childone = () => {
  const getValue = useContext(Passvalue);
  const increment = () => {
    getValue.setState(getValue.state + 1);
  };
  const decrement = () => {
    getValue.setState(getValue.state - 1);
  };
  return (
    <div>

      <button onClick={increment}>+</button>
      {getValue.state}
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Childone;