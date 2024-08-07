import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy]= useState(1);
  function handleClickPlus(){
    setCount(count + incrementBy);
  }

  function handleClickMinus(){
    setCount(count - 1);
  }

  function increaseIncrement(){
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement(){
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
      <h1>We are incrementing the value by : {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increas Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
