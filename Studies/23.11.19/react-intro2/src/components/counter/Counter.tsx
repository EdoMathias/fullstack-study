import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };
  const reduceOne = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={addOne}>+</button>
      <button onClick={reduceOne} disabled={count <= 0}>
        -
      </button>
      <button onClick={reset}>reset</button>
      <br></br>
      <span>Current num:{count}</span>
    </>
  );
};
