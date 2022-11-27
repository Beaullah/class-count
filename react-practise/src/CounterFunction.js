import React, { useState } from "react";

const CounterFunction = () => {
  const [count, handleUpdate] = useState({ number: 0 });

  return (
    <>
      <h1>Counter: {count.number}</h1>
      <hr />
      <button onClick={() => handleUpdate({ number: count.number + 1 })}>
        Increase count
      </button>
      <button onClick={() => handleUpdate({ number: count.number - 1 })}>
        Decrease count
      </button>
    </>
  );
};
export default CounterFunction;
